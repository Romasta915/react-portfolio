import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import { Outlet } from 'react-router-dom'

const Layot = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default Layot