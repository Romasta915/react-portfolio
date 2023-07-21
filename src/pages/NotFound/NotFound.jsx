import './NotFound.scss'

import TextAppearance from '../../components/AnimItems/TextAppearance/TextAppearance';
import StarCanvas from "../../components/StarCanvas/StarCanvas";

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

const NotFound = () => {

  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Page Not Found | Portfolio";
  }, [])

  return (
    <div className="notFound">
      <div className='notFound__bgCanvas'><StarCanvas setWidth='100%' setHeight='110vh' /></div>

      <ul className="mLoader">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className='title'><TextAppearance text={t('notFound.title')} delayOneChar={.05}></TextAppearance></div>
    </div>
  )
}

export default NotFound;