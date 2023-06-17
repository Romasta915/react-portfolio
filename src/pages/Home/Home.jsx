// import './Home.scss'


// import BackUpBtn from '../../components/BackUpBtn/BackUpBtn'

import { useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
// import { useTranslation } from 'react-i18next';
// import alertify from 'alertifyjs'

const Home = () => {
	useEffect(() => {
		document.title = "Home | MotoEmporium";
	}, [])

	// const { t } = useTranslation();

	// const now = new Date();
	// const currentYear = now.getFullYear();

	// function pathInaccessible() {
	//     alertify.alert(t('app.oops'), t('footer.textOnClick'))
	// }

	return (
		<div className="home">
			{/* <BackUpBtn whenShow='1000' debugLine='false'></BackUpBtn> */}
			<h1>HOME</h1>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, molestiae. Repudiandae aliquid aperiam autem magni harum enim perspiciatis in eum dicta, consequuntur eos odio soluta quaerat minus officia nam placeat culpa assumenda! Ipsam incidunt sapiente, est atque aperiam similique voluptatibus, veniam repudiandae vel nesciunt dolorum nobis unde at optio ducimus explicabo. Esse voluptatibus numquam, ad quaerat adipisci debitis qui iste odio, blanditiis laborum cumque repudiandae praesentium. Corrupti quos sint, quisquam amet aperiam deserunt recusandae tenetur adipisci quam sed nulla deleniti exercitationem impedit fugit. Ipsum neque soluta quam eligendi, minima, voluptas libero aperiam doloribus sunt amet ex! Excepturi ullam suscipit eius!

		</div>
	)
}

export default Home