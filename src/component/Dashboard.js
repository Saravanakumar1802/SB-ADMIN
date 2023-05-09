import React from 'react'
import BasicCard from './CardComponents/BasicCard'
import ProgressCard from './CardComponents/ProgressCard';
import ChartComp from './ChartComp';
const Dashboard = ({ data }) => {
    const colorData = [{
        color: 'bg-primary',
        colorText: 'Primary',
        colorCode: '#4e73df'
    },
    {
        color: 'bg-success',
        colorText: 'Success',
        colorCode: '#1cc88a'
    },
    {
        color: 'bg-info',
        colorText: 'Info',
        colorCode: '#36b9cc'
    },
    {
        color: 'bg-warning',
        colorText: 'Warning',
        colorCode: '#f6c23e'
    },
    {
        color: 'bg-danger',
        colorText: 'Danger',
        colorCode: '#e74a3b'
    },
    {
        color: 'bg-secondary',
        colorText: 'Secondary',
        colorCode: '#858796'
    },
    {
        color: 'bg-gradient-success',
        colorText: 'Gradient-success',
        colorCode: '#f8f9fc'
    },
    {
        color: 'bg-dark',
        colorText: 'Dark',
        colorCode: '#5a5c69'
    },
    ]

    return <div id="content-wrapper" className="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

            {/* <!-- Topbar --> */}
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">
                    <BasicCard label="Earnings (Monthly)" value={data.earningsMonthly} icon='fa-calendar' border='primary' titleColor='primary' />
                    <BasicCard label="Earnings (Yearly)" value={data.earningsYearly} icon='fa-dollar-sign' border='success' titleColor='success' />
                    <ProgressCard label="Tasks" value={data.task} icon='fa-clipboard-list' border='info' />
                    <BasicCard label="Pending Requests" value={data.pendingRequest} icon='fa-comments' border='warning' titleColor='warning' />
                </div>
                <ChartComp />
            </div>

            <div class="card shadow mb-4" style={{ padding: "3rem 3rem 0 ", background: "#f2f2f2" }}>
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                </div>
                <div class="card-body">
                    <h4 class="small font-weight-bold">Server Migration <span
                        class="float-right">20%</span></h4>
                    <div class="progress mb-4">
                        <div class="progress-bar bg-danger" role="progressbar" style={{
                            width: "20%",
                            ariaValuenow: "20", ariaValuemin: "0", ariaValuemax: "100"
                        }}></div>
                    </div>
                    <h4 class="small font-weight-bold">Sales Tracking <span
                        class="float-right">40%</span></h4>
                    <div class="progress mb-4">
                        <div class="progress-bar bg-warning" role="progressbar" style={{
                            width: "40%",
                            ariaValuenow: "40", ariaValuemin: "0", ariaValuemax: "100"
                        }}></div>
                    </div>
                    <h4 class="small font-weight-bold">Customer Database <span
                        class="float-right">60%</span></h4>
                    <div class="progress mb-4">
                        <div class="progress-bar" role="progressbar" style={{
                            width: "60%",
                            ariaValuenow: "60", ariaValuemin: "0", ariaValuemax: "100"
                        }}></div>
                    </div>
                    <h4 class="small font-weight-bold">Payout Details <span
                        class="float-right">80%</span></h4>
                    <div class="progress mb-4">
                        <div class="progress-bar bg-info" role="progressbar" style={{
                            width: "80%",
                            ariaValuenow: "80", ariaValuemin: "0", ariaValuemax: "100"
                        }}></div>
                    </div>
                    <h4 class="small font-weight-bold">Account Setup <span
                        class="float-right">Complete!</span></h4>
                    <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style={{
                            width: "100%",
                            ariaValuenow: "100", ariaValuemin: "0", ariaValuemax: "100"
                        }}></div>
                    </div>
                </div>
            </div>


            <div class="row" style={{ padding: "3rem 3rem 0 ", background: "#f2f2f2" }}>

                {colorData.map((data, id) => {
                    return <div class="col-lg-6 mb-4">
                        <div className={`card ${data.color} text-white shadow`}>
                            <div class="card-body">
                                {data.colorText}
                                <div class="text-white-50 small">{data.colorCode}</div>
                            </div>
                        </div>
                    </div>
                })}
            </div>

        </div>
    </div>




}

export default Dashboard