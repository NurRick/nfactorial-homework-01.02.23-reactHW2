import './App.css';
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";

function Content(props) {
    return (
        <div className='SecondContCount'>
            <div>
                <img className='SecondContent-image' alt="image" src={props.imgNumber}/>
            </div>
            <div>
                <h2>{props.title}</h2>
            </div>
            <div>
                <p>{props.topic}</p>
            </div>
        </div>
    )
}

function CountContent() {

    const countContent = [
        {
            id: 0,
            imgNumber:img1,
            title: "Show your best skills",
            topic: "Upload your CV",
        },
        {
            id: 1,
            imgNumber:img2,
            title: "Search for the best match",
            topic: "Lorem Ipsum Description Text" ,
    
        },
        {
            id: 2,
            imgNumber:img3,
            title: "Find the best opportunity",
            topic: "Lorem Ipsum Description Text" ,
        },
    ]

    return (
        <div className='SecondContentCount'>
            {
                countContent.map(item=><Content key={item.id} 
                    imgNumber={item.imgNumber} 
                    title={item.title}
                    topic={item.topic}/>)
            }
        </div>
    );
}

export default CountContent;
  
  
















