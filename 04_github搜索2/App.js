import React, { Component } from 'react'
import Search from './components/search'
import List from './components/list'

export default class App extends Component {
	state={
		userList:[],
		isFirst:true,
		isLoading:false,
		error:''
	}
  updateApp=(stateObj)=>{
    this.setState(stateObj)
	}
	
	render() {
		return (
			<div id="app">
				<div className="container">
					<Search updateApp={this.updateApp}/>
				  <List {...this.state}/>
				</div>
			</div>
		)
	}
}

