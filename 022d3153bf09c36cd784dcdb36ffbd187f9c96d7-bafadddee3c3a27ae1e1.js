"use strict";(self.webpackChunkalan_playground=self.webpackChunkalan_playground||[]).push([[512],{2913:function(e,r,t){t.d(r,{I:function(){return a},X:function(){return s}});var o=t(4568),n=t(9474),l=t(6209);const s=e=>{let{post:r}=e;const{slug:t}=r.fields,{title:s,category:a,date:i,tags:c}=r.frontmatter;return n.createElement("header",{className:"mb-2"},n.createElement("h1",{className:"text-2.5xl"},n.createElement(o.Link,{to:t,itemProp:"url"},n.createElement("span",{itemProp:"headline"},s))),n.createElement("div",{className:"grid grid-cols-[4rem_1fr] mt-4 mb-8 text-sm gap-2 bg-slate-50 p-4 rounded-lg"},n.createElement("span",{className:"font-bold"},"카테고리"),n.createElement("span",{className:"text-sm font-bold",itemProp:"category "},n.createElement(o.Link,{to:"/"+a+"/",itemProp:"url"},a.toUpperCase()," ")),i?n.createElement(n.Fragment,null,n.createElement("span",{className:"font-bold"},"작성일"),n.createElement("span",{className:"text-text-light"},i)):null,c&&c.length>0?n.createElement(n.Fragment,null,n.createElement("span",{className:"font-bold"},"태그"),n.createElement("div",{className:"flex inline gap-1"},c.map((e=>n.createElement(l.A,{key:e,tag:e}))))):null))},a=e=>{let{post:r}=e;const{slug:t}=r.fields,{title:l,category:s,date:a}=r.frontmatter;return n.createElement("header",{className:"mb-2"},n.createElement("h2",{className:"mb-0 mt-0"},n.createElement(o.Link,{to:t,itemProp:"url"},n.createElement("span",{itemProp:"headline"},l))),n.createElement("div",{className:"inline-flex items-center gap-2"},n.createElement(o.Link,{to:"/"+s+"/",itemProp:"url"},n.createElement("span",{className:"text-sm font-bold",itemProp:"category "},s.toUpperCase()," ")),n.createElement("span",{className:"text-xs text-text-light"},a)))}},6209:function(e,r,t){var o=t(9474),n=t(8644),l=t(4568);r.A=e=>{let{tag:r,count:t,active:s,linkTo:a}=e;const i=()=>o.createElement("div",{className:(0,n.m)("inline-block font-enonly font-bold text-xs","px-1.5 py-1","rounded",s?"bg-tag text-tag-background":"bg-tag-background text-tag",null!=a?"hover:bg-tag hover:text-tag-background cursor-pointer":"")},o.createElement("span",null,r),null!=t&&o.createElement("span",{className:"ml-1 text-xs opacity-50"},t));return null!=a?o.createElement(l.Link,{to:a,children:i()}):i()}},8644:function(e,r,t){function o(e){var r,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var l=e.length;for(r=0;r<l;r++)e[r]&&(t=o(e[r]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.d(r,{m:function(){return K}});var n=function(){for(var e,r,t=0,n="",l=arguments.length;t<l;t++)(e=arguments[t])&&(r=o(e))&&(n&&(n+=" "),n+=r);return n};const l="-";function s(e){const r=function(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]},n=function(e,r){if(!r)return e;return e.map((([e,t])=>[e,t.map((e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map((([e,t])=>[r+e,t]))):e))]))}(Object.entries(e.classGroups),t);return n.forEach((([e,t])=>{c(t,o,e,r)})),o}(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:function(e){const t=e.split(l);return""===t[0]&&1!==t.length&&t.shift(),a(t,r)||function(e){if(i.test(e)){const r=i.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}(e)},getConflictingClassGroupIds:function(e,r){const n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}}function a(e,r){if(0===e.length)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),n=o?a(e.slice(1),o):void 0;if(n)return n;if(0===r.validators.length)return;const s=e.join(l);return r.validators.find((({validator:e})=>e(s)))?.classGroupId}const i=/^\[(.+)\]$/;function c(e,r,t,o){e.forEach((e=>{if("string"!=typeof e){if("function"==typeof e)return e.isThemeGetter?void c(e(o),r,t,o):void r.validators.push({validator:e,classGroupId:t});Object.entries(e).forEach((([e,n])=>{c(n,d(r,e),t,o)}))}else{(""===e?r:d(r,e)).classGroupId=t}}))}function d(e,r){let t=e;return r.split(l).forEach((e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)})),t}function u(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function n(n,l){t.set(n,l),r++,r>e&&(r=0,o=t,t=new Map)}return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}}const p="!";function b(e){const r=e.separator,t=1===r.length,o=r[0],n=r.length;return function(e){const l=[];let s,a=0,i=0;for(let u=0;u<e.length;u++){let c=e[u];if(0===a){if(c===o&&(t||e.slice(u,u+n)===r)){l.push(e.slice(i,u)),i=u+n;continue}if("/"===c){s=u;continue}}"["===c?a++:"]"===c&&a--}const c=0===l.length?e:e.substring(i),d=c.startsWith(p);return{modifiers:l,hasImportantModifier:d,baseClassName:d?c.substring(1):c,maybePostfixModifierPosition:s&&s>i?s-i:void 0}}}const m=/\s+/;function f(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=g(e))&&(o&&(o+=" "),o+=r);return o}function g(e){if("string"==typeof e)return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=g(e[o]))&&(t&&(t+=" "),t+=r);return t}function h(e,...r){let t,o,n,l=function(i){const c=r.reduce(((e,r)=>r(e)),e());return t=function(e){return{cache:u(e.cacheSize),splitModifiers:b(e),...s(e)}}(c),o=t.cache.get,n=t.cache.set,l=a,a(i)};function a(e){const r=o(e);if(r)return r;const l=function(e,r){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,l=new Set;return e.trim().split(m).map((e=>{const{modifiers:r,hasImportantModifier:n,baseClassName:l,maybePostfixModifierPosition:s}=t(e);let a=o(s?l.substring(0,s):l),i=Boolean(s);if(!a){if(!s)return{isTailwindClass:!1,originalClassName:e};if(a=o(l),!a)return{isTailwindClass:!1,originalClassName:e};i=!1}const c=function(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach((e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)})),r.push(...t.sort()),r}(r).join(":");return{isTailwindClass:!0,modifierId:n?c+p:c,classGroupId:a,originalClassName:e,hasPostfixModifier:i}})).reverse().filter((e=>{if(!e.isTailwindClass)return!0;const{modifierId:r,classGroupId:t,hasPostfixModifier:o}=e,s=r+t;return!l.has(s)&&(l.add(s),n(t,o).forEach((e=>l.add(r+e))),!0)})).reverse().map((e=>e.originalClassName)).join(" ")}(e,t);return n(e,l),l}return function(){return l(f.apply(null,arguments))}}function x(e){const r=r=>r[e]||[];return r.isThemeGetter=!0,r}const y=/^\[(?:([a-z-]+):)?(.+)\]$/i,v=/^\d+\/\d+$/,w=new Set(["px","full","screen"]),k=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,z=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,E=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,C=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,N=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function j(e){return G(e)||w.has(e)||v.test(e)}function P(e){return q(e,"length",F)}function G(e){return Boolean(e)&&!Number.isNaN(Number(e))}function I(e){return q(e,"number",G)}function M(e){return Boolean(e)&&Number.isInteger(Number(e))}function S(e){return e.endsWith("%")&&G(e.slice(0,-1))}function T(e){return y.test(e)}function $(e){return k.test(e)}const L=new Set(["length","size","percentage"]);function O(e){return q(e,L,U)}function _(e){return q(e,"position",U)}const A=new Set(["image","url"]);function R(e){return q(e,A,D)}function W(e){return q(e,"",X)}function B(){return!0}function q(e,r,t){const o=y.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))}function F(e){return z.test(e)&&!E.test(e)}function U(){return!1}function X(e){return C.test(e)}function D(e){return N.test(e)}Symbol.toStringTag;function H(){const e=x("colors"),r=x("spacing"),t=x("blur"),o=x("brightness"),n=x("borderColor"),l=x("borderRadius"),s=x("borderSpacing"),a=x("borderWidth"),i=x("contrast"),c=x("grayscale"),d=x("hueRotate"),u=x("invert"),p=x("gap"),b=x("gradientColorStops"),m=x("gradientColorStopPositions"),f=x("inset"),g=x("margin"),h=x("opacity"),y=x("padding"),v=x("saturate"),w=x("scale"),k=x("sepia"),z=x("skew"),E=x("space"),C=x("translate"),N=()=>["auto",T,r],L=()=>[T,r],A=()=>["",j,P],q=()=>["auto",G,T],F=()=>["","0",T],U=()=>[G,I],X=()=>[G,T];return{cacheSize:500,separator:":",theme:{colors:[B],spacing:[j,P],blur:["none","",$,T],brightness:U(),borderColor:[e],borderRadius:["none","","full",$,T],borderSpacing:L(),borderWidth:A(),contrast:U(),grayscale:F(),hueRotate:X(),invert:F(),gap:L(),gradientColorStops:[e],gradientColorStopPositions:[S,P],inset:N(),margin:N(),opacity:U(),padding:L(),saturate:U(),scale:U(),sepia:F(),skew:X(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",T]}],container:["container"],columns:[{columns:[$]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",T]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[f]}],"inset-x":[{"inset-x":[f]}],"inset-y":[{"inset-y":[f]}],start:[{start:[f]}],end:[{end:[f]}],top:[{top:[f]}],right:[{right:[f]}],bottom:[{bottom:[f]}],left:[{left:[f]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",M,T]}],basis:[{basis:N()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",T]}],grow:[{grow:F()}],shrink:[{shrink:F()}],order:[{order:["first","last","none",M,T]}],"grid-cols":[{"grid-cols":[B]}],"col-start-end":[{col:["auto",{span:["full",M,T]},T]}],"col-start":[{"col-start":q()}],"col-end":[{"col-end":q()}],"grid-rows":[{"grid-rows":[B]}],"row-start-end":[{row:["auto",{span:[M,T]},T]}],"row-start":[{"row-start":q()}],"row-end":[{"row-end":q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",T]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",T]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal","start","end","center","between","around","evenly","stretch"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",T,r]}],"min-w":[{"min-w":[T,r,"min","max","fit"]}],"max-w":[{"max-w":[T,r,"none","full","min","max","fit","prose",{screen:[$]},$]}],h:[{h:[T,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[T,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[T,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[T,r,"auto","min","max","fit"]}],"font-size":[{text:["base",$,P]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",I]}],"font-family":[{font:[B]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",T]}],"line-clamp":[{"line-clamp":["none",G,I]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",j,T]}],"list-image":[{"list-image":["none",T]}],"list-style-type":[{list:["none","disc","decimal",T]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","none","wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",j,P]}],"underline-offset":[{"underline-offset":["auto",j,T]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",T]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",T]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",_]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",O]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},R]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:["solid","dashed","dotted","double","none","hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["","solid","dashed","dotted","double","none"]}],"outline-offset":[{"outline-offset":[j,T]}],"outline-w":[{outline:[j,P]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:A()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[j,P]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",$,W]}],"shadow-color":[{shadow:[B]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",$,T]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[v]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",T]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",T]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",T]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[M,T]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",T]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",T]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",T]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[j,P,I]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const J=h(H),K=function(){return J(n.apply(void 0,arguments))}}}]);
//# sourceMappingURL=022d3153bf09c36cd784dcdb36ffbd187f9c96d7-bafadddee3c3a27ae1e1.js.map