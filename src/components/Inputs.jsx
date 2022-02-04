import React, {Component} from "react";


export default class Inputs extends Component {
    constructor(props){
        super (props)
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            job: '',
            nickname: '',
        }
    }
    
    render(){
        
        const onHandleChange = (e) => {
            const {name, value}=e.target
            this.setState({
             [name]: value
            })
        }

        return(
            <div className="inputs">
                <h1>First name: {this.state.firstName}</h1>
                <h1>Last name: {this.state.lastName}</h1>
                <h1>Password: {this.state.password}</h1>
                <h1>Job: {this.state.job}</h1>
                <h1>Nickname: {this.state.nickname}</h1>
                <input type="text"
                 placeholder="Enter your name" 
                 onChange={onHandleChange}
                 name="firstName" 
                 />
                <input type="text" 
                placeholder="Enter you surname" 
                onChange={onHandleChange}
                name="lastName" 
                />
                <input type="text" 
                placeholder="Enter you password" 
                onChange={onHandleChange}
                name="password" 
                />
                <input type="text" 
                placeholder="Enter you job" 
                onChange={onHandleChange}
                name="job" 
                />
                <input type="text" 
                placeholder="Enter you nickname" 
                onChange={onHandleChange}
                name="nickname" 
                />
            </div>
        )
    }
}