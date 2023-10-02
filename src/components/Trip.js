import "./Tripstyles.css"
import TripData from "./TripData"
import Om from "./Om.jpg"
import pic1 from "./pic1.jpg"
import pic2 from "./pic2.jpg"
import pic4 from "./pic4.jpg"
function Trip(){
    return(
     <>
        <div className="trip">
            <h1>Recent </h1>
            <h3>you can discover unique destinations</h3>
            <div className="tripcard">
                <TripData
                    imag={pic1}
                    heading="card"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                     dummy text ever since"
                />
                <TripData
                    imag={pic2}
                    heading="card"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                     dummy text ever since"
                />
                <TripData
                    imag={pic4}
                    heading="card"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                     dummy text ever since"
                />
            </div>
        </div>
     </>
    )
}
export default Trip