import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import AddTask from './Components/AddTask';
import TodoItem from './Components/todoItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
    constructor(props){
       super(props);
  
        //initialize state, todos-state(data)
       this.state = {
        todos: [
          {id: 0, text:"make dinner"},
          {id: 1, text:"make lunch"},
          {id: 2, text:"make breakfast"}
 
        ],
         nextId: 3
       }
          //bind the methods
         this.addTodo = this.addTodo.bind(this);
         this.removeTodo = this.removeTodo.bind(this);

    }
       addTodo(todoText) {
        //grab the current state of todos and copy to a local variable, dont modify the state directly, and replace the ehole todos
         let todos = this.state.todos.slice() ;

          //.push function adds
         todos.push({id: this.state.nextId, text: todoText});
         this.setState({
          todos: todos,
          nextId: ++this.state.nextId
         });

       }

        removeTodo(id) {
          this.setState({
            //.filter removes
             todos: this.state.todos.filter((todo, index)=> todo.id!==id)
          })
        }


  


  render() {
    
       const transitionOptions = {
       transitionName: "fade",
       transitionEnterTimeout: 500,
       transitionLeaveTimeout: 500
    };


    return (
      <div className="App">
         <ReactCSSTransitionGroup {...transitionOptions}>
        <div className="todo-wrapper">
           //include the header component in the main app.js
           <Header />

           // access todotext as props in the component, add the function to addtodoitem
           <AddTask todoText=""  addTodo={this.addTodo}/>


           <ul>
            { 
              
              this.state.todos.map((todo) => {
                 return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
                })
               }

              
            </ul> 
        </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }   
}

export default App;
 