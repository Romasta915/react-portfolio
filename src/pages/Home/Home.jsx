import './Home.scss'

import StarCanvas from "../../components/StarCanvas/StarCanvas";
import TextAppearance from '../../components/AnimItems/TextAppearance/TextAppearance';
import { scaleY } from '../../components/AnimItems/AnimPatterns'
import Projects from '../../components/Projects/Projects'
import BackUpBtn from '../../components/BackUpBtn/BackUpBtn';

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

const Home = () => {
	useEffect(() => {
		document.title = "Home and Projects | RS Portfolio";
	}, [])

	const { t } = useTranslation();

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
			</div >

			<Projects />
			<BackUpBtn whenShow='700' debugLine='' />
		</>
	)
}

export default Home