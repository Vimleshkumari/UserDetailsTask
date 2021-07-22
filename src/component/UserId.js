import React, { Component } from "react";
import Nav from "./Nav";
import { Card} from 'react-bootstrap';


class UserId extends Component {
    render() {
        const { state1, isTrue } = this.props.location
        // {console.log("true",this.props.location.isTrue)}
        return (
            <div className="bg-secondary">
                <Nav isTrue={isTrue} />
                <div className="container" style={{display:"flex",
          justifyContent:"center"}}>
                    <Card style={{ width: '35%' }}>
                    <Card.Title style={{alignSelf:"center"}} >User Details</Card.Title>
                        <Card.Img src={state1.avatar}   className="rounded-circle"/>
        
                        <Card.Body className="d-flex flex-column justify-content-center ">
                            <Card.Text>
                                Name: {state1.first_name} {state1.last_name}    
                            </Card.Text>
                            <Card.Text>UserID: USER0{state1.id-1}</Card.Text>
                            <Card.Text>Email: {state1.email}</Card.Text>    
                        </Card.Body>
                    </Card>
                </div>
                
            </div>)
    }
}



export default UserId