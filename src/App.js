import React, {Component} from "react";
import Inputs from "./components/Inputs";
import Card  from "./components/card-component/Card";
import Table from "./components/Table";
// import './style.css'


export default class App extends Component {
    render(){
        return(
            <div>
                {/* <Inputs />
                <Card /> */}
                <Table />
            </div>
        )
    }
} 
