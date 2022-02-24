import React,{ useState , useEffect } from 'react';
import "../../asset/css/custom.css"
import { Container, Nav, Navbar, } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import whiteLogo from "../../asset/image/logo.png"
import blueLogo from "../../asset/image/header-logo.png"

const Header = () => {
 const [navbar, setNavbar] = useState( [whiteLogo]);
 const [navBg, setNavBg] = useState(false);
 const [navMenu, setNavMenu] = useState(false);

 const onScroll=()=>{
   if(window.scrollY>=80){
     setNavbar([blueLogo])
     setNavBg(true)
     setNavMenu(true)
   }
   else{
    setNavbar([whiteLogo])
    setNavBg(false)
    setNavMenu(false)
   }
 }
   useEffect(()=>{
    window.addEventListener('scroll', onScroll)
     return ()=>{
      window.addEventListener('scroll', onScroll)

     }
    

   }, [])



  const navLinkStyle = ({isActive})=>{
     return {
                color: isActive ? "#daaa57" : "" ,
                borderBottom: isActive ? "2px solid #dfaa4f" : "",
                fontWeight: isActive ? "bold" : "",

            };
  }

    return (
        <>
          <Navbar fixed="top" variant="dark" className={navBg ? "nav-bgScroll" : "nav-bg"} collapseOnSelect expand="lg" >
             <Container> 
              <Navbar.Brand> <NavLink to="/" >  
                          <img className="menu-logo" src={navbar} alt="" />  
              </NavLink></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">

                  <Nav className="m-auto m-5 ">
                      <Nav.Link> <NavLink style={navLinkStyle} className={navMenu ? "menu-itemScroll" : "menu-item"}  to="/">Home</NavLink></Nav.Link>
                      <Nav.Link> <NavLink style={navLinkStyle} className={navMenu ? "menu-itemScroll" : "menu-item"}  to="/package">Tour Package</NavLink></Nav.Link>
                      <Nav.Link> <NavLink style={navLinkStyle} className={navMenu ? "menu-itemScroll" : "menu-item"}  to="/blog">Blogs</NavLink></Nav.Link>
                      <Nav.Link> <NavLink style={navLinkStyle} className={navMenu ? "menu-itemScroll" : "menu-item"}  to="/pages">Pages</NavLink> </Nav.Link>
                      <Nav.Link> <NavLink style={navLinkStyle} className={navMenu ? "menu-itemScroll" : "menu-item"}  to="/about">About</NavLink> </Nav.Link>
                      <Nav.Link> <NavLink style={navLinkStyle} className={navMenu ? "menu-itemScroll" : "menu-item"}  to="/contact">Contact</NavLink> </Nav.Link>

                  </Nav>
               </Navbar.Collapse>
             </Container> 
           </Navbar>
        </>
    );
};

export default Header;


