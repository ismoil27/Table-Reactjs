import React, {Component} from "react";
import { student } from "./mock";
import '../style.css'




export default class Table extends Component {
    constructor (props){
        super(props);
        this.state = {
            data: student,
            name: '',
            status: '',
            option: 'id'

        }
    }

    render(){
        const onDelete = (id) => {
            // console.log(id);
            let res = this.state.data.filter((value) => value.id !== id);
            this.setState({data: res})
        }
            const onFilter = (e) => {
                let filter = student.filter(value => 
                    String(value[this.state.option]).toLowerCase().includes(e.target.value.toLowerCase()))
                this.setState({data: filter})
            }
            const onAdd = e => {
                const {name, value} = e.target;
                this.setState({[name]: value})
            }

            const onSave = e => {
                const newUser = {id: Date.now(), name: this.state.name, status: this.state.status}
                this.setState({
                    data: [...this.state.data, newUser],
                })
            }  

            const onSelectValue = e => {
                this.setState({option: e.target.value})
            }

        return (
            <div>
                <select name="selection" id="" onChange={onSelectValue}>
                <option value="id">ID</option>
                <option value="status">Status</option>
                <option value="name">Name</option>
                </select>
                <input type="text" onChange={onFilter} />
                <table border={1} >
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Status</th>
                        <th>Age</th>
                        <th className="email--table">Email</th>
                        <th>Address</th>
                        <th>Action</th>

                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((value) =>{
                                return(
                                <tr key={value.id}>
                                   <th>{value.id}</th>
                                   <td>{value.name}</td>
                                   <td>{value.surname}</td>
                                   <td>{value.status}</td>
                                   <td>{value.age}</td>
                                   <td>{value.email}</td>
                                   <td>{value.address}</td>
                                   <td className="action--table">
                                       <button onClick={() => onDelete(value.id)} >Delete</button>
                                       <button>Edit</button>
                                    </td>
                               </tr>
                                ); 
                                                  
                        })}
                    </tbody>
                </table>
                <input onChange={onAdd}  name="name" type="text"  placeholder="name"/>
                <input onChange={onAdd}  name="status" type="text"  placeholder="status"/>
                <button onClick={onSave} >Add</button>
            </div>
        )
    }
}