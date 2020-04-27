import React, { Component } from 'react'
import Item from "../item"
import PubSub from 'pubsub-js'
export default class List extends Component {
  state={
		userList:[],
		isFirst:true,
		isLoading:false,
		error:''
  }
  componentDidMount(){
    PubSub.subscribe('xz',(_,stateObj)=>{
      //console.log('有人订阅消息了:',msg,data)
      this.setState(stateObj)
    })
  }
  render() {
		const {userList,isFirst,isLoading,error} = this.state
		let content = ''
		if(isFirst) content = <h2>输入关键字，点击搜索</h2>
		else if(isLoading) content = <h2>Loadig....</h2>
		else if(error) content = <h2>{error}</h2>
		else content = userList.map((userObj)=>{
			return <Item key={userObj.login} {...userObj}/>
		})
		return (
			<div className="row">
				{content}
			</div>
		)
	}
}