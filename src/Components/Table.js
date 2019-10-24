import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
            <div class="col-9">
            <table class="table table-striped table-inverse table-hover">
                <thead class="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>Tuấn</td>
                        <td>0977110254</td>
                        <td>Admin</td>
                        <td>
                            <div class="btn-group">
                                <div class="btn btn-warning sua"> <i class="fas fa-edit    ">Sửa</i> </div>
                                <div class="btn btn-danger xoa"> <i class="fas fa-delete    ">Xoá</i> </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">2</td>
                        <td>Tuấn</td>
                        <td>0977110254</td>
                        <td>Admin</td>
                        <td>
                            <div class="btn-group">
                                <div class="btn btn-warning sua"> <i class="fas fa-edit    ">Sửa</i> </div>
                                <div class="btn btn-danger xoa"> <i class="fas fa-delete    ">Xoá</i> </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">3</td>
                        <td>Tuấn</td>
                        <td>0977110254</td>
                        <td>Admin</td>
                        <td>
                            <div class="btn-group">
                                <div class="btn btn-warning sua"> <i class="fas fa-edit    ">Sửa</i> </div>
                                <div class="btn btn-danger xoa"> <i class="fas fa-delete    ">Xoá</i> </div>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

        )
    }
}
