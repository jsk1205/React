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

	updateAppstate=(stateObj)=>{//接收的这个stateobj为对象
		//函数体
		this.setState(stateObj)
	}
	render() {
		return (
			<div id="app">
				<div className="container">
					<Search updateAppstate={this.updateAppstate}/>
				  <List {...this.state}/>
				</div>
			</div>
		)
	}
}
