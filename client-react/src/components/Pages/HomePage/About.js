import React from 'react'
import HeroSection from '../../HeroSection'
import {AboutObjOne} from './Data'


function About() {
    return (
        <>
           <HeroSection {...AboutObjOne} />
        </>
    )
}

export default About;
