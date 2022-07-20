import { Link, NavLink } from 'react-router-dom'
import { ToggleBurger } from './Animations'
import homeImg from './assets/logo.png'

//Header

export const HeaderEn = () => {
    return (
        <header id="header">
            <Link to='ic-trading/en' id='home-logo'><img src={homeImg} alt="logo"/></Link>
            <div id='burger' onClick={ToggleBurger} className="burger-off">
                <div className='burger-line' id='line-1'></div>
                <div className='burger-line' id='line-2'></div>
                <div className='burger-line' id='line-3'></div>
            </div>
            <nav id='navbar'>
                <ul id='navlist'>
                    <li><NavLink to='/ic-trading/en' className="navlink" style={({ isActive }) => {return {fontWeight: isActive ? '700' : '400'}}}>home</NavLink></li>
                    <li><NavLink to='/ic-trading/en/about-us' className="navlink" style={({ isActive }) => {return {fontWeight: isActive ? '700' : '400'}}}>about us</NavLink></li>
                    <li><NavLink to='/ic-trading/en/our-services' className="navlink" style={({ isActive }) => {return {fontWeight: isActive ? '700' : '400'}}}>our services</NavLink></li>
                    <li><NavLink to='/ic-trading/en/contact' className="navlink" style={({ isActive }) => {return {fontWeight: isActive ? '700' : '400'}}}>contact</NavLink></li>
                    <li id='cambiar-idioma'><NavLink to='/ic-trading/' onClick={() => document.documentElement.lang === 'es'} className="navlink">cambiar a español</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export const HeaderEs = () => {
    return (
        <header id="header">
            <Link to='/ic-trading/' id='home-logo'><img src={homeImg} alt="logo"/></Link>
            <div id='burger' onClick={ToggleBurger} className="burger-off">
                <div className='burger-line' id='line-1'></div>
                <div className='burger-line' id='line-2'></div>
                <div className='burger-line' id='line-3'></div>
            </div>
            <nav id='navbar'>
                <ul id='navlist'>
                    <li><NavLink to='/ic-trading/' className="navlink" style={({ isActive }) => {return {fontWeight: isActive ? '700' : '400'}}}>home</NavLink></li>
                    <li><NavLink to='/ic-trading/nosotros' className="navlink" style={({ isActive }) => {return {fontWeight: isActive ? '700' : '400'}}}>nosotros</NavLink></li>
                    <li><NavLink to='/ic-trading/servicios' className="navlink" style={({ isActive }) => {return {fontWeight: isActive ? '700' : '400'}}}>servicios</NavLink></li>
                    <li><NavLink to='/ic-trading/contacto' className="navlink" style={({ isActive }) => {return {fontWeight: isActive ? '700' : '400'}}}>contacto</NavLink></li>
                    <li id='switch-lang'><NavLink to='/ic-trading/en' className="navlink">switch to english</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

//Footer

export const FooterEn = () => {
    return (
        <footer id="footer">
            <div id='footer-links-container'>
                <h5 id='links-title'>links</h5>
                <ul id='footer-links-list'>
                    <li><NavLink to="/ic-trading/en" className="navlink">home</NavLink></li>
                    <li><NavLink to="/ic-trading/about-us" className="navlink">about us</NavLink></li>
                    <li><NavLink to="/ic-trading/our-services" className="navlink">our services</NavLink></li>
                    <li><NavLink to="/ic-trading/contact" className="navlink">contact</NavLink></li>
                </ul>
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

export const FooterEs = () => {
    return (
        <footer id="footer">
            <div id='footer-links-container'>
                <h5 id='links-title'>links</h5>
                <ul id='footer-links-list'>
                    <li><NavLink to="/ic-trading/" className="navlink">home</NavLink></li>
                    <li><NavLink to="/ic-trading/nosotros" className="navlink">nosotros</NavLink></li>
                    <li><NavLink to="/ic-trading/servicios" className="navlink">servicios</NavLink></li>
                    <li><NavLink to="/ic-trading/contacto" className="navlink">contacto</NavLink></li>
                </ul>
            </div>
            <div id='footer-contact-container'>
                <h5 id='contact-title'>contacto</h5>
                <ul id='contact-list'>
                    <a href='mailto:gerencia@ecoaltrading.es'>gerencia@ecoaltrading.es</a>
                    <a href="mailto:ventas@ecoaltrading.es">ventas@ecoaltrading.es</a>
                    <a href="tel:34936940232">+(34) 93 6940 232</a>
                </ul>
            </div>
            <div id='footer-copyright'>
                <p>Copyright © {currentYear} - Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

let currentYear = new Date().getFullYear()