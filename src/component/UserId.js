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
                            <Card.Text>UserID: USER0{state1.id}</Card.Text>
                            <Card.Text>Email: {state1.email}</Card.Text>    
                        </Card.Body>
                    </Card>
                </div>
                {/* <table className="table table-condensed table-striped" style={{ border: "5px solid black", borderCollapse: "collapse" }}>
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
                        <tr>
                            <td>{state1.id - 1}</td>
                            <td><img src={state1.avatar} alt="Profile" style={{ borderRadius: "50%" }} /></td>
                            <td>{state1.first_name}</td>
                            <td>{state1.last_name}</td>
                            <td>{state1.email}</td>
                        </tr>
                    </tbody>
                </table> */}
                {/* <div className="container" style={{display:"flex",
          justifyContent:"center",paddingTop:"1%"}}>
<Card 
        style={{
          width: 450,
          backgroundColor: "pink",paddingTop:"1%"
        }}>

        <CardContent>
          <Typography
            style={{ fontSize: 21 ,textAlign:'center'}} 
             variant="h4" component="h4">User Profile
          </Typography>
          
          <Typography
            style={{
              marginBottom: 12,}}>
            <img src={state1.avatar} alt="Profile" style={{height: 250,
    width: '80%'}}/>
          </Typography><Typography variant="h3" component="h2">
            {state1.first_name} {state1.last_name}
          </Typography>
          <Typography variant="h4" component="h4">
            Id: {state1.id-1}
          </Typography>
          <Typography variant="h4" component="h4">
            {state1.email}
          </Typography>
        </CardContent>
        
      </Card></div> */}
            </div>)
    }
}



export default UserId