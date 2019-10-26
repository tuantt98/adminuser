import React, { Component } from 'react'
import EditUser from './EditUser'

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state={
      TempValue:'',
      userObj:{}
    }
  }
  

  getUserEdit = (user) => {
    this.setState({
      userObj: user
    });

    this.props.getUserEdit(user)
  }

  isShowEditForm = () => {
    if(this.props.editUserStatus){
      return <EditUser 
      changeEditUserStatus={()=> this.props.changeEditUserStatus()}
      userEditObject={this.props.userEditObject}
      getUserEdit={(user) => this.getUserEdit(user)}
      ></EditUser>
    }
     
  }
  isChange = (event) => {
    this.setState({
      TempValue:event.target.value
    });
    // console.log(this.state.TempValue)
    // this.props.getTextSearch(this.state.TempValue)
  }

  hienThiNut = () => {
    if(this.props.hienThiForm){
      return <div className="btn btn-block btn-outline-warning mt-3" onClick={()=> this.props.ketNoi()}>Đóng</div> 
    } 
    return  <div className="btn btn-block btn-outline-info mt-3"  onClick={()=> this.props.ketNoi()} >Thêm mới</div>
  }
    render() {
      
        return (
            
            <div className="col-12">
         
                {this.isShowEditForm()}
              <div className="form-group">
                <div className="btn-group btn-block">
                  <input type="text" 
                  className="form-control" 
                   placeholder="Nhập từ khoá(tên)"  
                     onChange={(event)=>this.isChange(event)}
                   />
                  <div className="btn btn-info" onClick={(dataSearch) => this.props.getTextSearch(this.state.TempValue)}>Tìm</div>
                </div>

                {this.hienThiNut()}
              </div>
            </div>
           
         
          
          
        )
    }
}
