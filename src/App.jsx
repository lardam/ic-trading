import { Route, Routes } from 'react-router-dom'
import { HomeEn, HomeEs } from './Home'
import { HeaderEn, FooterEn, HeaderEs, FooterEs } from './Head-n-Foot'
import { AboutUs, OurServices, Contact, Nosotros, Servicios, Contacto } from './Pages'

function EngCont() {
  return (
    <main id='main'>
      <Routes>
          <Route path='*' element={<HomeEn/>}/>
          <Route path='/' element={<HomeEn/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/our-services' element={<OurServices/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </main>
  )
}

function EsCont() {
  return (
    <main id='main'>
      <Routes>
          <Route path='*' element={<HomeEs/>}/>
          <Route path='/' element={<HomeEs/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
    </main>
  )
}

export const English = () => {
  document.documentElement.lang = 'en'

  return(
    <div id='lang-cont'>
      <HeaderEn/>
      <EngCont/>
      <FooterEn/>
    </div>
  )
}

export const Español = () => {
  document.documentElement.lang = 'es'

  return(
    <div id='lang-cont'>
      <HeaderEs/>
      <EsCont/>
      <FooterEs/>
    </div>
  )
}

export const Error = () => {
  return(
    <div>
        <h2>Error 404</h2>
        <p>There's nothing here</p>
    </div>
)
}
