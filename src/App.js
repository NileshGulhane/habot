import React from 'react'
import Navbars from './Components/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inside from './Components/Inside';
import Centre from './Components/Centre';
import Link from './Components/Link';
import Bottom from './Components/Bottom';
import Card from './Components/Card';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
   <Navbars/>
   <Inside />
   <Centre />
   <Link />
   <Bottom />
   <Card />
   <Footer />
    </div>
  )
}

export default App
