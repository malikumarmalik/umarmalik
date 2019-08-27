import React from "react"
const Gallery =()=>{
    return(
        <div>
        <div className="row">
            <div className="col-sm-12">
        <div className="section bg-light text-center">
            <h1 className="pt-5 mt-5">Food and Customer Gallery</h1>
            <p className="text-muted">Who are in extremely love with eco friendly system.</p>
            </div>
            <div className="col-sm-12 text-center">
                <img className="img-fluid" src="./img/gllre.png" alt=""/>
            </div>
        </div>
        </div>






        <div className="mt-5" id="slimg">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators " >
          <li data-target="#carouselExampleIndicators" id="vvcolo" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators"id="vvcolo" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators"id="vvcolo" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className="section container ">
                <div className="section container ">
                <div className="container pt-5 rounded-circle" >
                    <img className="rounded-circle" src="./img/user.png" alt=""/>
                    <br/>
                    <h4 className="text-center"> Hulda Sutton</h4>

                </div>
                    
                    <p className="">"
									“Accessories Here you can find the best computer accessory for your laptop, <br/> monitor, printer, scanner, speaker. Here you can find the best computer <br/> accessory for your laptop, monitor, printer, scanner, speaker.”
								
								</p>
<br/><br/>
                </div>
               
                </div>

          </div>
          <div className="carousel-item">
          <div className="section container ">
                <div className="container pt-5 rounded-circle" >
                    <img className="rounded-circle" src="./img/user.png" alt=""/>
                    <br/>
                    <h4 className="text-center"> Hulda Sutton</h4>

                </div>
                    
                    <p className="">"
									“Accessories Here you can find the best computer accessory for your laptop, <br/> monitor, printer, scanner, speaker. Here you can find the best computer <br/> accessory for your laptop, monitor, printer, scanner, speaker.”
								
								</p>
<br/><br/>
                </div>
          </div>
          <div className="carousel-item">
          <div className="section container ">
                <div className="container pt-5 rounded-circle" >
                    <img className="rounded-circle" src="./img/user.png" alt=""/>
                    <br/>
                    <h4 className="text-center"> Hulda Sutton</h4>

                </div>
                    
                    <p className="">"
									“Accessories Here you can find the best computer accessory for your laptop, <br/> monitor, printer, scanner, speaker. Here you can find the best computer <br/> accessory for your laptop, monitor, printer, scanner, speaker.”
								
								</p>
<br/><br/>
                </div>
          </div>
        </div>
       
      </div>
        </div>


        {/* blogo */}
        <div className="text-center container">
        <h1 className="pt-5 mt-5">Latest From Our Blog</h1>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua.</p>
            <div className="container ">
            <div className="container">

            <div className="row">
                <div className="col-sm">
                    <img className="img-fluid" src="./img/b1.jpg" alt=""/>
                    <p className="bg-dark text-white text-left w-50 pl-4 mt-1">10 Jan 2018</p>
                    <h6 className="text-left">Cooking Perfect Fried Rice in minutes</h6>
                    <p  className="text-left text-muted">inappropriate behavior ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className="col-sm">
                    <img className="img-fluid" src="./img/b2.jpg" alt=""/>
                    <p className="bg-dark text-white text-left w-50 pl-4 mt-1">10 Jan 2018</p>
                    <h6 className="text-left">Cooking Perfect Fried Rice in minutes</h6>
                    <p  className="text-left text-muted">inappropriate behavior ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className="col-sm">
                    <img className="img-fluid" src="./img/b3.jpg" alt=""/>
                    <p className="bg-dark text-white text-left w-50 pl-4 mt-1">10 Jan 2018</p>
                    <h6 className="text-left">Cooking Perfect Fried Rice in minutes</h6>
                    <p  className="text-left text-muted">inappropriate behavior ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className="col-sm">
                    <img className="img-fluid" src="./img/b4.jpg" alt=""/>
                    <p className="bg-dark text-white text-left w-50 pl-4 mt-1">10 Jan 2018</p>
                    <h6 className="text-left">Cooking Perfect Fried Rice in minutes</h6>
                    <p  className="text-left text-muted">inappropriate behavior ipsum dolor sit amet, consectetur.</p>
                </div>

            </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Gallery;