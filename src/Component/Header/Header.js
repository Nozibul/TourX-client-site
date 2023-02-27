import React,{ useState , useEffect } from 'react';
import "../../asset/css/custom.css"
import { Container, Nav, Navbar, NavDropdown ,Dropdown} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import { FaSearch ,FaUserAlt } from "react-icons/fa";

import whiteLogo from "../../asset/image/logo.png"
import blueLogo from "../../asset/image/header-logo.png"

const Header = ({title}) => {
 const [navbar, setNavbar] = useState([whiteLogo]);
 const [navBg, setNavBg] = useState(false);
 const [navMenu, setNavMenu] = useState(false);


 const [show, setShow] = useState(false);
 const showDropdown = (e)=>{
     setShow(!show);
 }
 const hideDropdown = e => {
     setShow(false);
 }


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
         <title>{title} - TourX</title>
          <Navbar fixed="top" variant="dark" className={navBg ? "nav-bgScroll" : "nav-bg"} collapseOnSelect expand="lg" >
             <Container> 
              <Navbar.Brand> <NavLink to="/" > 
                          <img className="menu-logo" src={navbar} alt="" />  
              </NavLink></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">

                  <Nav className="m-auto">
                      <Nav.Link> <NavLink style={navLinkStyle} className={navMenu ? "menu-itemScroll" : "menu-item"}  to="/">Home</NavLink></Nav.Link>
                      <Nav.Link> <NavLink style={navLinkStyle} className={navMenu ? "menu-itemScroll" : "menu-item"}  to="/destination">Destination</NavLink></Nav.Link>
                      <Nav.Link> <NavLink style={navLinkStyle} className={navMenu ? "menu-itemScroll" : "menu-item"}  to="/package">Tour Package</NavLink></Nav.Link>
                      <Nav.Link> <NavLink style={navLinkStyle} className={navMenu ? "menu-itemScroll" : "menu-item"}  to="/blog">Blogs</NavLink></Nav.Link>

                      <Dropdown 
                       show={show}
                       onMouseEnter={showDropdown} 
                       onMouseLeave={hideDropdown}>
                        <Dropdown.Toggle
                          variant="white"                
                         className={navMenu ? "menu-itemScroll" : "menu-item"}>pages
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item to="/contact">Action</Dropdown.Item>  <NavDropdown.Divider />
                          <Dropdown.Item to="#">Another</Dropdown.Item> <NavDropdown.Divider />
                          <Dropdown.Item to="#">Something</Dropdown.Item> <NavDropdown.Divider />
                          <Dropdown.Item to="#">Something</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>   
                    
                      <Nav.Link> <NavLink style={navLinkStyle} className={navMenu ? "menu-itemScroll" : "menu-item"}  to="/about">About</NavLink> </Nav.Link>
                      <Nav.Link> <NavLink style={navLinkStyle} className={navMenu ? "menu-itemScroll" : "menu-item"}  to="/contact">Contact</NavLink> </Nav.Link>
               
                  </Nav>
               </Navbar.Collapse>
              
               <div className='search-box'>
                   <input className='search-text' required type="text" placeholder='Country Name...' />
                   <Link to="#" className="searchBtn">
                     <FaSearch className='search-icon'></FaSearch>
                   </Link>
               </div>
               <Dropdown className='user-info'>
                  <Dropdown.Toggle
                    variant="white"                
                  //  className={navMenu ? "menu-itemScroll" : "menu-item"}
                  > <FaUserAlt className='search-icon' />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="/contact">Action</Dropdown.Item>  <NavDropdown.Divider />
                    <Dropdown.Item to="#">Another</Dropdown.Item> <NavDropdown.Divider />
                    <Dropdown.Item to="#">Something</Dropdown.Item> <NavDropdown.Divider />
                    <Dropdown.Item to="#">Something</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> 
             </Container> 
           </Navbar>
        </>
    );
};

export default Header;


