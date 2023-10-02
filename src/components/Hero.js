import "./Herostyle.css"


function Hero(props){
    return(
   <div className={props.cname}>
    {/* <img src={props.image} alt="background"/> */}
    <div className="hero-text">
         <h1>{props.sname}</h1>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnclass}>{props.buttontext}</a>
    </div>
   </div>
    )
}
export default Hero