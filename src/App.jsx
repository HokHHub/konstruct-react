import Story from './components/Story/Story'
import OurCapabilities from './components/OurCapabilities/OurCapabilities'
import Header from './components/Header/Header'
import headerStyle from './components/Header/Header.module.css'

function App() {

  return (
    <>
      <Header />
      <hr className={headerStyle.header__hr} />
      <Story />
      <OurCapabilities />
    </>
  )
}

export default App
