import './Header.scss'

import logo from '../../assets/images/logo.png'

import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Contacts from '../../pages/Contacts/Contacts'
import clientStore from '../../store/clientStore'

import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

const Header = observer(() => {

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    clientStore.currentLang = language
    i18n.changeLanguage(language)
  }
  const activeLink = ({ isActive }) => (isActive ? 'menu-navlink active' : 'menu-navlink')

  return (
    <>
      <header className="header | navbar navbar-expand-lg">

        <NavLink to='/' element={<Home />}><div className="logo" ><img src={logo} alt="logo here" /></div></NavLink>

        <button className="header__mobileBtn | navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#headerToggler" aria-controls="headerToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="header__nav collapse navbar-collapse" id="headerToggler">
          <div className="menu">
            <ul className="menu-list">
              <li className="menu-item">
                <NavLink className={activeLink} to='/' element={<Home />}>
                  {t('header.item1')}</NavLink>
              </li>

              <li className="menu-item">
                <NavLink className={activeLink} to='/about' element={<About />}>
                  {t('header.item2')}</NavLink>
              </li>

              <li className="menu-item menu-item-lang">
                <span className="menu-sub">{clientStore.currentLang}</span>
                <ul className="menu-sub-list">
                  <li><span onClick={() => changeLanguage('en')}>English</span></li>
                  <li><span onClick={() => changeLanguage('ua')}>Українська</span></li>
                </ul>
              </li>

              {/* menu-item-fill */}
              <li className="menu-item">
                <NavLink className={activeLink} to='/contacts' element={<Contacts />}>
                  {t('header.item4')}</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header >
    </>
  )
})

export default Header