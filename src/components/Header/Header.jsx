import './Header.scss'

import logo from '../../assets/images/logo.png'

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
    <header className="header | navbar navbar-expand-md">

      <div className="header__logo" ><img src={logo} alt="logo here" /></div>

      <button className="header__mobileBtn | navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerToggler" aria-controls="headerToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="header__nav collapse navbar-collapse" id="headerToggler">
        <div class="menu">
          <ul class="menu-list">
            <li class="menu-item">
              <NavLink class="menu-sub" to='/' element={<Home />}>Home</NavLink>
            </li>

            <li class="menu-item">
              <NavLink class="menu-sub" to='/about' element={<About />}>About</NavLink>
            </li>

            <li class="menu-item">
              <a>Projects</a>
            </li>
            
            <li class="menu-item menu-item-lang">
              <span class="menu-sub">UA</span>
              <ul class="menu-sub-list">
                <li><a href="#">English</a></li>
                <li><a href="#">Українська</a></li>
              </ul>
            </li>

            <li class="menu-item menu-item-fill"><a href="#">Напишіть мені</a></li></ul>
        </div>
      </div>
    </header >
  )
})

export default Header