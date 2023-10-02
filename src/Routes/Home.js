import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Destination from "../components/Destination"
import Trip from "../components/Trip"
import Footer from "../components/Footer"
function Home(){
    return(
        <>
        <div className="back">
           <Navbar/>
            <Hero cname="hero"
            //  image=""
             sname="25K+"
             title="STUDENTS TRUST US"
             text="Every day brings with it a fresh set of learning possibilities."
             buttontext="join Us"
             btnclass="show"
            />
            </div>
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    )
}
export default Home