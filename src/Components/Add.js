import React, { Component } from 'react'

export default class Add extends Component {
    render() {
        return (
            <div className="col-3">
            <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
              <div className="card-header">Thêm mới</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Username" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Phone" />
                </div>
                <div className="form-group">
                  <select className="custom-select" required>
                    <option value>Chọn quyền</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Thường</option>
                  </select>
                  <div className="invalid-feedback">Example invalid custom select feedback</div>
                </div>
                <div className="form-group">
                  <div className="btn btn-block btn-primary">Thêm mới</div>
                </div>
              </div>
            </div>
          </div>
          
        )
    }
}
