import Script from "next/script"
import Cars from '../components/Cars'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Services from '../components/Services'
import Footer from '../components/Footer'


const Home = () => {

  const importAll = (r) => r.keys().map(r)

  const cars = importAll(
    require.context("../content/cars/", false, /\.json$/)
  )
  
  return (
    <>
      <Header page="home" />
      <Hero />
      <Cars />
      <Services />
      <Footer />
    </>
  )
}

export default Home
