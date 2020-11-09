import React from 'react'
import HeroSection from './HeroSection'
import { AboutObjOne, AboutObjTwo, AboutObjThree, AboutObjFour, AboutObjFive, AboutObjSix, AboutObjSeven } from './Data'


function About() {
    
    return (
        <>
           <HeroSection {...AboutObjOne} /> 
           <HeroSection {...AboutObjTwo} />
           <HeroSection {...AboutObjThree} />
           <HeroSection {...AboutObjFour} />
           <HeroSection {...AboutObjFive} />
           <HeroSection {...AboutObjSix} />
           <HeroSection {...AboutObjSeven} />
        </>
    )
}

export default About;