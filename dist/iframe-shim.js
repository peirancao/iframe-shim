define("arale/iframe-shim/1.0.0/iframe-shim",["$","arale/position/1.0.0/position"],function(e,t,n){function s(e){this.target=r(e).eq(0)}function u(e){return r("<iframe>",{src:"javascript:''",frameborder:0,css:{display:"none",border:"none",opacity:0,position:"absolute"}}).insertBefore(e)}var r=e("$"),i=e("arale/position/1.0.0/position");s.prototype.sync=function(){var e=this.target,t=this.iframe;if(!e.length)return this;var n=e.outerHeight(),r=e.outerWidth();return!n||!r||e.is(":hidden")?t&&t.hide():(t||(t=this.iframe=u(e)),t.css({height:n,width:r}),i.pin(t[0],e[0]),t.show()),this},s.prototype.destroy=function(){this.iframe&&(this.iframe.remove(),delete this.iframe),delete this.target};if(r.browser.msie&&r.browser.version==6)n.exports=s;else{function o(){}o.prototype.sync=o,o.prototype.destroy=o,n.exports=o}});