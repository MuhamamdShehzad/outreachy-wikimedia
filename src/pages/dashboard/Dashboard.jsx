import React from 'react'
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar1 from "../../components/navbar/Navbar1";
import './dashboard.scss'
import Footer from '../../components/footer/Footer';
function Dashboard() {
  return (
    <div className="home">
       <Navbar1 />
    
      <div className="homeContainer">
        <Sidebar />
        <div className="center">
          <div className="widgets">
              <Widget type="Total Number of Tools" />
              <Widget type="Tools With Missing Information" />
              <Widget type="Tools Edited With Managment System" />
          </div>
          <div className="charts">
            <Featured />   
            <Chart title="Data of Missing Fields in all Tools" aspect={2 / 1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Edits</div>
            <Table /> 
          </div>
      </div>
    </div>  
    <Footer/>
  </div> 
  )
}

export default Dashboard