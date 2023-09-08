import React from "react"
import { Link } from "react-router-dom"
import "../styles/card.css"

const Card = ({ data }) => {
	console.log(data)
	return (
		<div className="card">
			{data?.map((lamp) => (
				<Link key={lamp.id} to={`/product/${lamp.id}`}>
					<img
						className="card-img"
						src={`http://localhost:1337${lamp.attributes.image1.data.attributes.url}`}
					/>
				</Link>
			))}
		</div>
	)
}

export default Card
