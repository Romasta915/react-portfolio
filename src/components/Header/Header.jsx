import './Header.scss'

import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import clientStore from '../../store/clientStore'

import { NavLink, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
// import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import alertify from 'alertifyjs'

const Header = observer(() => {

  // const { t, i18n } = useTranslation();
  // const changeLanguage = (language) => {
  //     clientStore.currentLang = language
  //     i18n.changeLanguage(language)
  // }
  // const navigate = useNavigate()

  // useEffect(() => {
  //     if (localStorage.i18nextLng !== 'ua') {
  //         changeLanguage("en")
  //     }
  // }, [])

  // const activeLink = ({ isActive }) => (isActive ? 'nav-item main-link active' : 'nav-item main-link')

  // const langSwitchHandler = () => {
  //     if (i18n.language == 'en') {
  //         changeLanguage("ua")
  //     } else {
  //         changeLanguage("en")
  //     }
  // };

  return (
    <header className="header">
      <div><NavLink to='/' element={<Home />}>ХОМЕ</NavLink></div>
      <div><NavLink to='/about' element={<About />}>Ебаут</NavLink></div>
      ХЕДЕР ХЕДЕР ХЕДЕР ХЕДЕР
    </header >
  )
})

export default Header