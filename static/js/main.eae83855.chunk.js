(this["webpackJsonptic-tac-toe-react"]=this["webpackJsonptic-tac-toe-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=(n(13),n(14),n(15),n(7)),l=n(1),s=n(2),u=n(3),m=n(4),d=(n(16),n(17),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.symbol,n=e.onClick;e.illuminate;return r.a.createElement("div",{className:"tile",onClick:n},r.a.createElement("span",{className:"symbol"},t||""))}}]),n}(r.a.Component));n(18);var f=function(e){var t=e.btnText,n=e.onClick;return r.a.createElement("div",{className:"startbtn"},r.a.createElement("button",{onClick:n},t||"Start"))};n(19);var v=function(e){var t=e.symbol,n=e.score;return r.a.createElement("div",{className:"scoreboard"},r.a.createElement("p",null,"Player ",t),r.a.createElement("p",null,n))},h=(n(20),function(e){var t=e.winner,n=e.onClick;return r.a.createElement("div",{className:"winner-modal",onClick:n},r.a.createElement("div",{className:"winner-modal__box"},t?"Player ".concat(t," wins"):"It's a draw!"))}),b=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).checkWinner=function(e){var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=t.some((function(t){return t.every((function(t){return e[t].includes("X")}))})),r=t.some((function(t){return t.every((function(t){return e[t].includes("O")}))}));a.setState({winner:n?"X":r?"O":void 0,paused:n||r,xScore:a.state.xScore+(n?1:0),oScore:a.state.oScore+(r?1:0)})},a.togglePlayer=function(){a.setState({currentPlayer:"X"===a.state.currentPlayer?"O":"X"})},a.handleClick=function(e){if(!a.state.tiles[e]&&a.state.started&&!a.state.paused){var t=Object(i.a)(a.state.tiles);t[e]=a.state.currentPlayer,a.setState({tiles:t}),a.togglePlayer(),a.checkWinner(t)}},a.handleRestart=function(){a.setState({started:!1,paused:!0,tiles:Array(9).fill(""),winner:""})},a.handleStart=function(){a.setState({started:!0,paused:!1})},a.illuminateTile=function(){console.log("illuminate");var e=a.state,t=e.tiles,n=0;return e.started||(n=Math.round(Math.random()*t.length)),n},a.state={tiles:Array(9).fill(""),currentPlayer:"X",started:!1,paused:!1,winner:"",xScore:0,oScore:0},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.tiles,a=t.xScore,c=t.oScore,o=t.started,i=t.winner,l=n.every((function(e){return e}));return r.a.createElement("div",{className:"gameboard"},r.a.createElement("h1",null,"Tic Tac Toe"),r.a.createElement("div",{className:"gameboard__scoreboard-container"},r.a.createElement(v,{symbol:"X",score:a}),o&&r.a.createElement(f,{onClick:function(){return e.handleRestart()},btnText:"Restart"}),!o&&r.a.createElement(f,{onClick:function(){return e.handleStart()}}),r.a.createElement(v,{symbol:"O",score:c})),r.a.createElement("div",{className:"gameboard__tiles-section"},r.a.createElement("div",{className:"gameboard__tiles-container"},r.a.createElement("div",{className:"gameboard__tiles"},n.map((function(t,n){return r.a.createElement(d,{key:n,onClick:function(){return e.handleClick(n)},symbol:t})}))))),(l||i)&&r.a.createElement(h,{winner:i,onClick:this.handleRestart}))}}]),n}(r.a.Component);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.eae83855.chunk.js.map