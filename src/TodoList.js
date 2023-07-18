import React, {Component} from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
	constructor(props){
		super(props);
		this.state = {items: []};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}
	addItem(e){
		if(this._inputElement.value !== ""){
			var newItem = {
				text: this._inputElement.value, 
				key: Date.now()
			};
	
			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				};
			});
		
			this._inputElement.value = "";
		}
		console.log(this.state.items);
		e.preventDefault();
	}
	deleteItem(key){
		var filteredItems = this.state.items.filter(function(item) {
			return (item.key !== key);
		});
		
		this.setState({
			items: filteredItems
		});
	}
	render(){
		return(
            <>
            <h1 style={{textAlign:"center", color:"black"}}>TASK MANAGER</h1>
			<div className="todoListMain" style={{textAlign:"center"}}>
			  <div className="header">
			    <form onSubmit={this.addItem}>
			      <input ref={(a) => this._inputElement = a} placeholder="Enter your Task">
			      </input>
			      <button type="SUBMIT">ADD</button>
			    </form>
			    <TodoItems entries={this.state.items} delete={this.deleteItem} />
			  </div>
		        </div>
                </>
		);
	}
}

export default TodoList;