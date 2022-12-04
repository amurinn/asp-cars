import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OurCars from '../components/OurCars'


const Auta = () => {

  return (
    <>
      <Header page="cars" />
      <Hero type="cars" />
      <OurCars />
      <Footer page="cars" />
    </>
  )

}

export default Auta
