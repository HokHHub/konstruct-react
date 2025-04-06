import Story from './components/Story/Story'
import OurCapabilities from './components/OurCapabilities/OurCapabilities'
import Header from './components/Header/Header'
import headerStyle from './components/Header/Header.module.css'
import GetInTouch from './components/GetInTouch/GetINTouch'
import Form from './components/Form/Form'

function App() {

  return (
    <>
      <Header />
      <hr className={headerStyle.header__hr} />
      <Story />
      <OurCapabilities />
      <GetInTouch/>
      <Form/>
    </>
  )
}

export default App
