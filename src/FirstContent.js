import './App.css';
import './1-st.css';
import img_1 from "./assets/image 1.png";

function FirstContent() {
    return (
      <div className="FirstContent">
          <div className="FirstContent-text">
            <h1>Get hired for your skills, not experience</h1>
            <p>The best tool to start your career journey with. Get connected with the best companies - just share your CV to get started.</p>
            <div className="FirstContent-button">
              <button className="FirstContent-buttonBT">
                <p>How It Works?</p>
              </button>
            </div>
          </div>
          <div className="FirstContent-image">
            <img className='FirstContent-imageIMG' alt="image 1" src={img_1}/>
          </div>
      </div>
    );
  }
  
  export default FirstContent;
  