import './App.css'
import FeatureCard from './components/featureCard/featureCard'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'

function App() {

  return (
    <>
      <section id='home' className='bg-black'>
        <div className='container mx-auto max-w-[1340px]'>
          <Navbar />
          <Hero />
        </div>
      </section>

      <section id='features'>
        <div className='container mx-auto max-w-[1340px]'>
          <FeatureCard />
        </div>
      </section>

      <section id='portfolio' className='bg-[#f8f9fc] my-20' >
        <div className='container mx-auto max-w-[1340px]'>
          <Portfolio />
        </div>
      </section>

    </>
  )
}

export default App