!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class i{constructor(t,e){this.X=t,this.Y=e}static Zero(){return new i(0,0)}}e.v2d=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(2),o=n(0),s=n(3),r=n(4),a=n(5);window.addEventListener("DOMContentLoaded",(function(){const t=new r.App;t.canvas=new i.Canvas,t.canvas.ID="c",t.canvas.Skybox=new s.Color(0,0,0,1),t.canvas.Resolution=new o.v2d(320,180),t.canvas.Zoom=1,t.canvas.Init(),window.addEventListener("resize",()=>t.canvas.Resize()),t.assets=new Map,t.assets.set("texture",document.getElementById("texture"));const e=new a.Sprite;e.Animations=new Map,e.Animations.set("idle",{Frame:null,FrameID:0,Frames:[{Duration:5,Position:{X:0,Y:0}},{Duration:5,Position:{X:1,Y:0}}]}),e.Asset=t.assets.get("texture"),e.SetAnim("idle"),window.addEventListener("load",()=>{setInterval(()=>{t.Loop();const n=0,i=0;t.canvas.d().drawImage(e.Asset,16*n,16*i,16,16,0,0,16*t.canvas.Zoom,16*t.canvas.Zoom)},1e3/60)})}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(0);e.Canvas=class{constructor(){this.Resolution=i.v2d.Zero()}Init(){this.Resize()}Resize(){this.Zoom=Math.min(window.innerWidth/this.Resolution.X,window.innerHeight/this.Resolution.Y),this.Zoom=Math.floor(this.Zoom),this.e().width=this.Resolution.X*this.Zoom,this.e().height=this.Resolution.Y*this.Zoom}Predraw(){this.e().style.backgroundColor=this.Skybox.rgba(),this.d().clearRect(0,0,this.e().width,this.e().width),this.d().imageSmoothingEnabled=!1}d(){return null==this.ctx&&(this.ctx=this.e().getContext("2d")),this.ctx}e(){return document.getElementById(this.ID)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Color=class{constructor(t,e,n,i){this.Red=t,this.Green=e,this.Blue=n,this.Alpha=i}rgba(){return`rgba(${this.Red}, ${this.Green}, ${this.Blue}, ${this.Alpha})`}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.App=class{constructor(){this.count=0}Loop(){this.canvas.Predraw()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Sprite=class{constructor(){this._animation="",this.Duration=0}get Animation(){return this.Animations.get(this._animation)}SetAnim(t){this.Duration=0,this._animation=t}}}]);