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
	transition: all 500ms cubic-bezier(0.17, 0.84, 0.68, 1.11);
	transform: translateX(${(props) => `-${props.margin}rem`});

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

			transition: all 500ms cubic-bezier(0.17, 0.84, 0.68, 1.11);
			transform: scale(${(props) => props.margin + 1});

			svg {
				fill: var(--purple-logo);
				margin: 0;
				font-size: 80px;
			}
		}
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */

		box-sizing: border-box;
		padding: 1rem;
		height: 100%;
		background: linear-gradient(2deg, #bcb3cf 34%, #dfc2f260 100%);

		& > div {
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			width: 65%;
			color: var(--charcoal-color);

			p {
				font-weight: 500;
			}

			h3 {
				color: var(--white-color);
			}
		}

		& > a {
			display: flex;
			align-items: center;
			justify-content: space-evenly;

			width: 35%;
			font-weight: bold;
			color: var(--charcoal-color);
			margin-top: 1rem;

			& > svg {
				transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
				fill: #b54e4e;
			}

			&:hover {
				& > svg {
					transform: translateX(0.7rem);
					opacity: 0.4;
				}
			}
		}
	}
`;

export const WrapArticle = styled.article`
	/* border: solid 2px purple; */
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 78%;
	padding: 0 2rem;

	header {
		display: flex;
		align-items: center;

		height: 3.5rem;
		width: 100%;
		border-radius: 0.4rem;
		margin-bottom: 2rem;
		padding: 0.5rem 1rem;
		box-shadow: var(--my-shadow);
		box-sizing: border-box;
		border: solid 1px #eaeaec90;
		background: linear-gradient(7deg, #eaeaec 23%, #bbe9f970 100%);

		transition: all 500ms cubic-bezier(0.17, 0.84, 0.68, 1.11);
		transform: translateY(${(props) => `-${props.margin}rem`});

		svg {
			fill: var(--blue-primary);
			font-size: 2.5rem;
		}

		h1 {
			color: var(--charcoal-color);
			margin-left: 0.5rem;
		}
	}
`;

export const WrapSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 80%;
	width: 100%;
	padding: 1rem;
	border-radius: 0.4rem;
	background: linear-gradient(2deg, #bcb3cf 34%, #dfc2f260 100%);
	box-shadow: var(--my-shadow);

	transition: all 500ms cubic-bezier(0.17, 0.84, 0.68, 1.11);
	transform: translateX(${(props) => `${props.margin}rem`});

	& > a {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 300ms cubic-bezier(0.18, 0.89, 0.32, 1.28);

		padding: 1rem;
		width: 10rem;
		margin-bottom: 1.2rem;
		border: solid 1px var(--white-color);
		border-radius: 50px;
		box-shadow: var(--my-shadow);
		background-color: var(--charcoal-color);

		&:hover {
			transform: scale(1.05);
			& > svg {
				fill: #adeac2;
				transform: rotateY(180deg);
			}
		}

		svg {
			fill: #b7cee7;
			font-size: 1.7rem;
			transition: all 500ms ease;
		}

		& > h2 {
			font-size: 1rem;
			margin-left: 0.4rem;
			color: var(--white-color);
		}
	}

	table {
		border-collapse: collapse;
		border: solid 1px var(--white-color);
		margin: 0;
		padding: 0;
		width: 100%;
		table-layout: fixed;
		color: var(--charcoal-color);
		/* background-color: red; */
		box-shadow: var(--my-shadow);

		thead {
			border-bottom: solid 2px var(--white-color);
			/* background: linear-gradient(7deg, #eaeaec 23%, #bbe9f970 100%); */
			background-color: var(--purple-logo);
			/* color: var(--charcoal-color); */
			color: var(--white-color);
			height: 3rem;

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
				/* background-color: #bbe9f990; */
				background-color: #b7cee7;
			}
			& > tr:nth-child(even) {
				background-color: var(--white-color);
			}

			tr {
				padding: 1em;
				box-sizing: border-box;
				transition: all 300ms ease;

				&:hover {
					transform: scale(1.01);
				}

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
						box-shadow: var(--my-shadow);

						svg {
							transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
						}

						&:nth-child(1) {
							& > svg {
								fill: var(--blue-primary);
							}
						}

						&:nth-child(2) {
							& > svg {
								fill: #e87e76;
							}
						}

						&:nth-child(1):hover {
							& > svg {
								transform: rotate(-80deg);
							}
						}
						&:nth-child(2):hover {
							& > svg {
								transform: rotate(-90deg);
							}
						}
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
		}

		caption {
			font-size: 1.5em;
			margin: 0.5em 0 0.75em;
		}
	}
`;
