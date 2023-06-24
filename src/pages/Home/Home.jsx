import './Home.scss'

import StarCanvas from "../../components/StarCanvas/StarCanvas";
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import TextAppearance from '../../components/AnimItems/TextAppearance/TextAppearance';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
	useEffect(() => {
		document.title = "Home | Portfolio";
	}, [])

	const { t } = useTranslation();

	// start animations
	const heroAnim = {
		hidden: {
			// x: -1000,
			opacity: 0
		},
		visible: {
			// x: 0,
			opacity: 1,
			transition: { duration: 5 }
		},
	}




	return (
		<>
			<div class="mLoader fullScreen" style={{ display: 'none' }}>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>

			<div className="home">
				<div className='home__bgCanvas'><StarCanvas setWidth='100%' setHeight='100vh' /></div>

				<div className='hero'>
					<div className='greetings__wrap'>
						<div className='greetings'>
							<div className='title'><TextAppearance text={t('home.hero-title')} delayOneChar={.1}></TextAppearance></div>
							<div className='suptitle'><TextAppearance text={t('home.hero-suptitle')} delayOneChar={.13}></TextAppearance></div>
						</div>
					</div>
				</div>

				<div className="shortAbout | row">
					<div className="col-6 px-0"></div>
					<div className="col-6 px-0"></div>
				</div>

			</div>
		</>
	)
}

export default Home