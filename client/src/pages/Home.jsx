import React from "react"
import useFetch from "../hooks/useFetch.jsx"
import Card from "../components/Card.jsx"

const Home = () => {
	const { data } = useFetch("/lamps?populate=*")
	// console.log(data)

	return (
		<div>
			<h1>Home</h1>
			<Card data={data} />
		</div>
	)
}

export default Home
