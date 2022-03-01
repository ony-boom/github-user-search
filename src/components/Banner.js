import "./styles/banner.scss"

const Banner = () => {
	return (
		<div className="banner">
			<div className="row">
				<h1 className="heading-primary">
					devfinder
				</h1>
				
				<div className="theme-switcher-box">
					<span>Light</span>
					<i className="las la-sun icon"></i>
				</div>
			</div>
		</div>
	)
}

export default Banner;