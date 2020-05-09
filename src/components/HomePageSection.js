import { Divider } from "./Atoms/Dividers"
import { Flex } from "./Atoms/Flex"
import { ProductCard } from "./Product"
import styled from "styled-components"
import React from "react"

export const HomePageSection = ({ title, products }) => {
	return (
		<HomePageSection.Wrapper>
			<h1>{title}</h1>
			<Divider.MarginDivider />
			<Flex.Row justifyContent="center">
				{products.map(product => {
					return <ProductCard product={product} />
				})}
			</Flex.Row>
		</HomePageSection.Wrapper>
	)
}
HomePageSection.Wrapper = styled.section`
	width: 100%;
	background-color: ${props => props.theme.colors.white};
	height: 24rem;
	display: flex;
	flex-direction: column;
	box-shadow: 0px -2px 20px -1px rgba(204, 204, 204, 0.5);
	h1 {
		margin-top: 0.125rem;
		font-size: 22px;
		text-align: center;
		font-weight: 500;
	}
`
