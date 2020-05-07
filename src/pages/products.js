import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Skus from "../components/Products/Skus"

const AdvancedExamplePage = () => (
	<Layout>
		<SEO title="Products" />
		<h1>Products</h1>
		<Skus />
	</Layout>
)

export default AdvancedExamplePage
