import React from "react"

import useFetch from "../hooks/useFetch.jsx"

const Home = () => {
	const { data } = useFetch("/lamps?populate=*")
	console.log(data)

	return (
		<div>
			<h1></h1>
			Home
		</div>
	)
}

export default Home
