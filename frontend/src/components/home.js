import {useState} from 'react';

import AddBook from './addBook';
import NotBook from './nothBook';
import screw from '../img/screw.png'

const Home = () => {
    const [cardState,setCardState] = useState(0);
    const cardList = [<NotBook />,<AddBook cardState={cardState} setCardState={setCardState}/>]
    return(
        <div className='mainContainer'>
            <h1 className="mainHeading">Infino</h1>
            <h1 className="mainsubHead">keeper . of . the . books</h1>
            <div className="mainWrapper">
                <div className="div1" onClick={() => setCardState(1)}>Add a book</div>
                <div className="div2" onClick={() => setCardState(1)}>Borrow a book</div>
                <div className="div3" onClick={() => setCardState(1)}>Return a book</div>
                <div className="div4" onClick={() => setCardState(1)}>Delete a book</div>  
                <div className="div5">
                    <div className="dot1">.</div>
                    <div className="dot2">.</div>
                    <div className="dot3">.</div>
                </div>
                <div className='screwComp'>
                    <img src={screw} alt='s'/>
                    <img src={screw} alt='s'/>
                    <img src={screw} alt='s'/>
                </div>  
            </div>
            <div className='cardWrapper'>{cardList[cardState]}</div>
            <div className='madeWithLove'>made with ❣️ by &nbsp;<span>abhijith</span></div>
        </div>
    )
}

export default Home;