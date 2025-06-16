import React from 'react'
import Hero from '../Components/Hero/Hero'
import LawService from '../Components/LawService/LawService'
import Lawyers from '../Components/Lawyers/Lawyers'
import { useLoaderData } from 'react-router'


const Home = () => {

  const data = useLoaderData()
  return (
    <div>
      <Hero></Hero>

      <Lawyers data = {data}></Lawyers>
      <LawService></LawService>
    </div>
  )
}

export default Home