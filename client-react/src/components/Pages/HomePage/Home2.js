import React from 'react'
import HeroSection from '../../HeroSection'
import {HomeObjOne} from './Data'


function Home() {
    return (
        <>
           <HeroSection {...HomeObjOne} />
        </>
    )
}

export default Home
