"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{3404:function(e,t,a){var l=a(7294),r=a(5444);t.Z=function(e){var t=e.post,a=e.isListItem,n=t.fields.slug,i=t.frontmatter,s=i.title,c=i.category,o=i.date;return l.createElement("header",{className:"post-header"},a?l.createElement("h2",{className:"header"},l.createElement(r.Link,{to:n,itemProp:"url"},l.createElement("span",{itemProp:"headline"},s))):l.createElement("h1",{className:"header"},l.createElement("span",{itemProp:"headline"},s)," "),l.createElement("div",{className:"category"},l.createElement(r.Link,{to:"/category/"+c+"/",itemProp:"url"},l.createElement("span",{itemProp:"category"},c.toUpperCase()," "))),l.createElement("small",null,o))}},4870:function(e,t,a){a.r(t);var l=a(7294),r=a(5444),n=a(7198),i=a(3751),s=a(3404);t.default=function(e){var t,a=e.data,c=e.location,o=a.markdownRemark,m=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",p=a.previous,u=a.next,d=o.frontmatter.tags;return l.createElement(n.Z,{location:c,title:m},l.createElement(i.Z,{title:o.frontmatter.title,description:o.frontmatter.description||o.excerpt}),l.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement(s.Z,{post:o}),d?l.createElement("div",{class:"tag"},d.map((function(e){return l.createElement("a",null,e)}))):"",l.createElement("section",{dangerouslySetInnerHTML:{__html:o.html},itemProp:"articleBody"})),l.createElement("nav",{className:"blog-post-nav"},l.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.createElement("li",null,p&&l.createElement(r.Link,{to:p.fields.slug,rel:"prev"},"← ",p.frontmatter.title)),l.createElement("li",null,u&&l.createElement(r.Link,{to:u.fields.slug,rel:"next"},u.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-34ae1c6ae27206c7f980.js.map