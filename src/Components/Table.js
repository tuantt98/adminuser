import React, { Component } from 'react'
import TableDataRow from './TableDataRow'


export default class Table extends Component {

  mappingData = ()=>{
    this.props.data.map (  (value,key) =>
        <TableDataRow
        key={key}
        id={value.id}
        name={value.name}
        Permission ={value.Permission}
        Tel={value.Tel}
        
        ></TableDataRow>    
    )
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
                ID={value.ID}
                Name={value.Name}
                Permission ={value.Permission}
                Tel={value.Tel}
                
                ></TableDataRow>    
            )}
              </tbody>
            </table>
          </div>
          
        )
    }
}
