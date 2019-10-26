import React, { Component } from 'react'
import TableDataRow from './TableDataRow'


export default class Table extends Component {

  deleteButton  = (idUser) => {
    this.props.deleteButton(idUser)

  }

    render() {
        return (
            <div className="col">
            <table className="table table-striped table-inverse table-hover">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>SDT</th>
                  <th>Quyền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
              { this.props.data.map (  (value,key) =>
                <TableDataRow
                key={key}
                stt ={key+1}
                ID={value.ID}
                Name={value.Name}
                Permission ={value.Permission}
                Tel={value.Tel}
                editFucClick={ (user)=> this.props.editFuc(value)}
                changeEditUserStatus={()=> this.props.changeEditUserStatus()}
                deleteButton = {(idUser) => this.deleteButton(idUser) }
                ></TableDataRow>    
            )}
              </tbody>
            </table>
          </div>
          
        )
    }
}
