import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactTable from "react-table";

import {Button,MenuItem, DropdownButton, ButtonToolbar} from 'react-bootstrap';
import "react-table/react-table.css";
class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  componentDidMount() {
    fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }


  render() {
    function onSelectAlert(eventKey) {
      alert(`Alert from menu item.\neventKey: ${eventKey}`);
    }

    function getDB() {
      fetch('http://localhost:8020/posts',{ method: 'GET'})
        .then(response =>  {
          response.json()
          console.log(response.headers.get('Date'))
        })
        //.then(data => this.setState({ data }));
        .then(data => console.log(data));
        
    }

    const columns = [{
      Header: 'Name',
      accessor: 'name'
    },{
      Header: 'price_usd',
      accessor: 'price_usd'
    }]

    return (
           <div>
           
          
              <ButtonToolbar>
                <DropdownButton
                  bsSize="large"
                  title="PTFloat"
                  id="dropdown-size-large"
                >
                  <MenuItem eventKey="1" onSelect={onSelectAlert}>Historical Holding</MenuItem>
                  <MenuItem eventKey="2">Reviews</MenuItem>
                  <MenuItem eventKey="3">Compare</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Time series</MenuItem>
                </DropdownButton>
              </ButtonToolbar>
            <ReactTable
                data={this.state.data}
                columns={columns}
                defaultPageSize = {10}
                pageSizeOptions = {[10, 50]}
              />
          </div>      
    )

  } 
}

export default App;
