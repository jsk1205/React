import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
  inputRef=React.createRef()
  search=async ()=>{
    const {updateApp}=this.props
    //函数体
    //获取用户输入
    const {value}=this.inputRef.current
    //校验数据
    if (!value||!value.trim()) {
      alert('输入不能为空')
      return 
    }
    //发送ajax请求获得数据
    const url=`https://api.github.com/search/users?q=${value}`
    //请求前更新状态
    updateApp({isLoading:true,isFirst:false})
   try{
    let result = await axios.get(url)
    // console.log(result)
    //获得数据items放到app状态里面的userList里面
    //要动app里面的状态需要定义一个方法而不能直接修改
    const {items}=result.data
    updateApp({isLoading:false,userList:items})
   }catch(error){
    updateApp({isLoading:false,error:error.message})
   }
    //更新状态
  }
  
  
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input  ref={this.inputRef} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
