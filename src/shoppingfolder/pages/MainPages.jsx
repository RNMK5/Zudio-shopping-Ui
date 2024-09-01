import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'

import {Gents, Ladies} from '../data';
import WomenCollection from '../components/WomenCollection'


const MainPages = () => {
    const [gentsFashion, setGentsFashion] = useState(Gents);
    const [ladiesFashion, setLadiesFashion] = useState(Ladies);
    console.log(setGentsFashion,setLadiesFashion)
    console.log(Gents,ladiesFashion)
  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion = {gentsFashion}/>
      <WomenCollection ladiesFashion = {ladiesFashion}/>
      <Footer />
    </div>
  )
}

export default MainPages
