import './Header.scss'

import logo from '../../assets/images/logo.png'

import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import clientStore from '../../store/clientStore'

import { NavLink, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import alertify from 'alertifyjs'

const Header = observer(() => {

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    clientStore.currentLang = language
    i18n.changeLanguage(language)
  }
  // const navigate = useNavigate()
  const activeLink = ({ isActive }) => (isActive ? 'menu-navlink active' : 'menu-navlink')

  return (
    <>
      <header className="header | navbar navbar-expand-md">

        <NavLink to='/' element={<Home />}><div className="logo" ><img src={logo} alt="logo here" /></div></NavLink>

        <button className="header__mobileBtn | navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerToggler" aria-controls="headerToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="header__nav collapse navbar-collapse" id="headerToggler">
          <div class="menu">
            <ul class="menu-list">
              <li class="menu-item">
                <NavLink className={activeLink} to='/' element={<Home />}>
                  {t('header.item1')}</NavLink>
              </li>

              <li class="menu-item">
                <NavLink className={activeLink} to='/about' element={<About />}>
                  {t('header.item2')}</NavLink>
              </li>

              <li class="menu-item">
                <a>{t('header.item3')}</a>
              </li>

              <li class="menu-item menu-item-lang">
                <span class="menu-sub">{clientStore.currentLang}</span>
                <ul class="menu-sub-list">
                  <li><a onClick={() => changeLanguage('en')}>English</a></li>
                  <li><a onClick={() => changeLanguage('ua')}>Українська</a></li>
                </ul>
              </li>

              <li class="menu-item menu-item-fill"><a href="#">
                {t('header.сontactMe')}</a></li></ul>
          </div>
        </div>
      </header >
    </>
  )
})

export default Header