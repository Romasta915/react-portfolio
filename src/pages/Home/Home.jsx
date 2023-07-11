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
							<div className='title'><TextAppearance text={t('home.hero-title')} delayOneChar={.1} /></div>
							<div className='suptitle'><TextAppearance text={t('home.hero-suptitle')} delayOneChar={.13} /></div>
						</div>
					</motion.div>
				</div>

				<div className="coming">

					<ul className="mLoader">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>

					<div className='text'><TextAppearance text='coming soon...' delayOneChar={.1}></TextAppearance></div>

				</div>
			</div >
		</>
	)
}

export default Home