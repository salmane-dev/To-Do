(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},34:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var n=a(31),o=a.n(n),r=a(0),i=a.n(r),l=a(18),c=a(8),s=a(9),d=a(11),u=a(10),p=a(13),m=a(1),h=a(14),f=a.n(h),b=a(63),y=(a(28),a(29),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{src:"https://images.unsplash.com/photo-1544896478-d5b709d413c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",alt:"vintage stuff"}))}}]),a}(r.Component)),g=a(3),v=a.n(g),E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).MyStyles=function(){return{display:"flex",alignItems:"center",justifyContent:"space-between",border:"1px solid black",backgroundColor:"#82c0e4",textDecoration:e.props.todo.completed?"line-through":"none"}},e.Mytimes=function(){return{textDecoration:"inherit"}},e}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",{className:"p-2 my-1",style:this.MyStyles()},i.a.createElement("input",{type:"checkbox",className:"my-1 float-left",id:this.props.todo.id,onChange:this.props.Mytoggle.bind(this,this.props.todo.id),checked:this.props.todo.completed}),i.a.createElement("label",{style:{display:"inline-block",maxWidth:"80%"},htmlFor:this.props.todo.id},this.props.todo.title),i.a.createElement("i",{className:"fas fa-times cursor-pointer text-red-600 hover:text-red-700 hover:text-xl",style:this.Mytimes(),onClick:this.props.btndelete.bind(this,this.props.todo.id)})))}}]),a}(r.Component);E.propType={todo:v.a.object.isRequired,markComplete:v.a.func.isRequired,delTodo:v.a.func.isRequired};var x=E,j=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return i.a.createElement(x,{key:t.id,todo:t,Mytoggle:e.props.Mytoggle,btndelete:e.props.btndelete})}))}}]),a}(r.Component);function O(){return i.a.createElement("header",{style:{backgroundColor:"#01273d",color:"white",padding:"10px",textAlign:"center",fontWeight:"bold",fontSize:"22px",letterSpacing:"3px"}},i.a.createElement("h1",{className:"text-2xl"}," My Todos "),i.a.createElement(p.b,{to:"/",className:"text-xs"},"  HOME ")," | ",i.a.createElement(p.b,{to:"/About",className:"text-xs"}," ABOUT "))}j.propType={todo:v.a.array.isRequired,markComplete:v.a.func.isRequired,delTodo:v.a.func.isRequired};var k=a(33),S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onChange=function(t){e.setState(Object(k.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("form",{style:{display:"flex",margin:"2px"},onSubmit:this.onSubmit},i.a.createElement("input",{type:"text",name:"title",placeholder:"Add Something to do ",style:{flex:"10",padding:"4px"},value:this.state.title,onChange:this.onChange}),i.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"},onSubmit:this.props.addone}))}}]),a}(r.Component);S.propType={AddTodo:v.a.func.isRequired};var C=S;function N(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"About"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia architecto voluptate laboriosam dolorum dolores?"))}var w=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).hadleClick=function(){n.setState({isShowing:!n.state.isShowing})},n.Mytoggle=function(e){n.setState({todos:n.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},n.btndelete=function(e){f.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(t){return n.setState({todos:Object(l.a)(n.state.todos.filter((function(t){return t.id!==e})))})}))},n.addTodo=function(e){""!=e?f.a.post("https://jsonplaceholder.typicode.com/todos",{id:Object(b.a)(),title:e,completed:!1}).then((function(e){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[e.data])})})):alert("will you type something please !?")},n.state={title:" React ",isShowing:!1},n.state={todos:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({title:" JOKE "}),f.a.get("https://jsonplaceholder.typicode.com/todos?_limit=7").then((function(t){return e.setState({todos:t.data})}))}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){this.setState({todos:[""]}),console.log("unmout app biiiitch")}},{key:"render",value:function(){var e=this;return i.a.createElement(p.a,null,i.a.createElement("div",{className:"h-auto  bg-blue-200 center"},i.a.createElement("div",{className:"h-auto flex justify-center "},i.a.createElement("center",{className:"w-1/2 p-6"},i.a.createElement("h1",null," Hello",this.state.title," "),i.a.createElement("button",{onClick:this.hadleClick,className:"m-4 p-1 bg-blue-400  rounded "},"Click me"),this.state.isShowing?i.a.createElement(y,null):null)),i.a.createElement("div",{className:" mx-auto",style:{minWidth:"350px",width:"70%"}},i.a.createElement(O,{className:" p-12 m-6m"}),i.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"text-center m-auto "},i.a.createElement(j,{todos:e.state.todos,className:" p-12 m-2",Mytoggle:e.Mytoggle,btndelete:e.btndelete}),i.a.createElement(C,{addone:e.addone,addTodo:e.addTodo}),i.a.createElement("small",{className:"text-red-600 "}," Error ")))}}),i.a.createElement(m.a,{path:"/about",component:N}))))}}]),a}(r.Component);o.a.render(i.a.createElement(w,{title:"Hi peeeeeps"}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.5bc5aa18.chunk.js.map