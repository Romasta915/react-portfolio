import './Home.scss'

import StarCanvas from "../../components/StarCanvas/StarCanvas";
import { useEffect } from 'react'
import { motion, useTransform } from 'framer-motion'
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
				<div className='home__bgCanvas'><StarCanvas setWidth='100%' setHeight='99vh' /></div>

				<div className='hero'>
					<div className='hero__greetings'>
						<div className='title'><TextAppearance text={t('home.hero-title')} delayOneChar={.1}></TextAppearance></div>
						<div className='suptitle'><TextAppearance text={t('home.hero-suptitle')} delayOneChar={.15}></TextAppearance></div>

						<a class="cp-btn cp-btn--yellow" target="_blank"><span>Кнопка</span></a>
						<a class="cp-btn cp-btn--cyan" target="_blank"><span>Кнопка</span></a>

						<button class="cybr-btn">
							SEE WORK_
							<span aria-hidden class="cybr-btn__glitch">SEE WORK_</span>
							<span aria-hidden class="cybr-btn__tag">rA9</span>
						</button>
					</div>

				</div>

			</div>
		</>
	)
}

export default Home