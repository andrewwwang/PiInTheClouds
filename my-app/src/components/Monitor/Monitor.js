import React, { Component } from 'react';
import MonitorForm from './MonitorForm';
import MonitorResult from './MonitorResult';

class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionString: "HostName=PiClouds.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=K3PDPENckRvV8vzXpxDaEZM+kwKelAGT5mwsYqYVlyU=",
      consumerGroup: "$Default",
     
      phoneNumber: "4255907387",
     
      refreshResult: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(connectionString, consumerGroup, phoneNumber, refreshResult) {
    this.setState({
      connectionString: connectionString,
      consumerGroup: consumerGroup,
     
      phoneNumber: phoneNumber,
     
      refreshResult: refreshResult
    });
  }

  render() {
    return (
      <div className="Monitor">
        <h2>Monitor Device-To-Cloud Message</h2>
        <MonitorForm 
          connectionString={this.state.connectionString}
          consumerGroup={this.state.consumerGroup}

	  phoneNumber={this.state.phoneNumber}

          onUserInput={this.handleUserInput}
        />
        <MonitorResult
          connectionString={this.state.connectionString}
          consumerGroup={this.state.consumerGroup}

	  phoneNumber={this.state.phoneNumber}

          refreshResult={this.state.refreshResult}
        />
      </div>
    );
  }
}

export default Monitor;
