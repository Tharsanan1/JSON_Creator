import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Host from "./Host";
class Workers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hosts: [], //<Host key = {1}/>, <Host key = {2}/>
            count: 1,
            hostData: []
        };
        this.addHost = this.addHost.bind(this);
        this.dataReceivedFromHost = this.dataReceivedFromHost.bind(this);
        this.deleteTheHost = this.deleteTheHost.bind(this);
    }

    dataReceivedFromHost(hostData) {
        let hostDataValues = this.state.hostData;
        hostDataValues = hostDataValues.filter((el) => {
            return (el.id != hostData.id);
        });
        hostDataValues.push(hostData);
        this.setState({
            hostData: hostDataValues
        }, () => { this.props.sendMyData(this.state.hostData); });
    }

    addHost() {
        let list = this.state.hosts;
        list.push(<Host key={this.state.count} id={this.state.count} sendManager={this.dataReceivedFromHost} deleteMe={this.deleteTheHost} />)
        this.setState({
            hosts: list.slice(),
            count: this.state.count + 1
        }, () => { this.props.sendMyData(this.state.hostData); });
    }

    deleteTheHost(id) {
        let hostDataValues = this.state.hostData;
        hostDataValues = hostDataValues.filter((el) => {
            return (el.id != id);
        });
        let hostJsxs = this.state.hosts;
        hostJsxs = hostJsxs.filter((el) => {
            return (el.key != id);
        });
        this.setState({
            hostData: hostDataValues,
            hosts: hostJsxs.slice()
        }, () => { this.props.sendMyData(this.state.hostData); });
    }


    render() {
        return (
            <div style={{ borderStyle: "solid", borderColor: "blue" }}>
                <div style={{ margin: "20px" }}>
                    <div><h2>Workers</h2></div>
                    {this.state.hosts}
                    <Button variant="contained" color="primary" style={{ marginTop: "20px" }} onClick={this.addHost} >Add Host</Button>
                </div>
            </div>
        );
    }
}

export default Workers;