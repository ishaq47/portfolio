import React from 'react'
import { Header } from './components/header/Header'
import Main from './components/Main/Main'
import About from './components/about/About'
import { Experience } from './components/experience/Experience'
import Services from './components/services/Services'
import Speaking from './components/speaking/Speaking'
import Contact from './components/contact/Contact'
import Blog from './components/Blog/Blog'
import { Footer } from './components/footer/Footer'

export const App = () => {
  return (
    <div className=''>
      <Header />
      <Main />
      <About/>
      <Experience/>
      <Services/>
      <Speaking/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}
