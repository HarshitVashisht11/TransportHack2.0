import React from 'react'
import Nav from './components/Nav'
import Hero from './sections/Hero'

const App = () => {
  return (
    <main className='relative'>
    <Nav />
    <section className='xl:padding-l wide:padding-r padding-b'>
    <Hero />
    </section>
    </main>
  )
}

export default App