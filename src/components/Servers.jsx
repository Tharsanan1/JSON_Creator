import React, { Component } from "react";
import Managers from "./Hosts";
import Workers from "./Hosts";
class Servers extends Component {
    constructor(props) {
        super(props);
        this.managersDataRecieved = this.managersDataRecieved.bind(this);
        this.workersDataRecieved = this.workersDataRecieved.bind(this);
        this.state = {
            managerData: [],
            workerData: [],
            jsonText: ""
        }
    }

    managersDataRecieved(data) {
        this.setState({
            managerData: data
        }, () => {
            this.setState({
                jsonText: JSON.stringify({
                    servers: {
                        managers: this.state.managerData,
                        workers: this.state.workersData
                    }
                }, null, "\t")
            });
        });
    }

    workersDataRecieved(data) {
        this.setState({
            workerData: data
        }, () => {
            this.setState({
                jsonText: JSON.stringify({
                    servers: {
                        managers: this.state.managerData,
                        workers: this.state.workerData
                    }
                }, null, "\t")
            });
        });
    }

    render() {
        return (
            <div style={{display:"flex", flexDirection:"row", flex:1}}>
                <div style = {{flex:2, marginRight:"20px"}}>
                    <Managers sendMyData={this.managersDataRecieved} name={"Manager"} />
                    <div style={{ margin: "20px" }}></div>
                    <Workers sendMyData={this.workersDataRecieved} name={"Worker"} />
                </div>
                <div style = {{flex:2}}>
                    <textarea class="form-control" rows="5" id="comment" value={this.state.jsonText} style={{height:"800px"}}></textarea>
                    <div style={{ margin: "20px" }}></div>
                    <button type="button" className="btn btn-secondary" onClick={() => {window.prompt("Copy to clipboard: Ctrl+C, Enter", this.state.jsonText);}}>Copy JSON</button>
                </div>
            </div>
        );
    }
}

export default Servers;