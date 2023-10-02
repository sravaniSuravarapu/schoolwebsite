import "./Desstyles.css"
import {Component} from "react"
import Tm from "./Stu2.jpg"
import Km from "./Stu3.jpg"

class DestinstionData extends Component{
    render(){
        return(
            
                <div className={this.props.clasName}>
                    <div className="des-text">
                        <h2>{this.props.heading}</h2>
                        <p>{this.props.text}</p>
                    </div>
                    <div className="images">
                        <img src={this.props.img1} className="Studenmg" alt="source"></img>
                        <img src={this.props.img2}  className="Studenmg" alt="source"></img>
                    </div>
                </div>
            
        )
    }
}

export default DestinstionData