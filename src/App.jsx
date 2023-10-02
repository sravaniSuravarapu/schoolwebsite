import {Route,Routes} from "react-router-dom"
import "./index.css"
import Navbar from "./components/Navbar"
import Home from "./Routes/Home"
import Service from "./Routes/Service"
import Contact from "./Routes/Contact"
import About from "./Routes/About"

export default function App(){
    return(
        <>
            <div className="App">
               <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Service/>}/>
                <Route path="/contactss" element={<Contact/>}/>
                <Route path="/" element={<Home/>}/>
               </Routes>
            </div>
            
        </>
    )
}