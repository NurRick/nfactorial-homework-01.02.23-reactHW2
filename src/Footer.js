import './App.css';
import label from "./assets/label-text.png";
import twitter from "./assets/Twitter.png";
import insta from "./assets/Instagram.png";



function Footer() {
    return (
      <div className="Footer">
        <div className='FooterDivs'>
            <div className='FooterButtons'>
                <button class="homeButton">
                    <p>Home</p>
                </button>
                <button class="aboutUsButton">
                    <p>About us</p>
                </button>
                <button class="howItButton">
                    <p>How it works</p>
                </button>
                <button>
                    <img src={twitter}/>
                </button>
                <button >
                <img src={insta}/>
                </button>
            </div>
            <div class="last-text">
                <p>Credits: photos from <a href="http://ww25.upsplash.com">Upsplash.com</a>, icons from <a href="https://icons8.ru/">Icons8</a>, graphics from <a href="https://craftwork.design/">craftwork.design</a>, font Kanit from <a href="https://fonts.google.com/">fonts.google</a>.</p>
            </div>
        </div>
        <div class="nFactlorial">
            <img className="label" src={label}/>
        </div>
      
      </div>
    );
  }
  
  export default Footer;