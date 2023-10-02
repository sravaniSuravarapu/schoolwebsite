import Tm from "./Stu2.jpg"
import Km from "./Stu3.jpg"
import Hm from "./Bm.png"
import Komm from "./Tm.png"
import "./Desstyles.css"
import DestinstionData from "./DestinationData"
function Destination(){
    return (
        <>
            <div className="destination">
                <h1>DESTINATIONS</h1>
                <h3>Lorem Ipsum is simply dummy text of the printing industry.</h3>

                <DestinstionData
                   clasName="first-des"
                    heading="Lorem Ipsum is simply "
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                     dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                     dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    
                    img1={Km}
                    img2={Tm}

                />

                 <DestinstionData
                   clasName="first-des-reverse"
                    heading="Lorem Ipsum is simply "
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                     dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                     dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                        
                    img1={Hm}
                    img2={ Komm }

                />


              
                
            </div>
        </>
    )
}
export default Destination