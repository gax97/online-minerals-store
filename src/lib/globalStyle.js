import { createGlobalStyle } from 'styled-components';
import { Device } from "./css"

export const GlobalStyle = createGlobalStyle`
	
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	main, menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	article, aside, details, figcaption, figure,
	footer, header, hgroup, main, menu, nav, section {
		display: block;
	}

	*[hidden] {
		display: none;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
		q:before, q:after {
			content: '';
			content: none;
		}
table {
border-collapse: collapse;
border-spacing: 0;
}
/* http://www.paulirish.com/2012/box-sizing-border-box-ftw/ (2015/04/28)*/
html {
box-sizing: border-box;
}
*, *:before, *:after {
box-sizing: inherit;
}
/* Additional resets */
a {
text-decoration: none;
color: inherit;
}
button {
border: none;
margin: 0;
padding: 0;
width: auto;
overflow: visible;
background: transparent;
color: inherit;
font: inherit;
text-align: inherit;
outline: none;
line-height: inherit;
-webkit-appearance: none;
}
/* Fix antialiasing */
*, *:before, *:after {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
/* Disable user select on everything but texts */
*, *:before, *:after {
user-select: none;
}
p, h1, h2, h3, h4, h5, h6, blockquote, pre, ul, ol, li, table, tr, th, td, input, textarea, span, .read {
user-select: text;
}
	html, body {
		font-size: 16px;
		line-height: 1.4;
		font-family: Heebo;
	}
	
	html, html a {
		-webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	    text-rendering: optimizeLegibility;
	}
html, body {
    min-height: 100%;
}
	.my-facebook-button-class{
		background-color: #3b5998;
		color: white;
		font-size: 20px;
		cursor: pointer;
		height: 50px;
		width: 250px;
		display: flex;
		padding: 0 10px;
		border-radius: 4px;
		justify-content: space-between;
		align-items: center;
	}
	.sc-chat-window {
	${Device.mobileL} {
		width: 86%;
	    height: 79%;
	    max-height: 100%;
	    right: 30px;
	    bottom: 20px;
	    border-radius: 0px;
	}
    }
`;
