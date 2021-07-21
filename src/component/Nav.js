import React from "react"
import { Component } from "react"
import { NavLink } from "react-router-dom"
class Nav extends Component {
    render() {
        const isTrue = this.props.isTrue

        { console.log("true in nav", this.props.isTrue) }
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top "
                    style={{ opacity: 0.9 }}>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><NavLink activeStyle={{ color: "yellow" }} className="nav-link" to='/userDetails' activeClassName='nav-link ' >User List</NavLink></li>
                            {(isTrue) ?
                                <li className="nav-item "> <NavLink className="nav-link disabled" to='/userDetails/:Id' style={{ color: "yellow" }}>User Profile</NavLink></li>
                                :
                                <li className="nav-item "> <NavLink className="nav-link disabled" to='/userDetails/:Id' >User Profile</NavLink></li>
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Nav