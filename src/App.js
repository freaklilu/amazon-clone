
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
const promise = loadStripe("pk_test_51NViGHF7jzWbdatLYfSjkJ1lkLq3Dz3kUzENrbWOkpRpYMEONhhKpKoIbRQxnGxyU5Cm2VzFhzMwt2Gf1jvzPQTz00FjyXQRx0")


function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">


        <Routes>
          <Route path='/' element={<><Header /><Home /></>} />
          <Route path='/checkout' element={<><Header /><Checkout /></>} />
          <Route path='/login' element={<Login />} />
          <Route path='/orders' element={<><Header /><Orders /></>} />
          <Route path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
