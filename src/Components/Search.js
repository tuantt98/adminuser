import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
            <div className="col-12">
              <div className="form-group">
                <div className="btn-group">
                  <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập từ khoá" style={{width: '564px'}} />
                  <div className="btn btn-info">Tìm</div>
                </div>
              </div>
            </div>
           
          </div>
          
          
        )
    }
}
