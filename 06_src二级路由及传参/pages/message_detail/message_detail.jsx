import React, { Component } from 'react'

export default class MessageDetail extends Component {
  state={
    details:[
      {id:'001',title:'msg01',content:'他叫肖战'},
			{id:'002',title:'msg02',content:'他爱笑'},
			{id:'003',title:'msg03',content:'而且笑起来很甜'},
    ]
  }
  render() {
    const {id}=this.props.match.params
    let result=this.state.details.find((detailObj)=>{
      return detailObj.id === id
    })
    return (
      <ul>
        <li>ID:{result.id}</li>
        <li>TITLE:{result.title}</li>
        <li>CONTENT:{result.content}</li>
      </ul>
    )
  }
}
