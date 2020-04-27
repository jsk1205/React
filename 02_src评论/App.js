//App组件是所有组件的“壳子”
//1.引入react核心库
import React,{Component} from 'react'
import Add from "./component/add"
import List from './component/list'
//2.引入一些我们自定义的组件
//3.定义一个名为App的组件,随后暴露
export default class App extends Component{
	state={
		comments:[
			{id:'01',username:'小屁轲',content:'娜娜眼真大'},
			{id:'02',username:'娜娜轲',content:'黄是个狗'},
			{id:'03',username:'大美',content:'我最美'},
			{id:'04',username:'静姐',content:'我不服'}
		]
	}
	//添加评论
	addComment=(commentObj)=>{
		const {comments}=this.state
		this.setState({comments:[commentObj,...comments]})
	}
	//删除评论
	deleteComment=(id)=>{
		let {comments}=this.state
		//findIndex
    let index=comments.findIndex((commentObj)=>{
			return commentObj.id===id
		})
		//
		comments.splice(index,1)
		this.setState({comments})
	}
	render(){
		return (
			<div id="app">
				<div>
					<header className="site-header jumbotron">
						<div className="container">
							<div className="row">
								<div className="col-xs-12">
									<h1>请发表对React的评论</h1>
								</div>
							</div>
						</div>
					</header>
					<div className="container">
					  <Add addComment={this.addComment}/>
						<List comments={this.state.comments} deleteComment={this.deleteComment}/>
					</div>
				</div>
			</div>
		)
	}
}

