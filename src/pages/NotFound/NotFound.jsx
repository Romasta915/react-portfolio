import './NotFound.scss'

import { useEffect } from 'react'
// import { useTranslation } from 'react-i18next';

const NotFound = () => {

  // const { t } = useTranslation();

  useEffect(() => {
    document.title = "Page Not Found | Portfolio";
  }, [])

  return (
    <div className="notFound">
      <h1>Not Found</h1>
    </div>
  )
}

export default NotFound;