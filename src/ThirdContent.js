import './App.css';
import './3-rd.css';
import Search from "./assets/Search.png";

function ThirdContent() {
    return (
      <div className="ThirdContent">
        <div className='ThirdContentDiv'>
            <div>
                <h1>Let`s Get Started</h1>
            </div>
            <div className='ThirdContentP'>
                <p>The best tool to start your career journey with. Get connected with the best companies — just share your CV to get started.</p>
            </div>
            <div className='inputAndButton'>
                <div className='whiteBlock'>
                    <img  className="search" src={Search} />
                    <input className='ThContInput' placeholder="Search for job by keywords" required></input>
                </div>
                <div className='ThContButton'>
                    <button className='ThContButt'>Find Job</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default ThirdContent;