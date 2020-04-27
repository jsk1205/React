import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom'
import MessageDetail from '../message_detail/message_detail'
export default class HomeMessage extends Component {
  state={
    messages:[
      {id:'001',name:'消息001'},
      {id:'002',name:'消息002'},
      {id:'003',name:'消息003'},
    ]
  }
  push=(id)=>{
    // console.log(this)//组件实例对象-->路由组件,比别人多了三个属性
    // console.log(this.props)
    this.props.history.push(`/home/message/detail/${id}`)
  }
  replace=(id)=>{
    this.props.history.replace(`/home/message/detail/${id}`)
  }
  forword=()=>{
    //函数体
    this.props.history.goForward()
  }
  back=()=>{
    //函数体
    this.props.history.goBack()
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.messages.map((msgObj)=>{
            return <li key={msgObj.id}>
              <Link to={`/home/message/detail/${msgObj.id}`} >
              {msgObj.name}</Link>&nbsp;&nbsp;
              <button onClick={()=>{this.push(msgObj.id)}}>push查看</button>&nbsp;&nbsp;
              <button onClick={()=>{this.replace(msgObj.id)}}>replace查看</button>
              </li>
            })
          }
        </ul>
        <button onClick={this.forword}>前进</button>
        <button onClick={this.back}>后退</button>
        <hr/>
        <Route path="/home/message/detail/:id" component={MessageDetail}/>
      </div>
    )
  }
}
