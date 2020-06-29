import './Contact.css'
import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapTable from 'react-bootstrap-table-next'
class Contact extends Component {
 state={
    allcontacts:[],
   columns:
   [
      {dataField:"FirstName",text:"First name"},
      {dataField:'LastName', text:'Last name'},
      {dataField:'PhoneNumber', text:'Phone number'},
      {dataField:'Gender', text:'Gender'}  
    ]
 }
 //Connect to server and get data
 componentDidMount()
 {
      const url = "http://localhost:2222/backend/GetContacts.php" //url of server
      axios.get(url)
      .then(res=> 
        {
         this.setState({allcontacts:res.data})
        })
   
  }
render()
{
      return(
          <div className='tableContacts' key={Math.random()}>
          <Link className="AddContactButton" to="/AddNewContact">Add new contact</Link>
          <Link className='GenderGraphButton' to ='/GenderDistribution'>Gender graph</Link>
          {/*use react Bootstrap table to show Contacts list  */}
          <BootstrapTable className='TableBotsTrap' key={Math.random()}
          keyField='id'
          data={this.state.allcontacts}
          columns={this.state.columns}
          pagination={paginationFactory()}
          />
          </div>
      )
        
}
}
  export default Contact