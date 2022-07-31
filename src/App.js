import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import HomeScreen from './screens/HomeScreen';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  return (

    <div>
      <Header />
        <main className="py-3">
          <Container>
              <HomeScreen />
          </Container>
        </main>
      <Footer />
    </div>
  )
}

export default App