import React from "react"
import Navbar from './Navbar'
import Body from './Body'
import BodyMid from './BodyMid'
import WorkSelection from "./WorkSelection"

export default function App() {
    return (
        <div>
            <Navbar />
            <Body />
            <BodyMid />
            <WorkSelection />
        </div>
    )
}