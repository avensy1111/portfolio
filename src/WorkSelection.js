import React from "react"
import './workselection.css'
import pointingMan from './Stickman Pointing.png'

export default function WorkSelection() {
    return (
        <div className="work-selection-container">
            <div className="bodymid-word-container">
                <h1 className="small-words-body">Press one of the images to check out my work!</h1>
            </div>
            <div className="work-container">
                <div className="work-image-container">
                    <img src={pointingMan} alt="pointing man" className="pointing-man"/>
                </div>
                 <div className="work-area-container">
                    <h1>Work Area</h1>
                </div>
            </div>
        </div>
    )
}