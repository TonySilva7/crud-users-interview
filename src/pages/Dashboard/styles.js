import styled from 'styled-components';

export const WrapMain = styled.main`
	/* border: solid 2px red; */

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem;
	height: 100vh;

	background: rgb(234, 234, 236);
	background: radial-gradient(
		circle,
		rgba(234, 234, 236, 1) 0%,
		rgba(190, 216, 226, 1) 21%,
		rgba(107, 108, 163, 1) 69%,
		rgba(52, 64, 85, 1) 100%
	);
`;

export const WrapAside = styled.aside`
	/* border: solid 2px green; */
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 20%;

	header {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 8rem;
		width: 100%;

		border-radius: 0.7rem 0.7rem 0 0;
		border-bottom: solid 1px var(--white-color);
		background-color: var(--charcoal-color);

		picture {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: var(--white-color);
			border-radius: 100%;
			max-height: 4.5rem;
			max-width: 4.5rem;

			svg {
				fill: var(--purple-logo);
				margin: 0;
				font-size: 80px;
			}
		}
	}

	footer {
		display: flex;
		height: 100%;
		background: linear-gradient(2deg, #bcb3cf 34%, #dfc2f260 100%);
	}
`;

export const WrapArticle = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: solid 2px purple;
	height: 100%;
	width: 78%;
`;
export const WrapSection = styled.section`
	border: solid 2px blueviolet;
	display: flex;
	flex-direction: column;
	height: 80%;
	width: 100%;
	padding: 1rem;

	table {
		border-collapse: collapse;
		margin: 0;
		padding: 0;
		width: 100%;
		table-layout: fixed;
		color: #252437;
		box-shadow: var(--my-shadow);

		thead {
			background-color: #eee;
			border-bottom: solid 2px var(--purple-logo);

			th {
				font-size: 0.85em;
				letter-spacing: 0.1em;
				text-transform: uppercase;
				padding: 0.62em;
				text-align: center;
			}
		}

		tbody {
			& > tr:nth-child(odd) {
				background-color: #fff;
				padding: 1em;
			}

			tr {
				td {
					padding: 0.62em;
					text-align: center;

					button {
						border: 0;
						padding: 5px;
						margin-right: 5px;
						align-items: center;
						display: inline-block;
						border-radius: 4px;
						vertical-align: middle;
					}

					a {
						border: 0;
						padding: 5px;
						margin-right: 5px;
						align-items: center;
						display: inline-block;
						border-radius: 4px;
					}
				}
			}

			& tr:hover {
				background-color: rgba(122, 117, 188, 0.1);
			}
		}

		caption {
			font-size: 1.5em;
			margin: 0.5em 0 0.75em;
		}
	}
`;
