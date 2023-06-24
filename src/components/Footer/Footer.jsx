import './Footer.scss'

import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t } = useTranslation()

  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <div className='footer | row'>
      <div className="item col-4 px-0">{t('footer.col-1')}</div>
      <div className="item col-4 px-0">{t('footer.col-2')} © {currentYear} RS</div>
      <div className="item icons-cont | col-4 px-0">
        <a href='https://github.com/Romasta915' target='_blank'><i class="bi bi-github"></i></a>
        <a href='https://www.linkedin.com/in/roman-shavala/' target='_blank'><i class="bi bi-linkedin"></i></a>
      </div>
    </div >
  )
}

export default Footer