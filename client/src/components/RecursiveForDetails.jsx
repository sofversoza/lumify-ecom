import React from "react"

const RecursiveForDetails = ({ data }) => {
	if (!data) {
		return null
	}

	const { id, attributes } = data

	return (
		<div>
			<h1>{attributes.name}</h1>
			<p>Price: {attributes.price}</p>
			<p>On Sale: {attributes.onSale ? "Yes" : "No"}</p>
			<p>Created At: {attributes.createdAt}</p>

			{/* Render image if available */}
			{attributes.image1 && (
				<img
					src={attributes.image1.data.url}
					alt={attributes.image1.data.alternativeText}
				/>
			)}

			{/* Render categories if available */}
			{attributes.categories && attributes.categories.data.length > 0 && (
				<div>
					<h2>Categories:</h2>
					<ul>
						{attributes.categories.data.map((category) => (
							<li key={category.id}>{category.attributes.name}</li>
						))}
					</ul>
				</div>
			)}

			{/* Render collections if available */}
			{attributes.collections && attributes.collections.data.length > 0 && (
				<div>
					<h2>Collections:</h2>
					{attributes.collections.data.map((collection) => (
						<div key={collection.id}>
							<h3>{collection.attributes.name}</h3>
							<p>{collection.attributes.desc}</p>
							<p>Designer: {collection.attributes.designer}</p>
						</div>
					))}
				</div>
			)}

			{/* Recursively render child components */}
			{attributes.children &&
				attributes.children.map((childData, index) => (
					<RecursiveForDetails key={index} data={childData} />
				))}
		</div>
	)
}

export default RecursiveForDetails
