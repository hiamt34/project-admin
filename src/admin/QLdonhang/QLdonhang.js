import React, { Component } from 'react';

class QLdonhang extends Component {
    render() {
        return (
            <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Quản lý danh mục</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">DataTables</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">DataTable with minimal features &amp; hover style</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table id="example2" className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>THÔNG TIN</th>
                          <th>TỔNG TIỀN</th>
                          <th>KIỂU THANH TOÁN</th>
                          <th>TRẠNG THÁI</th>
                          <th>THỜI GIAN</th>
                          <th>HÀNH ĐỘNG</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Other browsers</td>
                          <td>All others</td>
                          <td>-</td>
                          <td>-</td>
                          <td>U</td>
                          <td>U</td>
                          <td>U</td>
                        </tr>
                      </tbody>
                      
                    </table>
                  </div>
                  {/* /.card-body */}
                </div>
                
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
        );
    }
}

export default QLdonhang;