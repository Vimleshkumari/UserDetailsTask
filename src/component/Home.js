import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <Fragment>
            <div className="container bg-secondary " style={{paddingTop:"18%",paddingBottom:"15%"}}>
            <div className="col-md-4 offset-4 ">
            <h2>Welcome to Home Page</h2>
            <p>This is Assigment</p>
            <ul>
                <li>
                    <Link to="/userDetails">Task1</Link>
                    </li>
                <li>
                    <Link to="/form">Task2</Link>
                    </li>
            </ul>
            </div>
            </div>
        </Fragment>
    )
}