import { Link, NavLink } from 'react-router-dom'
import { ToggleBurger } from './Animations'
import homeImg from './assets/logo.png'

//Header

export const Header = () => {
    return (
        <header id="header">
            <Link to='/home' id='home-logo'><img src={homeImg}/></Link>
            <div id='burger' onClick={ToggleBurger} className="burger-off">
                <div className='burger-line' id='line-1'></div>
                <div className='burger-line' id='line-2'></div>
                <div className='burger-line' id='line-3'></div>
            </div>
            <nav id='navbar'>
                <ul id='navlist'>{CreateNavItems}</ul>
            </nav>
        </header>
    )
}

const NavItems = ['home', 'about-us', 'our-services', 'product-range', 'contact']
const CreateNavItems = NavItems.map((item) =>
    <li key={item}>
        <NavLink to={item} className="navlink" style={({ isActive }) => {return {fontWeight: isActive ? '700' : '400'}}}>
            {item.replace('-', ' ')}
        </NavLink>
    </li>
)

//Footer

export const Footer = () => {
    return (
        <footer id="footer">
            <div id='footer-links-container'>
                <h5 id='links-title'>links</h5>
                <ul id='footer-links-list'>{CreateFooterItems}</ul>
            </div>
            <div id='footer-contact-container'>
                <h5 id='contact-title'>contact</h5>
                <ul id='contact-list'>
                    <a href='mailto:gerencia@ecoaltrading.es'>gerencia@ecoaltrading.es</a>
                    <a href="mailto:ventas@ecoaltrading.es">ventas@ecoaltrading.es</a>
                    <a href="tel:34936940232">+(34) 93 6940 232</a>
                </ul>
            </div>
            <div id='footer-copyright'>
                <p>Copyright © {currentYear} - All rights reserved</p>
            </div>
        </footer>
    )
}

const CreateFooterItems = NavItems.map((item) =>
    <li key={item}>
        <NavLink to={item} className="navlink" style={({ isActive }) => {return {fontWeight: isActive ? '700' : '400'}}}>
            {item.replace('-', ' ')}
        </NavLink>
    </li>
)

let currentYear = new Date().getFullYear()