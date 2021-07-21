import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Nav from "./Nav"

class UserDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isTrue: false
        }
    }
    componentDidMount() {
        fetch("https://reqres.in/api/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        data: result.data
                    })
                })
            .catch(err => {
                console.log("error", err)
            })
    }

    handleClick = () => {
        this.setState({ isTrue: true })
    }

    render() {
        var { data } = this.state
        console.log("data", data, "state", this.props.location)
        // if(!this.state.isTrue){
        //     return <Redirect to={"/userDetails/"+this.props.location}/>
        // }
        return (
            <div>
                <Nav isTrue={this.state.isTrue} />
                <table className="table table-condensed table-striped"
                    style={{ border: "5px solid black", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, id) => (
                            <tr key={id}  >
                                <td>{id}</td>
                                <td><Link to={{ pathname: "/userDetails/" + id, state1: item, isTrue: true }} onClick={this.handleClick}>
                                    <img src={item.avatar} alt="Profile" style={{ borderRadius: "50%" }} /></Link></td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        )
    }

}
export default UserDetails;