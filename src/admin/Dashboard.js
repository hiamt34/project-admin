import React, { Component } from 'react';
import {  Pie, Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            chartData: {
                labels: [
                    'Chrome',
                    'IE',
                    'FireFox',
                    'Safari',
                    'Opera',
                    'Navigator',
                ],
                datasets: [
                    {

                        data: [700, 500, 400, 600, 300, 100],
                        backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
                    }
                ]
            }
        }
    }

    render() {
        return (
            
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Dashboard</h1>
                                </div>{/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"> <a href="a">Home</a></li>
                                        <li className="breadcrumb-item active">Dashboard v1</li>
                                    </ol>
                                </div>{/* /.col */}
                            </div>{/* /.row */}
                        </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content-header */}
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            {/* Small boxes (Stat box) */}
                            <div className="row">
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-info">
                                        <div className="inner">
                                            <h3>150</h3>
                                            <p>New Orders</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-bag" />
                                        </div>
                                         <a href="a" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <h3>53<sup style={{ fontSize: 20 }}>%</sup></h3>
                                            <p>Bounce Rate</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-stats-bars" />
                                        </div>
                                         <a href="a" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-warning">
                                        <div className="inner">
                                            <h3>44</h3>
                                            <p>User Registrations</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-person-add" />
                                        </div>
                                         <a href="a" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-warning">
                                        <div className="inner">
                                            <h3>44</h3>
                                            <p>User Registrations</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-person-add" />
                                        </div>
                                         <a href="a" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-warning">
                                        <div className="inner">
                                            <h3>44</h3>
                                            <p>User Registrations</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-person-add" />
                                        </div>
                                         <a href="a" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-warning">
                                        <div className="inner">
                                            <h3>44</h3>
                                            <p>User Registrations</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-person-add" />
                                        </div>
                                         <a href="a" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-warning">
                                        <div className="inner">
                                            <h3>44</h3>
                                            <p>User Registrations</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-person-add" />
                                        </div>
                                         <a href="a" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-danger">
                                        <div className="inner">
                                            <h3>65</h3>
                                            <p>Unique Visitors</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-pie-graph" />
                                        </div>
                                         <a href="a" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                {/* ./col */}
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Browser Usage</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">

                                            <Pie
                                                data={this.state.chartData}
                                                options={{
                                                    title: {
                                                        display: true,
                                                        text: 'Doanh thu tháng',
                                                        fontSize: 25
                                                    },
                                                    legend: {
                                                        display: true,
                                                        position: 'right'
                                                    },
                                                }}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-6'>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Browser Usage</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">

                                            <Bar
                                                data={this.state.chartData}
                                                options={{
                                                    title: {
                                                        display: true,
                                                        text: 'Doanh thu tháng',
                                                        fontSize: 25
                                                    },
                                                    legend: {
                                                        display: true,
                                                        position: 'right'
                                                    },
                                                }}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-8'>
                                    
                                </div>
                                <div className='col-md-4'>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Recently Added Products</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body p-0">
                                            <ul className="products-list product-list-in-card pl-2 pr-2">
                                                <li className="item">
                                                    <div className="product-img">
                                                        <img src="dist/img/default-150x150.png" alt="" className="img-size-50" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="a" className="product-title">Samsung TV
            <span className="badge badge-warning float-right">$1800</span></a>
                                                        <span className="product-description">
                                                            Samsung 32" 1080p 60Hz LED Smart HDTV.
          </span>
                                                    </div>
                                                </li>
                                                {/* /.item */}
                                                <li className="item">
                                                    <div className="product-img">
                                                        <img src="dist/img/default-150x150.png" alt="" className="img-size-50" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="a" className="product-title">Bicycle
            <span className="badge badge-info float-right">$700</span></a>
                                                        <span className="product-description">
                                                            26" Mongoose Dolomite Men's 7-speed, Navy Blue.
          </span>
                                                    </div>
                                                </li>
                                                {/* /.item */}
                                                <li className="item">
                                                    <div className="product-img">
                                                        <img src="dist/img/default-150x150.png" alt="" className="img-size-50" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="a" className="product-title">
                                                            Xbox One <span className="badge badge-danger float-right">
                                                                $350
            </span>
                                                        </a>
                                                        <span className="product-description">
                                                            Xbox One Console Bundle with Halo Master Chief Collection.
          </span>
                                                    </div>
                                                </li>
                                                {/* /.item */}
                                                <li className="item">
                                                    <div className="product-img">
                                                        <img src="dist/img/default-150x150.png" alt="a" className="img-size-50" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="a" className="product-title">PlayStation 4
            <span className="badge badge-success float-right">$399</span></a>
                                                        <span className="product-description">
                                                            PlayStation 4 500GB Console (PS4)
          </span>
                                                    </div>
                                                </li>
                                                {/* /.item */}
                                            </ul>
                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer text-center">
                                            <a href="a" className="uppercase">View All Products</a>
                                        </div>
                                        {/* /.card-footer */}
                                    </div>
                                </div>
                            </div>




                        </div>


                        {/* /.row (main row) */}
                        {/* /.container-fluid */}
                    </section>

                    {/* /.content */}
                </div>
            

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        check: state.check
    }
}
export default connect(mapStateToProps)(Dashboard)
// export default Dashboard;