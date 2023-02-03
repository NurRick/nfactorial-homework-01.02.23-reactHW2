import './App.css';
import './4-th.css';
import image_2 from "./assets/image 2.png";
import upward from "./assets/Upward Arrow.png";


function FourthContent() {
    return (
      <div className="FourthContent">
        <div className='FourthContentImg'>
            <img className="image_2" src={image_2}/>
        </div>
        <div className='FourthContentText'>
            <h1>Upload your CV</h1>
            <p>The best tool to start career jorney with. Get connected with the best companies - just share your CV to get started.</p>
            <button class="upload-button">
                <img  className="upwardImg" src={upward}/>
                <p>Upload</p>
            </button>
        </div>
      </div>
    );
  }
  
  export default FourthContent;