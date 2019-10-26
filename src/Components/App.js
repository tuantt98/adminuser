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
      data: [],
      searchText:'',
      editUserStatus: false,
      userEditObject: {}
    }
  }
  
  componentWillMount() {
    // kiểm tra localstogare
    if(localStorage.getItem('userData') == null){
      localStorage.setItem('userData',JSON.stringify(data))
    }else {
      let temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }
  }
  

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }

  changeEditUserStatus = () =>{
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  getTextSearch = (dataSearch) => {

    this.setState({
      searchText: dataSearch
    });
    
  }
  edieUser = (user) => {
    // console.log('Contected.....')
    // console.log(user)
    this.setState({
      userEditObject: user
    });
  }
  getNewUserData = (Name,Tel,Permission) => {
   
    let item = {}
    item.ID = uuidv1(); 
    item.Name = Name
    item.Tel = Tel
    item.Permission = Permission
    let items = this.state.data
    items.push(item)
    // console.log(items)

    this.setState({
      data: items
    });
    localStorage.setItem('userData',JSON.stringify(items))
  }
  getUserEdit = (user) => {

    // console.log(user)
    this.state.data.forEach((value, key) => {
      if(value.ID === user.ID){
        value.ID = user.ID
        value.Name = user.Name
        value.Permission = user.Permission
        value.Tel = user.Tel
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data))
  }

  deleteButton  = (idUser) => {
    // console.log('APP: '+idUser)

    let arrTemp = this.state.data.filter( x => x.ID !== idUser)

    this.setState({
      data: arrTemp
    });

    localStorage.setItem('userData',JSON.stringify(arrTemp))
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
        getUserEdit={ (user) => this.getUserEdit(user) }
        userEditObject={this.state.userEditObject}
        getTextSearch={(dataSearch) => this.getTextSearch(dataSearch)}
        ketNoi={() => this.doiTrangThai()}
        hienThiForm = {this.state.hienThiForm}
        editUserStatus={this.state.editUserStatus}
        changeEditUserStatus={()=> this.changeEditUserStatus()}
        ></Search>
        <div className="col-12">
              <hr />
        </div>
      <Table
      deleteButton = {(idUser) => this.deleteButton(idUser)}
       editFuc= {(user)=> this.edieUser(user) } 
       data={filterData} 
       changeEditUserStatus={()=> this.changeEditUserStatus()}>
       </Table>
      <Add add={(Name,Tel,Permission) => this.getNewUserData(Name,Tel,Permission)} hienThiForm = {this.state.hienThiForm} ></Add>
      </div>
      </div>

    </div>
    </div>
    )
  }
}
