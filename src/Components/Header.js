import React from 'react'
import { Nav, Navbar, Dropdown,DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {changeCountry} from '../actions'

import { FaNewspaper } from "react-icons/fa";



// import { faCheckSquare, newspaper } from '@fortawesome/fontawesome-svg-core'


export default function Header() {

    // const country=useSelector(state=>state.country)

  

    // const handleSelect = (e) => {
    //     console.log(e)
    //     dispatch((changeCountry)=>{

    //     })
    // }
    const dispatch = useDispatch()
    return (
        
        <div>
            <Navbar bg="light" variant="light" className="my-2 p-3">

                <Link to="/" className="navbar-brand" href="#home"><FaNewspaper size={35}/>News Web</Link>
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Top Headlines</Link>
                    <Link to="/sports" className="nav-link">Sports</Link>
                    <Link to="/entertainment" className="nav-link">Entertainment</Link>
                    <Link to="/science" className="nav-link">Science</Link>
                    <Link to="/health" className="nav-link">Health</Link>
                    {/* <Link to="/business" className="nav-link">Business</Link> */}
                    <Link to="/technology" className="nav-link">Technology</Link>

                    
                </Nav>

               
                    <DropdownButton  variant="Secondary"
                        alignRight
                        title="Select Country"
                        id="dropdown-menu-align-right"
                        onSelect={(eventKey)=>dispatch(changeCountry(eventKey))}
                    >
                        <Dropdown.Item eventKey="in">India</Dropdown.Item>
                        <Dropdown.Item eventKey="us">USA</Dropdown.Item>
                        <Dropdown.Item eventKey="ca">CAN</Dropdown.Item>
                        {/* <Dropdown.Item eventKey="">AE</Dropdown.Item> */}
                    </DropdownButton>
            </Navbar>
        </div>
    )
}
