import React from "react";
const Footer =()=>{
    return(
        <div>
           <div className="pt-5 pb-4 bg-dark text-white d-flex justify-content-around justify-content-center align-items-center ">
            <h6>© 2019 My School. All Rights Reserved | Design by JUNAID ANWAR</h6>
            <div className="d-flex ">
               
                    <div className="border border-white ml-3 d-flex align-items-center justify-content-center" id="foog">
                <i class="fab fa-facebook-f"></i>
                </div>
                <div className="border border-white ml-3 d-flex align-items-center justify-content-center" id="foog">
                <i class="fab fa-google-plus-g"></i>
                </div> <div className="border border-white ml-3 d-flex align-items-center justify-content-center" id="foog">
                <i class="fab fa-twitter"></i>
                </div> <div className="border border-white ml-3 d-flex align-items-center justify-content-center" id="foog">
                <i class="fab fa-dribbble"></i>
                </div>
              
                </div>
            </div>
        </div>
    )
}
export default Footer;