import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <Fragment>
            <h2>Welcome to the Home Page</h2>
            <p>This is Assigment</p>
            <ul><li><Link to="/userDetails">Task1</Link></li>
                <li><Link to="/form">Task2</Link></li>
            </ul>
        </Fragment>
    )
}