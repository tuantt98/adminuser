import React, { Component } from 'react'
import '../App.css'

import Header from './Header'
import Search from './Search'
import Table from './Table'
import Add from './Add'

export default class App extends Component {
  render() {
    return (
      <div>
    <Header></Header>
    <div className="searchForm">
      <div className="container">
      <div className="row">
        <Search></Search>
        <div className="col-12">
              <hr />
        </div>
      <Table></Table>
      <Add></Add>
      </div>
      </div>

    </div>
    </div>
    )
  }
}
