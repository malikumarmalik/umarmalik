import React from "react";

const Nav = (props) =>{
    let res =props.data[0].nav_link.map((item,index)=>{
        return(
            <div key= {index} >
                <li className="nav-item active ml-4">
              <a className="nav-link text-white" id="fong" href="#"> {item.link} <span className="sr-only">(current)</span></a>
            </li>
            </div>
        )
    });
    return(
        <div className="mnav" id="backimg">
          <div><img src="./img/logo.png" alt=""/></div>
          <div className="container  text-center">
            <hr className="bg44"/>
            <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand  ml-5 font-weight-bold" href="#"> </a>
        <button className="navbar-toggler bg-danger text-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse mar " id="navbarNav">
          <ul className="navbar-nav ulh pl-4">
              {res}
          </ul>
        </div>
      </nav>
      <hr className="bg44"/>

      </div>
      <div className="container">
        <br/>
      <div className="text-white text-left">
        <h6>WIDE OPTIONS OF CHOICE</h6>
        <h1 className="display-3 font-weight-bold">Delicious Recipes</h1>
        <p>inappropriate behavior is often laughed off as “boys will be boys,” women <br/> face higher conduct standards especially in the workplace. That’s <br/> why it’s crucial that, as women.</p>
        <br/>
        <a href="#" class="primary-btn text-uppercase pt-2 pb-2 pl-2 pr-2 text-white" id="bht">Check Our Menu</a>

      </div>
      </div>
        </div>
    )
}

export default Nav;