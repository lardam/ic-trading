import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { AboutUs, OurServices, ProductRange, Contact } from './Pages'

function App() {
  return (
    <main id='main'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/our-services' element={<OurServices/>}/>
      <Route path='/product-range' element={<ProductRange/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </main>
  )
}

export default App
