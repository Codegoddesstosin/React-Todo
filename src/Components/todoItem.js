import React from 'react';
 import './todoItem.css';

export default class todoItem extends React.Component {
        
	   constructor (props){
   	 	super(props);



   	  }

   	  removeTodo(id) {
   	  	this.props.removeTodo(id);
   	  }

        //return this
   	   render() {
   	   	return (
             <div className="todoWrapper">
             //on click method go to the remove todo item method {this.props.todo.text access the text}
             <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>remove</button>{this.props.todo.text}
             </div>
   	   		);
   	   }


   	 }
