import './styles/App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Proyects from './pages/Proyects'
import Speaking from './pages/Speaking'
import NotFound from './pages/NotFound'

function App() {


  return (
    <div>
      <div className='galaxy'>
        <div className='stars1'></div>
        <div className='stars2'></div>
        <div className='stars3'></div>
      </div>
      <Header />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/proyects' element={<Proyects/>}/>
        <Route path='/speaking' element={<Speaking/>}/>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
