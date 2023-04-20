import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    
    <nav className='header'>   {/* top navigation bar*/}
        <Link to = "/"> {/*linked the logo to homepage*/}
        <img className = "header_logo"
            src = "https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817"
            alt = "amazon-logo"/>
        </Link>

        {/* Search box */}
        <input type = "text" className='header_searchBar'/>
        <SearchIcon className = 'header_searchIcon'/>

        {/* 3 links to perform different functions */}
        <div className='header_nav'>
            <Link to = "/login" className='header_Link'>
                <div className='header_options'>
                <span className = 'line1'> Hello </span>
                <span className = 'line2'> Sign in</span>
                </div>
            </Link>

            <Link to = "/" className='header_Link'>
                <div className='header_options'>
                <span className = 'line1'> Returns</span>
                <span className = 'line2'>  & orders</span>
                </div>
            </Link>

            <Link to = "/" className='header_Link'>
                <div className='header_options'>
                <span className = 'line1'> Your</span>
                <span className = 'line2'> Prime</span>
                </div>
            </Link>
        </div>

    </nav>
  )
}

export default Header