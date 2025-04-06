import Story from './components/Story/Story'
import OurCapabilities from './components/OurCapabilities/OurCapabilities'
import Header from './components/Header/Header'
import headerStyle from './components/Header/Header.module.css'
import GetInTouch from './components/GetInTouch/GetINTouch'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <hr className={headerStyle.header__hr} />
      <Story />
      <OurCapabilities />
      <GetInTouch/>
      <Footer/>
    </>
  )
}

export default App
