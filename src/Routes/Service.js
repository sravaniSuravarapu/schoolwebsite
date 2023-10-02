import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
function Service(){
    return(
        <>
           <div className="back2">
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
        </>
    )
}
export default Service