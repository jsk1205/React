import React ,{Component} from 'react'
import './item.css'

export default class Item extends Component{
	delete=(id)=>{
		//是否删除
		if(	window.confirm('确定删除吗')){//confrim不会往外找
			 //删除所对应的id 评论内容
			 this.props.deleteComment(id)
		} 
	}
	render(){
		const {username,content} = this.props
		return (
			<li className="list-group-item">
				<div className="handle">
					<a href="#1" onClick={this.delete}>删除</a>
				</div>
				<p className="user"><span >{username}</span><span>说:</span></p>
				<p className="centence">{content}</p>
			</li>
		)
	}
}