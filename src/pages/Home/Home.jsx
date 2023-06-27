import './Home.scss'

import StarCanvas from "../../components/StarCanvas/StarCanvas";
import TextAppearance from '../../components/AnimItems/TextAppearance/TextAppearance';

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

const Home = () => {
	useEffect(() => {
		document.title = "Home | Portfolio";
	}, [])

	const { t } = useTranslation();

	// start animations
	// const heroAnim = {
	// 	hidden: {
	// 		// x: -1000,
	// 		opacity: 0
	// 	},
	// 	visible: {
	// 		// x: 0,
	// 		opacity: 1,
	// 		transition: { duration: 5 }
	// 	},
	// }

	const scaleY = {
		initial: { opacity: 1, transform: 'scaleY(0)' },
		animate: { opacity: 1, transform: 'scaleY(1)' },
		transition: { duration: 1 },
	}


	return (
		<>
			<div className="home">
				<div className='home__bgCanvas'><StarCanvas setWidth='100%' setHeight='100vh' /></div>

				<div className='hero'>

					<motion.div className='greetings__wrap'
						variants={scaleY}
						initial='initial'
						whileInView='animate'
						viewport={{ once: true }}
					>
						<div className='greetings'>
							<div className='title'><TextAppearance text={t('home.hero-title')} delayOneChar={.1}></TextAppearance></div>
							<div className='suptitle'><TextAppearance text={t('home.hero-suptitle')} delayOneChar={.13}></TextAppearance></div>
						</div>
					</motion.div>
				</div>

				<div className="shortAbout | row">
					<div className="mLoader">
						<ul>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
				</div>

			</div >
		</>
	)
}

export default Home