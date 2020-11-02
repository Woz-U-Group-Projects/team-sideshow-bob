import React from 'react'
import HeroSection from './HeroSection'
import { AboutObjOne, AboutObjThree, AboutObjTwo, AboutObjFour } from './Data'


function About() {
    return (
        <>
           <HeroSection {...AboutObjOne} /> 
           <HeroSection {...AboutObjThree} />
           <HeroSection {...AboutObjTwo} />
           <HeroSection {...AboutObjFour} />
        </>
    )
}

export default About;