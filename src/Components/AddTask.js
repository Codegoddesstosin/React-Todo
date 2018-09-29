 import React from 'react';
 import './addTask.css';

export default class AddTask extends React.Component {   
    
   	 constructor (props){
   	 	super(props);
       
       //initialize state to empty
   	 	this.state = {value: ''}; 
 
         //bind methods
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);

       
   	 }

     //method to handle change
   	 handleChange(e) {
         //picks up the value 
         this.setState({value: e.target.value});
   	 }
   	   //method to add todoitem
   	 addTodo(todo){
   	 //ensure todo text isnt empty
   	   if (todo.length > 0) {
   	   	     this.props.addTodo(todo);
             //zero out the value
   	   	     this.setState({ value: ''});
    	   }
      
   	 }

       render () {
       	 return (
   	      <div>
              //this.state.value gets the value from the handle change event
             <input type="text" value={this.state.value} onChange={this.handleChange} />
             <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Submit</button>

          </div>

   	     );

   	    }  
   }
