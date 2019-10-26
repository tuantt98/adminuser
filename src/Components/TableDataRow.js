import React, { Component } from 'react'

export default class TableDataRow extends Component {

    permissionShow= ()=>{
        if(this.props.Permission){
            return "Admin"
        }
        return "Thường"
    }
    editClick = () =>{
      this.props.editFucClick();
      this.props.changeEditUserStatus()
    }
    deleteButton = (idUser) => {
      // console.log(idUser)
      this.props.deleteButton(idUser)
    }
    render() {
        return (
                  <tr>
                  <td>{this.props.stt}</td>
                  <td> {this.props.Name} </td>
                  <td> {this.props.Tel}</td>
                  <td>{
                      this.permissionShow()
                      }</td>
                  <td>
                    <div className="btn-group">
                      <div onClick ={() => this.editClick()} className="btn btn-warning sua"> <i className="fas fa-edit    ">Sửa</i> </div>
                      <div className="btn btn-danger xoa"
                      onClick ={() => {this.deleteButton(this.props.ID)}}
                      > <i className="fas fa-delete    ">Xoá</i> </div>
                    </div>
                  </td>
                </tr>
             
        )
    }
}
