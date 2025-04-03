import Story from './components/Story/Story'
import OurCapabilities from './components/OurCapabilities/OurCapabilities'
import Container from './components/Container/Container'
import Header from './components/Header/Header'
import headerStyle from './components/Header/Header.module.css'

function App() {

  return (
    <>
      <Container>
        <Header />
      </Container>
        <hr className={headerStyle.header__hr} />
      <Container>
        <Story />
      </Container>
      <OurCapabilities />
    </>
  )
}

export default App
