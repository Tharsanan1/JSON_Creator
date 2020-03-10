import React, { Component } from "react";
import Button from '@material-ui/core/Button';
class Host extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.id,
            hostName : "",
            userName : ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event, inputName){
        if(inputName === "hostName"){
            this.setState({
                hostName : event.target.value
            }, () => {this.props.sendManager(this.state)});
        }
        if(inputName === "userName"){
            this.setState({
                userName : event.target.value
            }, () => {this.props.sendManager(this.state)});
        }
    }

    

    render() {
        return (
            <div className="card" style = {{margin:"20px", backgroundColor:"#dfe8f7"}}>
                <div className="card-body">
                    <div style={{marginBottom:"20px"}}>
                        <label htmlFor="hostName">Host Name</label>
                        <input className="form-control" id="hostNameTextInput" value = {this.state.hostName} onChange = {(e) => this.handleInputChange(e, "hostName")}/>
                    </div>
                    <div style={{marginBottom:"20px"}}>
                        <label htmlFor="hostUser">User Name</label>
                        <input className="form-control" id="hostUserTextInput" value = {this.state.userName} onChange = {(e) => this.handleInputChange(e, "userName")}/>
                    </div>
                    <button type="button" className="btn btn-danger" onClick={() => this.props.deleteMe(this.state.id)}>Delete</button>
                </div>
            </div>

        );
    }
}

export default Host;