(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{214:function(e,t,n){"use strict";n.r(t);var r=n(146),a=n(4),o=n.n(a),i=n(147),c=n(148),u=n(149),s=n(43),f=n(153),p=n(154),l=n(150),m=n(151),d=n(168),h=n(152);function b(){var e=Object(r.a)(["\n  display: block;\n  line-height: 16px;\n  max-height: 16px;\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n  ","\n"]);return b=function(){return e},e}var g=i.d.span(b(),l.u),T=function(e){var t=e.forTip,n=e.forText,r=e.type,a="tip-for-post-".concat(r.toLowerCase(),"-count");return o.a.createElement(g,{"data-for":a,"data-tip":t},n,o.a.createElement(h.a,{id:a,effect:"solid",multiline:!0,bg:c.a.tooltipBackgroundBlack}))};T.displayName="FeedbackCount",T.defaultProps={type:"reaction"};var v=T,x=n(169),F=n(170),j=n(171);function O(){var e=Object(r.a)(["\n  ","\n  ","\n  ","\n  ","\n  font-size: 14px;\n  min-width: 100px;\n"]);return O=function(){return e},e}var y=i.d.div(O(),function(e){return e.isFetching&&"display: none;"},p.c,p.a,l.u),E=m.a.component.DEFAULT,w=function(e){var t=e.isFetching,n=e.reactionIds,r=e.reactions,a=n.map(function(e){return r[e]}),i=d.a.getReactionSummary(a);return n.length>0&&o.a.createElement(y,{isFetching:t},o.a.createElement(x.a,{reactFeeling:i.topMost.feeling,withComponent:E,countSummary:i.topMostTip}),i.secondMost.total>0&&o.a.createElement(F.a,{reactFeeling:i.secondMost.feeling,withComponent:E,countSummary:i.secondMostTip}),i.thirdMost.total>0&&o.a.createElement(j.a,{reactFeeling:i.thirdMost.feeling,withComponent:E,countSummary:i.thirdMostTip}),o.a.createElement(v,{forText:i.all.forText,forTip:i.all.forTip}))};w.defaultProps={isFetching:!1,reactionIds:[],reactions:{}};var k=w,I=Object(s.b)(function(e){return{isFetching:Object(f.h)(e),reactionIds:Object(f.g)(e),reactions:Object(f.i)(e)}})(k),C=n(158);function M(){var e=Object(r.a)(["\n  margin-left: 8px;\n"]);return M=function(){return e},e}function S(){var e=Object(r.a)(["\n  ","\n  ","\n  font-size: 14px;\n"]);return S=function(){return e},e}var B=function(e,t){var n={forText:"",forTip:""};return n.forText=C.a.getFeedbacksCount(e,t),n.forTip=C.a.getFeedbacksCountTip(e,18),n},P=i.d.div(S(),function(e){return e.isFetching&&"display: none;"},p.c),z=i.d.div(M()),J=function(e){var t=e.isFetching,n=e.commentIds,r=e.comments,a=e.shareIds,i=e.shares,c=n.map(function(e){return r[e]}),u=a.map(function(e){return i[e]}),s=B(c,"comment"),f=B(u,"share");return o.a.createElement(P,{isFetching:t},o.a.createElement(v,{forText:s.forText,forTip:s.forTip,type:"comment"}),o.a.createElement(z,null,o.a.createElement(v,{forText:f.forText,forTip:f.forTip,type:"share"})))};J.defaultProps={isFetching:!1,commentIds:[],comments:{},shareIds:[],shares:{}};var L=J,N=Object(s.b)(function(e){return{isFetching:Object(f.c)(e)||Object(f.k)(e),commentIds:Object(f.b)(e),comments:Object(f.f)(e),shareIds:Object(f.j)(e),shares:Object(f.l)(e)}})(L);function A(){var e=Object(r.a)(["\n  ","\n  ","\n  color: ","\n  border-bottom: ",";\n  margin: 10px 12px 0 12px;\n  padding: 0 0 10px 0;\n"]);return A=function(){return e},e}var D=i.d.div(A(),u.e,u.h,c.a.infoColorGray,c.a.postSectionBorder),G=function(){return o.a.createElement(D,null,o.a.createElement(I,null),o.a.createElement(N,null))};G.displayName="FeedbackSummary";t.default=G}}]);
//# sourceMappingURL=5.27ee14a3.chunk.js.map