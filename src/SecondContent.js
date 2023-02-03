import './App.css';
import './2-nd.css';
import CountContent from './CountContent';


function SecondContent() {
    return (
      <div className="SecondContent">
        <p>Loren ipsum Description Text</p>
        <h1>How It Works?</h1>
        <div className='CountCont'>
          <CountContent/>
        </div>
      </div>
    );
  }
  
  export default SecondContent;