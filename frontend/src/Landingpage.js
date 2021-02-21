import React from 'react'
import './landingpage.css'
import {Button} from 'react-bootstrap'

function Landingpage() {
    return (
        <div className="landingpage">
            <div className="landingpage__background">

            </div>
            <section className="main__section">
                <div className="main__sectionBlank">
                </div>
                <div className="main__sectionTitle">
                    <h1 className="landingpage__title">GitHelp</h1>
                    <span className="landingpage__subtitle">A place for working team projects. Everyone needs git help. </span>
                    <br />
                    <Button href="/home" className="landingpage__learnMore">Learn More</Button>
                </div>
            </section>
            <div className="landingpage__circle1">
                <div className="landingpage__text1" >Idea</div>
            </div>
            <div className="landingpage__circle2">
                <div className="landingpage__text2" >Collaboration</div>
            </div>
            <div className="landingpage__circle3">
                <div className="landingpage__text3" >Contribution</div>
            </div>
        </div>
    )
}

export default Landingpage
