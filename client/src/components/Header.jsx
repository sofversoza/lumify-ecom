import React from "react"
import { Link, NavLink } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import "../styles/header.css"

const Header = () => {
	const { data } = useFetch("/categories?populate=*")
	// console.log(data)

	return (
		<div id="header" className="align-all">
			<Link to="/">
				<h1>Lumify</h1>
			</Link>
			<nav id="navbar">
				<ul>
					{data?.map((category) => (
						<NavLink
							to={`/products/${category.id}`}
							end
							key={category.id}
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							{category.attributes.name}
						</NavLink>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Header
