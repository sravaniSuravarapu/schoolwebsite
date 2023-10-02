import {Component} from "react"
import "./Navbarstyels.css"
import {Menuitems} from "./Menuitems"
import { Link } from "react-router-dom"

class Navbar extends Component{
    state ={
        clicked:false
    }
    
    clickEvent=()=>{
        this.setState({
            clicked:!this.state.clicked
        })
    }
    
    render(){
        return(
           <div className="nav">
            <nav className="navbaritems">
                <h1 className="navbar_logo">Tricky</h1>
                <div className="menu-icons" onClick={this.clickEvent}>
                <i className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
                {
                    Menuitems.map((item,index)=>{
                        return (
                            <li><Link className={item.cls_name}  to={item.url}> {item.title}</Link></li>
                        )
                    })
                    
                }
               <button>signUp</button>
                   
                </ul>
            </nav>
            </div>
        )
    }
}

export default Navbar