import { Outlet } from 'react-router'
import './App.css'
import Navbars from './components/Navbars/Navbars'
import HeroSection from './components/HeroSection/HeroSection'

const navbarsData=fetch('navbarsData.json')
                  .then(res=>res.json())


function App() {
  console.log(navbarsData)
  return (
    <>
      <header className=''>
        <Navbars navbarsData={navbarsData}></Navbars>
        <HeroSection></HeroSection>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
