import React from "react"
import Card from "./Card"
import useFetch from "../hooks/useFetch"

const FeaturedProducts = ({ status }) => {
	const { data } = useFetch(
		`/lamps?populate=*&[filters][status][$eq]=${status}`
	)

	return (
		<div className="featured">
			<span>Featured Products ({status})</span>
			<Card data={data} />
		</div>
	)
}

export default FeaturedProducts
