import './Home.scss'

import MatrixCanvas from "../../components/MatrixCanvas/MatrixCanvas";
import StarCanvas from "../../components/StarCanvas/StarCanvas";
import { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { useTranslation } from 'react-i18next';
// import alertify from 'alertifyjs'

const Home = () => {
	useEffect(() => {
		document.title = "Home | Portfolio";
	}, [])

	return (
		<div className="home">
			{/* <MatrixCanvas/> */}
			<div style={{
				height: '100vh', width: '100%',
				position: "absolute", top: '0', left: '0', zIndex: '-1'
			}}>
				<StarCanvas setWidth='100%' setHeight='100vh' />
			</div>
		</div>
	)
}

export default Home