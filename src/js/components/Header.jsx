import React from "react";

const Header =(props)=>{
 
    return(
      <div className="section " >
       <div className="container">
         <div className="row">
           <div className="col-sm-6 mt-5 pt-5">
             <br/>
             <h2>About Our Story</h2>
             <p className="pt-2 text-muted">Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             <br/>
           <a href="#" class="primary-btn text-uppercase pt-2 pb-2 pl-3 pr-3 text-white" id="bht">VIEW FULL MENU</a>

           </div>
           <div className="col-sm-6 mt-4 pt-4">
             <img className="img-fluid" src="./img/about-img.jpg " alt=""/>
           </div>
         </div>
       </div>
       <div className="bg-light text-center pt-5 mt-5">
         <h1>What kind of Foods we serve for you</h1>
         <p className="text-muted">Who are in extremely love with eco friendly system.</p>
         <br/><br/>
       </div>
       <div class="container">
              <div class="row">
                <div class="col-xs-12 ">
                  <nav className="shadow">
                    <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                      <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">All Menu</a>
                      <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Breakfast</a>
                      <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Lunch</a>
                      <a class="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Dinner</a>
                      <a class="nav-item nav-link" id="nav-bb-tab" data-toggle="tab" href="#nav-bb" role="tab" aria-controls="nav-bb" aria-selected="false">Budget</a>
                    </div>
                  </nav>
                  <br/><br/>
                  <div class="tab-content py-3 bg-light px-3 px-sm-0" id="nav-tabContent">
                    <div class="tab-pane fade show bg-light active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className="row">
                      <div className="col-sm-6 shadow pt-5 pl-5">
                        <h6>Cappuccion &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger ml-5 pl-5">$49</span></h6>
                        <p className="text-muted">Usage of the Internet is becoming more common due to rapid advance.</p>
                      </div>
                      <div className="col-sm-5 ml-5  shadow pt-5 pl-5">
                        <h6>Americano &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger ml-5 pl-5">$49</span></h6>
                        <p className="text-muted">Usage of the Internet is becoming more common due to rapid advance.</p>
                      </div>
                      <div className="col-sm-6  mt-5 shadow pt-5 pl-5">
                        <h6>Cappuccion &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger ml-5 pl-5">$49</span></h6>
                        <p className="text-muted">Usage of the Internet is becoming more common due to rapid advance.</p>
                      </div>
                      <div className="col-sm-5 ml-5 mt-5 shadow pt-5 pl-5">
                        <h6>Americano &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger ml-5 pl-5">$49</span></h6>
                        <p className="text-muted">Usage of the Internet is becoming more common due to rapid advance.</p>
                      </div><div className="col-sm-6 mt-5 shadow pt-5 pl-5">
                        <h6>Cappuccion &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger ml-5 pl-5">$49</span></h6>
                        <p className="text-muted">Usage of the Internet is becoming more common due to rapid advance.</p>
                      </div>
                      <div className="col-sm-5 ml-5 mt-5 shadow pt-5 pl-5">
                        <h6>Americano &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger ml-5 pl-5">$49</span></h6>
                        <p className="text-muted">Usage of the Internet is becoming more common due to rapid advance.</p>
                      </div>
                      
                     </div>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div className="row">
                    <div className="col-sm-6 shadow pt-5 pl-5">
                        <h6>Cappuccion &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger ml-5 pl-5">$49</span></h6>
                        <p className="text-muted">Usage of the Internet is becoming more common due to rapid advance.</p>
                      </div>
                      <div className="col-sm-5 ml-5 shadow pt-5 pl-5">
                        <h6>Americano &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger ml-5 pl-5">$49</span></h6>
                        <p className="text-muted">Usage of the Internet is becoming more common due to rapid advance.</p>
                      </div>
                    </div>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                      <div className="row">
                      <div className="col-sm-6 shadow pt-5 pl-5">
                        <h6>Cappuccion &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger ml-5 pl-5">$49</span></h6>
                        <p className="text-muted">Usage of the Internet is becoming more common due to rapid advance.</p>
                      </div>
                      <div className="col-sm-5 ml-5 shadow pt-5 pl-5">
                        <h6>Americano &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger ml-5 pl-5">$49</span></h6>
                        <p className="text-muted">Usage of the Internet is becoming more common due to rapid advance.</p>
                      </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                     <div className="row">
                     <div className="col-sm-6 shadow pt-5 pl-5">
                        <h6>Cappuccion &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger ml-5 pl-5">$49</span></h6>
                        <p className="text-muted">Usage of the Internet is becoming more common due to rapid advance.</p>
                      </div>
                      <div className="col-sm-5 ml-5 shadow pt-5 pl-5">
                        <h6>Americano &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger ml-5 pl-5">$49</span></h6>
                        <p className="text-muted">Usage of the Internet is becoming more common due to rapid advance.</p>
                      </div>
                     </div>
                    </div>
                    <div class="tab-pane fade" id="nav-bb" role="tabpanel" aria-labelledby="nav-about-tab">
                    <div className="row">
                    <div className="col-sm-6 shadow pt-5 pl-5">
                        <h6>Cappuccion &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger ml-5 pl-5">$49</span></h6>
                        <p className="text-muted">Usage of the Internet is becoming more common due to rapid advance.</p>
                      </div>
                      <div className="col-sm-6 shadow pt-5 pl-5">
                        <h6>Cappuccion &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger ml-5 pl-5">$49</span></h6>
                        <p className="text-muted">Usage of the Internet is becoming more common due to rapid advance.</p>
                      </div>
                      <div className="col-sm-6 shadow pt-5 pl-5">
                        <h6>Cappuccion &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-danger ml-5 pl-5">$49</span></h6>
                        <p className="text-muted">Usage of the Internet is becoming more common due to rapid advance.</p>
                      </div>
                     
                    </div>
                    </div>
                  </div>
                
                </div>
              </div>
        </div>

        <div className="w-100">
          <div id="bgsimg">
            <div className="container">

           
            
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6 ">
          <h1 className="text-white text-left mt-5 pt-5 ">Reserve Your Seats
            to Confirm if You Come
            with Your Family</h1>
          <p className="text-white text-left pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
          </p>
        </div>
        <div className="col-lg-5  pt-5 bg-white">
          <br/>
          <h1>BOOK Your EVENT</h1>
          <br/><br/>
        <input type="text" className="pl-5 pr-5 w-75 pt-1 pb-1" placeholder="Your Name" />
        
        <input type="text" className="pl-5 pr-5 w-75 mt-2 pt-1 pb-1" placeholder="Your Name" />
        <input type="text" className="pl-5 pr-5 w-75 mt-2 pt-1 pb-1" placeholder=" Your Email Address" />
        <input type="text" className="pl-5 pr-5 w-75 mt-2 pt-1 pb-1" placeholder=" Phone Number" />
        <div className="form-group mt-2
         w-75  ml-5 ">

        <select className="form-control pl-5 ml-2" id="exampleFormControlSelect1">
          <option>Select Event</option>
          <option>Event One</option>
          <option>Event Two</option>
          <option>Event Three</option>
          <option>Event Four</option>
        </select>
      </div>
      <br/><br/>
     
      <a href="#" class="primary-btn text-uppercase pt-2 pb-2 pl-2 pr-2 text-white" id="bht">Make Reservation</a>

      <br/><br/>
      <br/><br/>
        </div>

      </div>
          </div>
          </div>
        </div>
      </div>
    )

}
export default Header
