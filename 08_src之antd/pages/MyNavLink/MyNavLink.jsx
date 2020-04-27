import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

// export default class MyNavLink extends Component {
//   render() {
//     return (
//       // <NavLink activeClassName="demo" className="list-group-item" to={this.props.to}>{this.props.children}</NavLink>
//       <NavLink activeClassName="demo" className="list-group-item" {...this.props}/>
//       )
//   }
// }

//没有自己的this
export default props => //高阶组件
  <NavLink activeClassName="demo" className="list-group-item" {...props} />
  