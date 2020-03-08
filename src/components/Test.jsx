import React from 'react';
import Button from '@material-ui/core/Button';

let jsonValues =
    [{
        name: "Name",
        value: "String",
        default: "Tharsanan"
    },
    {
        name: "Names",
        value: "List_Name",
        default: "Null"
    },
    {
        name: "Address",
        value: ["No", "Road"],
        default: "Null"
    },
    {
        name: "No",
        value: "String",
        default: "Null"
    },
    {
        name: "Road",
        value: "String",
        default: "Null"
    }];

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let divs = [];
        this.props.parentJson.value.forEach(element => {
            divs.push(<div>{element}{displayElementValue(element)}</div>);
        });
        return (
            <div style={{margin:"20px",border: '2px solid red'}}>
                {divs}
            </div>
        )
    }
}

function displayElementValue(element) {
    let elem = null;
    jsonValues.forEach(e => {
        if (e.name === element) {
            elem = e;
        }
    });
    if(!elem){
        return <div></div>;
    }
    if (typeof (elem.value) === "string") {
        if (elem.value === "String") {
            return <input type="text" name={elem.value} style={{marginLeft:"20px"}}/>;
        }
        else if (elem.value.includes("List_")) {
            return <Button variant="contained" color="primary" style={{marginLeft:"20px"}}>{elem.value.substring(5)}</Button>;
        }
    }
    else{
        return <Form parentJson = {elem}/>
    }
}

function createNewButton(name) {
    return <Button variant="contained" color="primary">{name}</Button>;
}

export default Form;