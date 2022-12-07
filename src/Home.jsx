import React from 'react'
import About from "./About";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Team from "./Team";
import Baner from "./Baner";
import Sponsorzy from "./Sponsorzy";
import Organizatorzy from "./Organizatorzy";

const Home = (props) => {
  return (
    <>
      <Baner/>
      <About/>
      <Team data={props.data}/>
      <Pricing/>
      <Organizatorzy data={props.data}/>
      <Sponsorzy data={props.data}/>
      <Footer/>
    </>
  );
}

export default Home
