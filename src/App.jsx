
import './App.css'
import About from './Components/About/About'
import Banner from './Components/Banner/Banner'
import Card from './Components/Card/Card'
import Contract from './Components/Contract/Contract'
import Element from './Components/Element/Element'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Integrate from './Components/Integrate/Integrate'
import Navber from './Components/Navber/Navber'
import Pricing from './Components/Pricing/Pricing'
import Work from './Components/Work/Work'
import Customer from './Customer/Customer'

function App() {

  return (
 <>
 <Header>
 <Navber></Navber>
 <Banner></Banner>
 </Header>
 <Card></Card>
 <Element></Element>
 <Integrate></Integrate>
 <Work></Work>
 <Customer></Customer>
 <Pricing></Pricing>
 <About></About>
 <Contract></Contract>
 <Footer></Footer>
 
 </>
  )
}

export default App
