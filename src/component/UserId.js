import React, {Component} from "react";
import Nav from "./Nav";
// appliying materialUI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

class UserId extends Component{
    render() {
        const {state1,isTrue}=this.props.location
        {console.log("true",this.props.location.isTrue)}
        if(!isTrue){
            return this.props.history.push("/userDetails/")
        }
        return (
            <div>
                <Nav isTrue={isTrue}/>
                
            {/* <table  className="table table-condensed table-striped" style={{border:"5px solid black",borderCollapse: "collapse"}}>
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
                <td>{state1.id-1}</td>
                <td><img src={state1.avatar} alt="Profile" style={{borderRadius:"50%"}}/></td>
                <td>{state1.first_name}</td>
                <td>{state1.last_name}</td>
                <td>{state1.email}</td>    
            </tr>    
      </tbody>
            </table>  */}
<div className="container" style={{display:"flex",
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
        
      </Card></div>
        </div>)}}
                


export default UserId