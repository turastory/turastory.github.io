---
title: MSA를 위한 메시지 브로커 고르기
description: SQS, RabbitMQ, Redis, ... 승자는?
tags:
  - microservice
  - message-brocker
  - redis
  - rabbitmq
---

회사에서 개발하고 있는 서비스 구조가 문제가 좀 있는 것 같아서 다시 설계를 해보고 있는데, 내가 지금까지 하고 있던게 이벤트 큐를 사용해서 서비스간 통신을 하고 있던거라는 걸 깨닫고.. 혹시 다른 방법은 있는지 조사를 해보았다.

마이크로서비스 아키텍처의 특징이나 장단점은 명확한 것 같고, 어쨌든 지금 나는 MSA를 구현해야 하기 떄문에 (싱글 서비스로는 구현하기 어려운 기능들이 좀 있음) 구체적인 방법에 대해서 찾아봤다.

## 서비스간 통신 방법 고르기

마이크로서비스 아키텍처에서는 전체 시스템이 작고 독립적인 서비스로 구성되어 있으니 서비스간 통신이 중요한 문제가 될 것인데.. 이 통신 방법도 여러 가지가 있다.

### HTTP 통신

가장 먼저 떠올릴 수 있는 방법. 다만 MSA에서는 단점이 훨씬 많은 것 같다.

- 중간 단계 레이어가 필요 없음 (서버 - 서버 다이렉트로 통신)
- 서비스간의 커플링이 비교적 높음 (어떻게 통신하는지 서로 알아야 하므로)
- HTTP 통신을 위한 별도의 레이어를 각 서버에서 구현해야 함

HTTP 통신을 사용하는게 좋은 케이스를 생각해보면.. 각 서비스가 독립적인 HTTP 엔드포인트가 필요할 때 정도? 이미 엔드포인트가 있는 경우라면 별로 문제 없을 것 같다.

### 메시지 통신

메시지 브로커를 통해서 메시지를 주고 받는 것으로 통신하는 방법.

- 서버와 서버 사이에 별도의 레이어가 추가되므로 아키텍처상으로 복잡도가 증가함
- 서비스간의 커플링이 비교적 낮음 (전달하는 메시지 구조에 대해서만 Align하면 됨)

### 이벤트 기반 통신

- 메시지를 이용한 방식과 비슷하지만, 이벤트가 가지고 있는 메시지가 아닌 이벤트 자체에 대해 핸들링
- 서비스 사이의 메시지 구조와 같은 것에 대한 align이 필요 없기 때문에 서비스간의 커플링이 없음

메시지 통신과 이벤트 기반 통신을 구분해놓긴 했지만, 결국 메시지 기반 통신에서 **전달하는 메시지 형식을 단 하나로 통일하면** 그게 이벤트 기반 통신인 것 같다.

아무튼 유즈 케이스를 따져 봤을 때 어차피 서비스간에 전달할 데이터가 그리 많지도 않고, 데이터가 있을 경우에는 이벤트 이름과 함께 string 형태의 payload를 넘겨주면 될 것 같아서 **이벤트 기반 통신**으로 결정!

## 메시지 브로커 고르기

메시지 기반 통신에서 어떤 메시지 브로커를 사용하는게 좋을까? 복잡도와 기능은 항상 트레이드오프가 있으니 어느 하나가 뛰어나다기보다는 상황에 맞는 적절한 방법을 택하는게 좋다. 우선 메시지 브로커의 핵심적인 구성 요소라고 하면 다음의 세 가지를 이야기할 수 있을 것 같다.

- Producer - 메시지를 발생하는 주체를 의미한다. pub/sub에서는 Publisher라고 불림
- Consumer - 메시지를 소비하는 주체를 의미한다. pub/sub에서는 Subscriber라고 불림
- Queue/Topic - 메시지 브로커가 메시지를 저장하는 매커니즘.

메시지 브로커는 이 구성 요소들이 동작하는 방식에 따라 다양하게 분류된다.

### AWS SQS - 메시지 큐

AWS의 메시지 큐 서비스다. SQS에는 두 가지 방식이 있는데,

- Standard
  - 매우 높은 처리량
  - 최소 1회 전송 보장 - 간혹 두 개 이상의 메시지가 전달될 수 있음.
  - 순서 보장 X - 최대한 정렬
- FIFO
  - 초당 최대 3000개의 메시지 지원
  - 선입선출 보장

큐이므로 Consumer들은 Producer들이 메시지를 전송할 때까지 기다렸다가 처리하게 된다. 즉 큐가 비어있으면 Consumer가 blocking되기 때문에 모든 메시지에 대한 처리가 보장된다고 보면 될듯.

메시지에 대한 처리가 실패했을 경우 원인을 분석하고 별도로 처리하기 위한 Dead-Letter Queue를 둘 수 있다.

### AWS SNS - pub/sub

AWS의 pub/sub 서비스. publisher가 메시지를 보내고 여러 subscriber들이 이 메시지를 수신받아서 처리할 수 있다.

- 자체적으로 메시지를 저장하지 않기 때문에 경우에 따라 (구독을 하기 전에 메시지를 보낸다거나..) 메시지의 처리 여부가 보장되지 않을 수 있음
- 하나의 이벤트를 여러 곳에서 수신해야할 필요가 있을 때 적합 (대표적으로 알림 메시지)

### Redis - 메시지 큐와 pub/sub

Redis 자체가 명령어를 싱글 스레드로 실행하고, Redis의 List 자료 구조는 Queue의 특성을 갖고 있기 때문에 메시지 큐로도 활용이 가능하다. 아래 내용은 사실 Redis의 List의 특징을 그대로 옮겨놓은 것에 지나지 않는다.

- 메시지의 순서가 보장된다 (선입선출)
- 하나의 메시지에 대해 한 번의 처리가 보장된다.
- 메시지를 처리하기 위해 꺼내는 순간 큐에서 메시지가 사라지므로, 만약 소비하는 쪽에서 처리 도중 실패한 경우 별도의 처리가 필요함.

메시지를 보내는 쪽에서는 다음과 같이 `LPUSH`(혹은 `RPUSH`)를 사용하고, 메시지를 받는 쪽에서는 `BRPOP`(혹은 `BLPOP`)을 사용하면 된다.

```
sender> LPUSH topic '1'
receiver> BRPOP topic
```

레디스는 pub/sub 패턴도 지원한다. 다만 메시지를 저장하는 자체적인 스토리지가 없기 때문에, 이전에 발행된 메시지를 `replay`할 수는 없고, 메시지 발행 이전에 구독한 subscriber들만 메시지를 수신받을 수 있다.

레디스를 사용하는 방식의 단점이 있을까? 다른 메시지 브로커들을 살펴본 결과 이런 문제점들이 있는 것 같다.

- 데이터 영속성이 보장되지 않는다. 기본적으로 In-Memory 저장소이기 때문에, 레디스 서버가 꺼지거나 하면 큐가 유실되는 것이다. (이 경우에는 Elasticache같은 HA 구성을 하면 어느 정도 보완할 수 있음)

### RabbitMQ - 메시지 큐

AMQP라는 메시지 큐 프로토콜의 구현체이고, 오픈소스라는 특징이 있다. 직접 서버에 설치해서 사용해야 한다는 뜻. 기본적으로 메시지 브로커를 목적으로 만들어진 솔루션이다보니 다른 솔루션들과 비교해서 메시지 브로커로서의 다양한 기능을 지원한다는 장점이 있다.

- 조건에 따라 메시지를 여러 Queue로 분산해서 보낼 수 있음
- 전달하는 메시지를 영구적으로 저장할 수 있음

### 그 외 - AWS Kinesis, Apache Kafka

Kinesis, Kafka 모두 메시지 브로커로 많이 보이는 것들인데, 일단 컨셉 자체가 대규모의 분산 트래픽에 좀 더 적합한 것 같고, 학습 난이도도 더 높을 것 같아 이쪽은 자세히 살펴보지 않았다.

## 최종 결정 - RabbitMQ

여러 솔루션들을 살펴보고 검토해본 결과.. 현재 상황에서는 RabbitMQ가 최선이라는 결론을 내렸다.

일단 현재는 Redis(Elasticache)를 사용해서 메시지를 주고받고 있는데, 몇 가지 아쉬운 점들이 있다. 특히나 Redis가 본래 Message Queue를 목적으로 구현된게 아니기 때문에 어딘가 기능이 부족하다는 느낌이 좀 있다.

- Routing - RabbitMQ는 라우팅 키와 Exchange Type 등으로 다양한 형태의 메시지 라우팅을 지원하지만 Redis는 그런거 없다.
- Failover - AMQP의 스펙에 메시지 발송/소비에 문제가 있을 경우에 대한 내용도 있어서 이러한 장애 극복을 위한 조치가 좀 더 편할 것 같다. 레디스의 메시지 큐로는 POP/PUSH하고 나서 문제가 생겼을 때 다시 대기열로 올리거나 하는 기능이 별도로 없어서 직접 구현해야 함.
- Data Persistence - RabbitMQ는 상황에 따라 메시지를 저장할 수도, 그렇지 않을 수도 있다. Redis는 In-memory cache 이므로 데이터 보존이 불가능 (RDB, AOF 등 영속성을 위한 몇 가지 방법들을 제공하긴 하지만..)
- 전사적으로 k8s를 사용하고 있는데, Elasticache를 메시지 큐 용도로 사용하면 인터널 서비스간의 통신을 위해 외부의 엔드포인트에 접근하는 상황. 만약 RabbitMQ를 사용하면 같은 클러스터 내에 설치해서 활용할 수 있음. (같은 AWS VPC 내에 있으면 괜찮을까?)

사실.. 이 [Gist](https://gist.github.com/Dev-Dipesh/4ed56529cc12eb1685ad1246c715f312)의 영향이 좀 크긴 했다. 레디스로도 문제 없지 않을까 생각했는데 전체적으로 구조를 다시 잡자고 마음 먹었으니 용도에 맞는 도구를 사용하는게 좋을 것 같다는 생각이 들었다.

## References

- https://campfirecode.medium.com/sqs-vs-sns-vs-kinesis-which-aws-messaging-service-to-use-1fa3aa6be97d
- https://blog.dudaji.com/general/2020/05/25/rabbitmq.html
- https://www.cloudamqp.com/blog/part1-rabbitmq-for-beginners-what-is-rabbitmq.html
- https://gist.github.com/Dev-Dipesh/4ed56529cc12eb1685ad1246c715f312