import * as PropTypes from "prop-types"
import React from "react"

export function CartItems({ items }) {
	return items.map(item => {
		return <div>{item.id}</div>
	})
}

CartItems.propTypes = {
	items: PropTypes.any,
}
