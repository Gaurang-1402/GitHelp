import React from 'react'
import './landingpage.css'
import {Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

function Landingpage() {
    const userLogin = useSelector((state) => state.userLogin)

    return (
        <div className="landingpage">
            <div className="landingpage__background">

            </div>
            <section className="main__section">
                <div className="main__sectionBlank">
                </div>
                <div className="main__sectionTitle">
                    <h1 className="landingpage__title">GitHelp</h1>
                    <span className="landingpage__subtitle">Everybody needs to git help sometimes. </span>
                    <br />
                    <div className="landingpage__buttons">
                        <Button href="/register" className="landingpage__learnMore">Sign Up</Button>
                        {userLogin.userInfo !==null  && 
                            <Button href="/home" className="landingpage__learnMore">Market Place</Button>
                        }
                        
                    </div>
                </div>
            </section>
            <div className="landingpage__circle1">
                <div className="landingpage__text1" >Ideation</div>
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
