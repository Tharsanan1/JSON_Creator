import React, { Component } from "react";
import Managers from "./Managers";
import Workers from "./Workers";
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
                })
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
                })
            });
        });
    }

    render(){
        return(
            <div>
                <Managers sendMyData = {this.managersDataRecieved}/>
                <Workers sendMyData = {this.workersDataRecieved}/>
                <div><textarea class="form-control" rows="5" id="comment"  value={this.state.jsonText}></textarea></div>
            </div>
        );
    }
}

export default Servers;