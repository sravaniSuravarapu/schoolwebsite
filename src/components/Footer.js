import "./Footerstyles.css"


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
function Footer(){
    return(
        <>
        <div className="footer">
            <div className="top">
                <div >
                    <h1 className="sub">tricy</h1>
                    <p>choose your favourite Destination</p>
                </div>
                <div>
                    <a href="/">
                    <i class="fa-brands fa-square-facebook"></i>
                    </a>
                    <a href="/">
                    <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="/">
                    <i class="fa-brands fa-square-behance"></i>
                    </a>
                    <a href="/">
                    <i class="fa-brands fa-square-twitter"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>project</h4>
                    <a href="/">changeLog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">AII versions</a>
                </div>
                <div>
                    <h4>community</h4>
                    <a href="/">changeLog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">AII versions</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">changeLog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">AII versions</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">changeLog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">AII versions</a>
                </div>
            </div>
        </div>
        </>

    )
}
export default Footer