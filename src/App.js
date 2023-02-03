import './App.css';
import Header from './Header';
import FirstContent from './FirstContent';
import SecondContent from './SecondContent';
import ThirdContent from './ThirdContent';
import FourthContent from './FourthContent';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className='AppDiv'>
        <Header/>
        <FirstContent/>
        <SecondContent/>
        <ThirdContent/>
        <FourthContent/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
