import React, { Component } from 'react'

export default class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state={
            ID: this.props.userEditObject.ID,
            Tel: this.props.userEditObject.Tel,
            Permission: this.props.userEditObject.Permission,
            Name: this.props.userEditObject.Name,
        }
    }
    

    saveButton = () => {
        this.props.changeEditUserStatus()
        var user = {...this.state}
        this.props.getUserEdit(user)
    }

    isChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        // console.log({name,value})
        this.setState({
            [name]:value
        });
    }
    render() {
        return (
            <div className="col-12">
        <form>
                <div className="card bg-warning mb-3 mt-2">
                <div className="card-header text-center">Sửa thông tin</div>
                <div className="card-body text-primary">
                  <div className="form-group">
                    <input defaultValue={this.props.userEditObject.Name} onChange={(event) => this.isChange(event)}
                    type="text" className="form-control" name="Name" placeholder="Tên"  />
                  </div>
                  <div className="form-group">
                    <input defaultValue={this.props.userEditObject.Tel} onChange={(event) => this.isChange(event)}
                    type="text" className="form-control" name ="Tel"   placeholder="Số điện thoại" />
                  </div>
                  <div className="form-group">
                    <select defaultValue={this.props.userEditObject.Permission} onChange={(event) => this.isChange(event)}
                     className="custom-select" name="Permission" required  >
                      <option value>Chọn quyền</option>
                      <option value={1}>Admin</option>
                      <option value={0}>Thường</option>
                    </select>
                    
                  </div>
                  <div className="form-group">
                    <input onClick={ ()=> this.saveButton() } type="button" className="btn btn-block btn-danger"  value="Lưu"/>
                  </div>
                </div>
              </div>
              </form>
             
         </div>
        )
    }
}
