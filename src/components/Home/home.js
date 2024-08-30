import React from 'react';
import './home.css';
import { CiSearch } from "react-icons/ci";

const Home = () => {
    return (
        <div className='background'>
            <img src="https://static-assets.amberstudent.com/amber-user-website/amber-website-prod-197/assets/images/app/assets/1440%20-%20web-min.png?q=90" alt="could not load"/>
            <div className='navbar'>
                <img src="https://prod-static-assets.amberstudent.com/images/logo/amber-logo-light.svg" alt="no logo"/>
                <div className='right-nav'>
                    <div>Download App</div>
                    <div>Support</div>
                    <div>Shortlist</div>
                    <div>Login</div>
                    <div>Menu</div>
                </div>
            </div>
            <div className='text-name'>
                <span>Home Away from Home!</span>
            </div>
            <div className='sub-head'><span className='book'>Book student accommodations near top universities and cities across the globe.</span>
                <div className='assurence'><span>Verified</span> <span>24x7 Assistance</span><span>Lowest Price Guidelines</span></div>
            </div>
            <div className='search-bar'>
                <input type='text' name="searchbar" placeholder="Search by City,University or Property"/>
                <div className='search-icon'><CiSearch size={40} style={{cursor:"pointer"}}/></div>
            </div>
        </div>
    );
}
export default Home;