import React from "react"
import './bodymid.css'
import thinkingMan from './Thinking Stickman.png'
import ideaMan from './idea man.png'
import gradPic from './Grad Pic.JPG'

export default function BodyMid() {
    return (
        <div className="bodymid-container">
            <div className="bodymid-word-container">
                <h1 className="small-words-body">I'm a mechanical engineer with a passion for programming.</h1>
                <h1 className="small-words-body">Even if I'm not a tech-related degree graduate,</h1>
                <h1 className="small-words-body">I know that through hard work and sheer will</h1>
                <h1 className="big-words-body yellow">I can be the best there is.</h1>
            </div>
            <div className="image-bodymid-container">
                <img src={ideaMan} alt="idea man" className="idea-man"/>
                <img src={gradPic} alt="grad pic" className="grad-pic"/>
                <img src={thinkingMan} alt="thinking man" className="thinking-man"/>
            </div>
        </div>
    )
}