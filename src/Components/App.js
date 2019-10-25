import React, { Component } from 'react'
import '../App.css'

import Header from './Header'
import Search from './Search'
import Table from './Table'
import Add from './Add'
import data from './data'
import uuidv1 from 'uuid/v1'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: data,
      searchText:''
    }
  }
  

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }

  getTextSearch = (dataSearch) => {

    this.setState({
      searchText: dataSearch
    });
    
  }
  getNewUserData = (Name,Tel,Permission) => {
    // var item ={Name,Tel,Permission}
    // console.log({Name,Tel,Permission})
    let item = {}
    item.ID = uuidv1(); 
    item.Name = Name
    item.Tel = Tel
    item.Permission = Permission
    let items = this.state.data
    items.push(item)
    console.log(items)

    this.setState({
      data: items
    });
  }



  render() {
    let filterData = this.state.data.filter( 
      value =>  value.Name.indexOf(this.state.searchText ) !== -1 )
    return (
      <div>
    <Header></Header>
    <div className="searchForm">
      <div className="container">
      <div className="row">
        <Search 
        getTextSearch={(dataSearch) => this.getTextSearch(dataSearch)}
        ketNoi={() => this.doiTrangThai()}
        hienThiForm = {this.state.hienThiForm}

        ></Search>
        <div className="col-12">
              <hr />
        </div>
      <Table data={filterData} ></Table>
      <Add add={(Name,Tel,Permission) => this.getNewUserData(Name,Tel,Permission)} hienThiForm = {this.state.hienThiForm} ></Add>
      </div>
      </div>

    </div>
    </div>
    )
  }
}
