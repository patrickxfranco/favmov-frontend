import styled from 'styled-components';

export const Container = styled.div`
	max-width: 70rem;
	height: 100vh;

	margin: 0 auto;

	main {
		padding: 10rem 2rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	button {
		border: none;
		background-color: transparent;
		text-transform: uppercase;
		font-family: 'Inter', sans-serif;
		text-decoration: underline;
		height: 3rem;
		cursor: pointer;
		transition: all 0.2s;
	}

	button:hover {
		filter: brightness(0.8);
	}

	.buttons {
		justify-content: right;
		width: 100%;
		height: max-content;
		margin-top: 2rem;
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
`;

export const ButtonSignIn = styled.button`
	color: ${({ theme }) => theme.COLORS.COLOR_BUTTON_SIGNIN};
`;

export const ButtonSignUp = styled.button`
	color: ${({ theme }) => theme.COLORS.COLOR_BUTTON_SIGNUP};
`;
