(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,image:"https://i.pinimg.com/564x/42/b3/e5/42b3e53592cfc05422e17695d44a08c4.jpg",clicked:!1},{id:2,image:"https://i.pinimg.com/564x/e2/eb/3f/e2eb3f8f1b135a40444e5a7b5c90b799.jpg",clicked:!1},{id:3,image:"https://i.pinimg.com/564x/bc/fd/8c/bcfd8c6b42f1abaea09f5b769adb5ca2.jpg",clicked:!1},{id:4,image:"https://i.pinimg.com/564x/46/e7/5b/46e75b5fb23d90f8167b930b4d0066ff.jpg",clicked:!1},{id:5,image:"https://i.pinimg.com/564x/37/da/2e/37da2e157909b07b658e0e3c812d4e67.jpg",clicked:!1},{id:6,image:"https://i.pinimg.com/564x/a0/52/d8/a052d8bf76bbcd8b122a53087efedec3.jpg",clicked:!1},{id:7,image:"https://i.pinimg.com/564x/3d/94/59/3d9459e5b7e1869cc23cc8151a9752e3.jpg",clicked:!1},{id:8,image:"https://i.pinimg.com/564x/08/d2/10/08d210a27ec3925543d0cae11ef7cbb0.jpg",clicked:!1},{id:9,image:"https://i.pinimg.com/564x/3e/a1/e3/3ea1e35f9f21c22374d34d3e7fd1cecf.jpg",clicked:!1},{id:10,image:"https://i.pinimg.com/564x/26/58/59/265859d8ed51d53451b7156695730658.jpg",clicked:!1},{id:11,image:"https://wallpapercave.com/wp/1vrZyze.jpg",clicked:!1},{id:12,image:"https://i.pinimg.com/564x/87/e3/11/87e311a07a9bfb702c0e2798163ee67f.jpg",clicked:!1}]},14:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(3),r=a.n(i),l=a(4),d=a(5),o=a(7),m=a(6),s=a(8),g={image:{width:"210px",height:"210px",margin:"14px",padding:"10px"}},h=function(e){return n.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},n.a.createElement("div",{className:"img-container "},n.a.createElement("img",{className:"rounded",alt:e.name,src:e.image,style:g.image})))},p=a(1),f={navbar:{backgroundColor:"#655931",minHeight:"8vh",fontsize:"16px"}},u=function(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg  text-light",style:f.navbar},n.a.createElement("div",{className:"col-6 "},n.a.createElement("h4",null,"Test Your Memory")),n.a.createElement("div",{className:"col-4"},n.a.createElement("h4",null,e.rightWrong)),n.a.createElement("div",{className:"col-2"},n.a.createElement("h4",null,"Score: ",e.score)))},b={jumbotron:{backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center top",backgroundBlendMode:"multiply",backgroundColor:"#9ebeaf",minHeight:"16vh",display:"flex",alignItems:"center",justifyContent:"center"}};var k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={images:p,score:0,rightWrong:"",clicked:[]},a.handleClick=function(e){-1===a.state.clicked.indexOf(e)?(a.handleIncrement(),a.setState({clicked:a.state.clicked.concat(e)})):a.handleReset()},a.handleIncrement=function(){var e=a.state.score+1;a.setState({score:e,rightWrong:""}),a.handleShuffle()},a.handleReset=function(){a.setState({score:0,rightWrong:"Wrong Hit... Score has been Reset!!!",clicked:[]}),a.handleShuffle()},a.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),c=[e[a],e[t]];e[t]=c[0],e[a]=c[1]}return e}(p);a.setState({friends:e})},a}return Object(s.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(u,{score:this.state.score,rightWrong:this.state.rightWrong}),n.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center p-4",style:b.jumbotron},n.a.createElement("h1",{className:"display-4 text-light"},"Thanks Giving Memory Game!")),n.a.createElement("h3",null,"Click on each card without hitting duplicates and Score!!!! "),n.a.createElement("div",{className:"row"},this.state.images.map(function(t){return n.a.createElement(h,{id:t.id,key:t.id,image:t.image,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle})})))}}]),t}(c.Component);r.a.render(n.a.createElement(k,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,2,1]]]);
//# sourceMappingURL=main.5cb41aa4.chunk.js.map