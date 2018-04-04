import React, { Component } from 'react';
import './MonitorResult.css';

class MonitorResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.refreshResult === true) {
        this.monitorD2CMessage();
    }
  }

  monitorD2CMessage() {
    if (!this.props.consumerGroup || !this.props.connectionString || !this.props.phoneNumber) {
      this.setState({
        result: 'Input could not be empty.'
      });
      return;
    }
    if (typeof (EventSource) === "undefined") {
      this.setState({
        result: 'Currently, the monitor function does not support your browser.\nPlease use Chrome, Firefox, Opera or Safari.\nThe support for IE/Edge is coming soon.'
      })
      return;
    }
    try {
      // eslint-disable-next-line
      ga('send', 'event', 'Monitor', 'start');
    }
    catch (e) {
    }
    var source = new EventSource(`//azure-iot-web-api.azurewebsites.net/message/monitor?consumerGroup=${this.props.consumerGroup}&connectionString=${encodeURIComponent(this.props.connectionString)}`);
    source.onmessage = (event) => {
      		console.log(event.data)
      		this.setState({
        		result: this.state.result + '\n' + event.data
      		})

		if (event.data.startsWith("{"))  {
			var obj =  JSON.parse(event.data)
			window.emailjs.send("gmail", "picloud", {"to_email": `${this.props.phoneNumber}@tmomail.net`,"from_name":"PiInTheClouds","to_name":"Andrew","device_id": `${obj.deviceId}`,"timestamp": `${obj.Timestamp}`,"on_or_off": `${obj.led}`})
			this.setState({
				result: this.state.result +  "\nA message has been sent to your phone!\n"
			})
		}
	
    };
  }

  render() {
    return (
      <div className="MonitorResult">
        {this.state.result &&
          <pre className="ResultArea">{this.state.result}</pre>
        }
      </div>
    );
  }
}

export default MonitorResult;

