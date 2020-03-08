import React, { Component } from "react";
import Form from "react-jsonschema-form";

const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        title: { type: "string", title: "Title", default: "A new task" },
        done: { type: "boolean", title: "Done?", default: false }
    }
};

class JsonForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schema: {
                "title": "Managers",
                "type": "object",
                "properties": {
                    "hosts": {
                        "title": "Hosts",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "host_name": {
                                    "type": "string",
                                    "title": "Host name : ",
                                    "description": "Enter the name of the host"
                                },
                                "ansible_become_pass": {
                                    "type": "string",
                                    "title": "Ansible password : ",
                                    "description": "Enter the password of the user"
                                },
                                "ansible_become_user": {
                                    "type": "string",
                                    "title": "Ansible user name : ",
                                    "default": "root"
                                },
                                "ansible_password": {
                                    "type": "string",
                                    "title": "Ansible password : ",
                                    "description": "Enter the npassword of the ansible"
                                },
                                "ansible_port": {
                                    "type": "string",
                                    "title": "port number : ",
                                    "description": "Enter the password of the user",
                                    "default": "22"
                                },
                                "ansible_python_interpreter": {
                                    "type": "string",
                                    "title": "Python interpreter path : ",
                                    "default": "/usr/bin/python3"
                                },
                                "private_ip": {
                                    "type": "string",
                                    "title": "Private ip : ",
                                    "description": "ex: 172.17.0.1"
                                }
                            }
                        }
                    }
                }
            },
            formData: {
                "hosts": [
                    {
                        "ansible_become_user": "false",
                        "ansible_port": "",
                        "ansible_python_interpreter": "false",
                        "private_ip": "/usr/bin/python3",
                        "host_name": "jjj",
                        "ansible_become_pass": "jjj"
                    }
                ]
            }
        }
    }

    render() {
        return (
            <Form
                schema={this.state.schema}
                formData={this.state.formData}
                onChange={log("changed")}
                onSubmit={log("submitted")}
                onError={log("errors")} />
        );
    }
}

const log = (type) => console.log.bind(console, type);

export default JsonForm;