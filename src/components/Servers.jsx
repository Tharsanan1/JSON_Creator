import React, { Component } from "react";
import Managers from "./Hosts";
import Workers from "./Hosts";
class Servers extends Component {
    constructor(props){
        super(props);
        this.managersDataRecieved = this.managersDataRecieved.bind(this);
        this.workersDataRecieved = this.workersDataRecieved.bind(this);
        this.state = {
            managerData : [],
            workerData : [],
            jsonText : ""
        }
    }

    managersDataRecieved(data){
        this.setState({
            managerData : data
        }, () => {
            this.setState({
                jsonText : JSON.stringify({
                    servers : {
                        managers : this.state.managerData,
                        workers : this.state.workersData
                    }
                }, null, "\t")
            });
        });
    }

    workersDataRecieved(data){
        this.setState({
            workerData : data
        }, () => {
            this.setState({
                jsonText : JSON.stringify({
                    servers : {
                        managers : this.state.managerData,
                        workers : this.state.workerData
                    }
                }, null, "\t")
            });
        });
    }

    render(){
        return(
            <div>
                <Managers sendMyData = {this.managersDataRecieved} name = {"Manager"}/>
                <div style={{margin:"20px"}}></div>
                <Workers sendMyData = {this.workersDataRecieved} name = {"Worker"}/>
                <div style={{margin:"20px"}}></div>
                <div><textarea class="form-control" rows="5" id="comment"  value={this.state.jsonText}></textarea></div>
            </div>
        );
    }
}

export default Servers;