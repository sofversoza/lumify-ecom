import React from "react"
import useFetch from "../hooks/useFetch.jsx"
import "../styles/home.css"
import Hero from "../components/Hero.jsx"
import FeaturedProducts from "../components/FeaturedProducts.jsx"

const Home = () => {
	const { data } = useFetch("/lamps?populate=*")
	// console.log(data)

	return (
		<div className="homepage align-all">
			<h1>Homepage</h1>
			<Hero />
			<FeaturedProducts status="new" />
			<FeaturedProducts status="sale" />
		</div>
	)
}

export default Home
