(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{15:function(e,t,n){e.exports=n(29)},29:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),o=n(12),c=n.n(o),s=n(0),l=n(1),p=n(2),i=n(3),u=n(8),m=n(14),d=n.n(m),v=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).render=function(){var t=JSON.parse(e.props.args.plot_obj),n=e.props.args.override_height,r=e.props.args.override_width,o=e.props.args.click_event,c=e.props.args.select_event,s=e.props.args.hover_event;return u.a.setFrameHeight(n),a.a.createElement(d.a,{data:t.data,layout:t.layout,config:t.config,frames:t.frames,onClick:o?e.plotlyEventHandler:function(){},onSelected:c?e.plotlyEventHandler:function(){},onHover:s?e.plotlyEventHandler:function(){},style:{width:r,height:n},className:"stPlotlyChart"})},e.plotlyEventHandler=function(t){var n=e.props.args.return_fields,r=[];t.points.forEach((function(e){var t={};t.x=e.x,t.y=e.y,t.pointNumber=e.pointNumber,t.pointIndex=e.pointIndex,t.curveNumber=e.curveNumber,n&&(t.customdata=e.customdata),r.push(t)})),u.a.setComponentValue(JSON.stringify(r))},e}return Object(s.a)(n)}(u.b),f=Object(u.c)(v);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2f5c6e5d.chunk.js.map