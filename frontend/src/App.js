import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SingleCatDetails from './components/SingleCatDetails';
import AllCats from './components/AllCats';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/single/:id' element={<SingleCatDetails />} />
          <Route path='/AllCats' element={<AllCats />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
