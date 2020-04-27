import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
  inputRef=React.createRef()
  search=async()=>{
    //解构app传过来的方法
    const {updateAppstate}=this.props
    //函数体
    //获取用户输入
    const {value}=this.inputRef.current
    //校验数据
    if (!value||!value.trim()) {
      alert('输入的关键字不能为空')
      return
    }
    //发送ajax请求,获取数据
    const url=`https://api.github.com/search/users?q=${value}`
    //请求前更新app状态即loading状态
    updateAppstate({isLoading:true,isFirst:false})
    
    try{//点击搜索了即不是第一次显示了,即搜索前为loading,数据一回来数据取消
      let result=await axios.get(url)
      const {items}=result.data//items是用户数组-->放进app的userlist里面
      //此时数据已经返回了
      updateAppstate({isLoading:false,userList:items})
      
    }catch(error){
      updateAppstate({isLoading:false,error:error.message})
    }
    //更新数据
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
