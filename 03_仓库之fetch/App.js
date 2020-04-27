import React, { Component } from 'react'
// import axios from 'axios'

export default class App extends Component {
  state={
		repoName:'',
		repoUrl:'',
		isLoading:true,
		error:'',
		keyword:'v'
	}
  async componentDidMount(){
    const url=`https://api.github.com/search/repositories?q=${this.state.keyword}&sort=stars`
		// axios.get(url).then(
		// 	response=>{console.log(response)}
		// )
		
	// 	try{
	// 		let result=await axios.get(url)
	// 		const {name,html_url} =result.data.items[0]
	// 		this.setState({repoName:name,repoUrl:html_url,isLoading:false})
	// 	}catch(err){
	// 		// console.log(err.message)
	// 		this.setState({isLoading:false,err:err.message})
	// 	}
		fetch(url).then(
			response => {
				console.log('成功')
				//console.log(response.json());
				return response.json()//需要response.json()把数据带回来
			},
		).then(
			response => {console.log('成功2',response);},
		).catch(
			(error)=>{console.log(error);}
		)
	}


	
	render() {
	  const {keyWord,repoUrl,repoName,isLoading,error} = this.state
		let content = ''
		if(isLoading) content = <h2>Loading...</h2>
		else if(error) content = <h2 style={{color:'red'}}>{error}</h2>
		else content = <h2>在github上以【{keyWord}】字母开头的仓库中，点赞量最多的是：<a href={repoUrl}>{repoName}</a></h2>
		return content
	}
}

