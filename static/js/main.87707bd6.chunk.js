(this["webpackJsonptic-tac-toe-react"]=this["webpackJsonptic-tac-toe-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(13),n(14),n(15),n(7)),s=n(1),i=n(2),u=n(3),m=n(4),d=(n(16),n(17),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.symbol,n=e.onClick;return r.a.createElement("div",{className:"tile",onClick:n},t||"")}}]),n}(r.a.Component));n(18);var f=function(e){var t=e.btnText,n=e.onClick;return r.a.createElement("div",{className:"startbtn"},r.a.createElement("button",{onClick:n},t||"Start"))};var h=function(e){var t=e.symbol,n=e.score;return r.a.createElement("div",{className:"scoreboard"},r.a.createElement("p",null,"Player ",t),r.a.createElement("p",null,n))},p=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).checkWinner=function(e){[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach((function(t){if(t.every((function(t){return e[t].includes("X")}))){a.setState({winner:"X",paused:!0,xScore:a.state.xScore+1});console.log("game paused"),console.log("X wins")}if(t.every((function(t){return e[t].includes("O")}))){a.setState({winner:"O",paused:!0,oScore:a.state.oScore+1});console.log("game paused"),console.log("O wins")}}))},a.togglePlayer=function(){a.setState({currentPlayer:"X"===a.state.currentPlayer?"O":"X"})},a.handleClick=function(e){if(!a.state.tiles[e]&&a.state.started&&!a.state.paused){var t=Object(l.a)(a.state.tiles);t[e]=a.state.currentPlayer,a.setState({tiles:t}),a.togglePlayer(),a.checkWinner(t)}},a.handleRestart=function(){a.setState({started:!1,paused:!0,tiles:Array(9).fill("")})},a.handleStart=function(){a.setState({started:!0,paused:!1})},a.state={tiles:Array(9).fill(""),currentPlayer:"X",started:!1,paused:!1,winner:"",xScore:0,oScore:0},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.tiles,a=t.xScore,c=t.oScore,o=t.started;return r.a.createElement("div",{className:"gameboard"},r.a.createElement("h1",null,"Tic"),r.a.createElement("h1",null,"Tac"),r.a.createElement("h1",null,"Toe"),n.map((function(t,n){return r.a.createElement(d,{key:n,onClick:function(){return e.handleClick(n)},symbol:t})})),o&&r.a.createElement(f,{onClick:function(){return e.handleRestart()},btnText:"Restart"}),!o&&r.a.createElement(f,{onClick:function(){return e.handleStart()}}),r.a.createElement(h,{symbol:"X",score:a}),r.a.createElement(h,{symbol:"O",score:c}))}}]),n}(r.a.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.87707bd6.chunk.js.map