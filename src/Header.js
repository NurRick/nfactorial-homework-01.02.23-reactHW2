import './App.css';
import img from "./assets/magnifier_1.png";

function Header() {
  return (
    <div className="Header">
        <div className='HeaderLogo'>
            <img className='HeaderLogoImage' alt="magnifier" src={img}/>
            <p>JumysTap</p>
        </div>
        <div className='HeaderButtons'>
            <button className='HeaderButtonsButton'>Home</button>
            <button className='HeaderButtonsButton'>About us</button>
            <button className='HeaderButtonsButton'>How it works</button>
            <button className='HeaderButtonsButton2'>Get Started</button>
        </div>
        
    </div>
  );
}

export default Header;
