import { header_logo } from "../utilities/constants";
const Header = () => {
    return (
        <div className='header'>
            <div><img className='header-logo' alt="logo" src={header_logo}></img></div>
            <div className='header-items'>
                <ul className='header-items-pages'>
                    <li className='home'>Home</li>
                    <li className='about'>About</li>
                    <li className='contact'>Contact Us</li>
                    <li className='cart'>Cart</li>
                </ul>
            </div>
        </div>
        
    );
}

export default Header;
