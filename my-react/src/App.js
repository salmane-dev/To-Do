import React, { Component} from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import axios from "axios"
import {v4 as uuid} from "uuid"; 
import "./assets/css/style.css"
import "./assets/css/tailwind.css"
import Images from "./component/Images.js"
import Todos from "./component/Todos.js"
import Header from "./component/layouts/Header.js"
import AddTodo from "./component/AddTodo.js"
import About from "./component/pages/About.js"
    

//functional component 
 class App extends Component {

    constructor(props){
       // console.log('app constructor s')
        super(props)
        this.state = { title: " React ", isShowing: false }
        this.state = {  todos: [] }
    }

    componentDidMount(){ 
        this.setState({ title: " JOKE " })

        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=7')
            .then(res => this.setState({ todos :  res.data }))

    }

   componentDidUpdate(){
     //  console.log('Updates UUUUU')
     
   }

    // state are unaopdaknsd variables
    hadleClick = () => {
        this.setState({isShowing: !this.state.isShowing})
    }

// toggle check box
    Mytoggle = (id) => {  
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) todo.completed = !todo.completed
                return todo
            } )
        })
      }


// delete todo 
    btndelete = (id) => {
      
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({
                todos:[
                 ...this.state.todos.filter(todo => todo.id !== id)
                ]
            }) )

        
    }

// add to do 
addTodo = (title) => {
    if(title !== ''){
    axios.post('https://jsonplaceholder.typicode.com/todos',{
    id: uuid(),    
    title,
    completed: false
    })
    .then(res => this.setState({
                todos:[...this.state.todos , res.data]
        }))
       
       }
       else{
           alert('will you type something please !?')
       }
        
    }

    componentWillUnmount(){
        this.setState({
            todos:['']
        })
        console.log('unmout app biiiitch')
    }

    render(){
         
       return (
           <Router>
                <div className="h-auto  bg-blue-200 center">
                    <div className="h-auto flex justify-center ">
                        <center className="w-1/2 p-6">
                            <h1> Hello{ this.state.title} </h1> 
                            <button
                                onClick={this.hadleClick} 
                                className="m-4 p-1 bg-blue-400  rounded "
                            >
                                Click me 
                            </button>
                            {
                            this.state.isShowing ?
                            <Images />
                                : null
                            }
                        </center>
                    </div>

                    <div className=" mx-auto" style={{ minWidth:'350px', width:'70%' }}>
                        <Header className=" p-12 m-6m" />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <div className="text-center m-auto ">
                                <Todos 
                                    todos={this.state.todos} 
                                    className=" p-12 m-2"  
                                    Mytoggle={this.Mytoggle }  
                                    btndelete={this.btndelete }
                                />
                                <AddTodo addone={ this.addone } addTodo={ this.addTodo } />   
                                <small className={ 'text-red-600 ' }> Error </small>  
                                </div>
                            </React.Fragment>
                        )} />

                            <Route path="/about" component={About} />

                    </div>
                </div>
           </Router>

            )
         }
}







export default App


// very good nice way to start comenting your progress in the video
// 2:06:59 / 10:17:01 • React LifeCycle Methods/Hooks 
// very good nice way to start comenting your progress in the video

