(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{411:function(o,n,a){"use strict";a.r(n);var t=a(301),e=t.a.CreateAsset({data:function(){return{balloonPos:new t.a.Position,currentFrame:0}},components:{balloon:t.a.samples.assets.balloon},animations:function(){return{default:[{name:"Moves right from 0 to 500",start:0,end:500,handler:function(o){var n=o.context,a=o.keyframe,t=Math.floor(a/2);n.balloonPos.x=t}},{name:"Moves Down and right while rotating frames 501 to 1000",start:501,end:1e3,handler:function(o){var n=o.context,a=o.keyframe,t=Math.floor(a/2);n.balloonPos.x=t,n.balloonPos.y=t-201,n.balloonPos.angle=t%360}},{name:"Scale x and y without moving from 1500 to 2500",start:1500,end:2500,handler:function(o){var n=o.context,a=o.keyframe,t=Math.floor(a/10),e=(a-1e3)/250;n.balloonPos.y=164-t,n.balloonPos.scaleX=e,n.balloonPos.scaleY=e}}]}}}),l=a(41),r=Object(l.a)(e,(function(){var o=this.$createElement;return(this._self._c||o)("balloon",{attrs:{color:"green",position:this.balloonPos}})}),[],!1,null,null,null);n.default=r.exports}}]);