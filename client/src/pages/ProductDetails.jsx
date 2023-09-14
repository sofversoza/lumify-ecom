import React from "react"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch.jsx"
import "../styles/product.css"
import RecursiveForDetails from "../components/RecursiveForDetails.jsx"

const ProductDetails = () => {
	const { id } = useParams()
	const { data, loading, error } = useFetch(`/lamps/${id}?populate=*`)
	console.log(data)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error.message}</p>

	return (
		<div className="product-details">
			<span>Product Details</span>
			{Object.keys(data).map((key) => {
				return (
					<div key={key}>
						<span>{data[key].name}</span>
					</div>
				)
			})}
			<span>Lamp id: {id}</span>
			<RecursiveForDetails data={data} />
		</div>
	)
}

export default ProductDetails
