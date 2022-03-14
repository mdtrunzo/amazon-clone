import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login'
import { useContext, useEffect } from 'react';
import { StateContext } from './context/StateProvider'
import { auth } from './firebase'

function App() {
  const [{user}, dispatch] = useContext(StateContext)

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER', 
          user: null
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  console.log(user)

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
            <Header />
            <Home />
            </>
          }/>
          <Route path="/checkout" element={
            <>
            <Header />
            <Checkout />
            </>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
