(window.webpackJsonpstarwars=window.webpackJsonpstarwars||[]).push([[0],{35:function(e,a,t){e.exports=t(66)},41:function(e,a,t){},59:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(31),s=t.n(l);t(40),t(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(32),c=t(6),o=t(7),m=t(8),u=t(10),d=t(9),f=t(11),v=function(e){var a=e.error,t=e.film;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Star Wars"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),a?"":r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link disabled","aria-disabled":"true"},t.title)))))},p=t(14),h=t.n(p),E=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={film:{},moreDetails:{},error:!1},t.componentDidMount=function(){var e=t.props.match.params;h.a.get("https://swapi.co/api/films/".concat(e.episode_id)).then((function(e){return e})).then((function(e){console.log(e.data);var a={};["characters","planets","starships","vehicles","species"].forEach((function(t){a[t]=[],e.data[t].forEach((function(e){h.a.get(e).then((function(e){a[t].push(e.data)})).catch((function(e){console.log("ERROR",e)}))}))})),t.setState({film:e.data,moreDetails:a})})).catch((function(e){t.setState({error:!0})}))},t}return Object(f.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state,a=e.error,t=e.film;return r.a.createElement("div",null,r.a.createElement(v,{error:a,film:t}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main"}),r.a.createElement("div",{className:"row mt-3"},a?r.a.createElement("h1",null,"NOT FOUND"):r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},t.title),r.a.createElement("h5",{className:"card-title"},"Director: ",t.director,", Producer: ",t.producer),r.a.createElement("p",{className:"card-text"},t.opening_crawl),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"characters"),r.a.createElement("ul",null,r.a.createElement("li",null,JSON.stringify(this.state.moreDetails)),r.a.createElement("li",null,"1"),r.a.createElement("li",null,"1")))))))))}}]),a}(n.Component),F=(t(59),t(17)),b=t.n(F),y=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={films:[],displayFilms:[],favFilms:b.a.get("favFilmIds")||[]},t.fetchFilms=function(){h.a.get("https://swapi.co/api/films/").then((function(e){t.setState({films:e.data.results,displayFilms:e.data.results}),t.state.favFilms.length>0&&(t.state.favFilms.forEach((function(e){t.state.displayFilms.find((function(a){return a.episode_id===e})).isFav=!0})),t.setState({displayFilms:t.state.displayFilms}),t.sortFilmsByFav())}))},t.sortFilmsByFav=function(){var e=t.state.displayFilms.sort((function(e){return e.isFav?1:-1})).reverse();t.setState({displayFilms:e})},t.searchHandler=function(e){var a=e.target.value.toLowerCase(),n=t.state.films.filter((function(e){return-1!==e.title.toLowerCase().indexOf(a)}));t.setState({displayFilms:n})},t.favFilmsHandler=function(e){var a=t.state.displayFilms.find((function(a){return a.episode_id===e}));a.isFav=!a.isFav,a.isFav?(t.state.favFilms.push(e),alert(a.title+"is added to favorite")):t.state.favFilms=t.state.favFilms.filter((function(a){return a!==e})),t.setState({displayFilms:t.state.displayFilms,favFilms:t.state.favFilms}),b.a.set("favFilmIds",t.state.favFilms),t.sortFilmsByFav()},t}return Object(f.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchFilms()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"row mt-3"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search by Film name",onChange:this.searchHandler})),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("ul",{className:"list-group"},this.state.displayFilms.map((function(a){var t="ml-2 btn btn-".concat(a.isFav?"danger":"primary");return r.a.createElement("li",{className:"list-group-item p-3",key:a.episode_id},r.a.createElement("a",{href:"/films/".concat(a.episode_id)},a.title),r.a.createElement("button",{type:"button",className:t,onClick:function(){return e.favFilmsHandler(a.episode_id)}},a.isFav?"UnFavorite":"Favorite"))})))))}}]),a}(n.Component),N=function(e){function a(){return Object(o.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{error:!0}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main"},r.a.createElement(y,null))))}}]),a}(n.Component),g=function(){return r.a.createElement(i.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:N}),r.a.createElement(c.a,{exact:!0,path:"/films/:episode_id",component:E}),r.a.createElement(c.a,{path:"/",render:function(){return r.a.createElement("h1",null,"Page Not Found")}})))};s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.d6d16c7b.chunk.js.map