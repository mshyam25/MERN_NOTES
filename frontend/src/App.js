import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import LandingPage from './Screens/Landing-Page/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyNotes from './Screens/MyNotes/MyNotes'
const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mynotes' element={<MyNotes />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
)

export default App
