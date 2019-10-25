import React, { Component } from 'react'

export default class Add extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      ID:'',
      Name:'',
      Permission: '',
      Tel:''
    }
  }
  

  isChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    // console.log({name,value})
    this.setState({
      [name]:value
    });

    // var item = {...this.state}
   
  }
    kiemTraTrangThai = () => {
      if(this.props.hienThiForm){
        return (
          <div className="col">
          <form>
          <div className="card border-primary mb-3 mt-2" style={{maxWidth: '18rem'}}>
          <div className="card-header">Thêm mới</div>
          <div className="card-body text-primary">
            <div className="form-group">
              <input type="text" className="form-control" name="Name" placeholder="Tên" onChange={(event)=>this.isChange(event)} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name ="Tel"   placeholder="Số điện thoại" onChange={(event)=>this.isChange(event)} />
            </div>
            <div className="form-group">
              <select className="custom-select" name="Permission" required  onChange={(event)=>this.isChange(event)}>
                <option value>Chọn quyền</option>
                <option value={1}>Admin</option>
                <option value={0}>Thường</option>
              </select>
              <div className="invalid-feedback">Example invalid custom select feedback</div>
            </div>
            <div className="form-group">
              <input type="reset" className="btn btn-block btn-primary" onClick={() => this.props.add(this.state.Name,this.state.Tel,this.state.Permission)} value="Thêm mới"/>
            </div>
          </div>
        </div>
        </form>
        </div>
        )
      }
    }
    render() {
      // console.log(this.props.hienThiForm)
        return (
           <div>
              {this.kiemTraTrangThai()}          
         
              </div>
        )
    }
}
