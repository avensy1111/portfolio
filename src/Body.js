import './body.css'
import stickMan from './Stickman Waving 2.jpg'
export default function Body(){
    return (
        <div className="main-body-container">
            <div className="word-container">
                <h1 className="big-words-body">Hi! My name's</h1>
                <h1 className="bigger-words-body yellow">Aven.</h1>
                 <p className="small-words-body">I'm a <span className='yellow'>mechanical engineer</span> turned <span className='yellow'>frontend developer</span> ready to change the world!</p>
            </div>
            <div>
                <img src={stickMan} alt="stickman waving" className='stick-man'/>
            </div>
        </div>
    )
}