import About from '@/components/About'
import Main from '@/components/Main'
import NavBar from '@/components/NavBar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'


export default function Home() {
  return (
    <div> 
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
