import { Container } from './styles';

export function Section({ icon: Icon, title, children, ...rest }) {
	return (
		<Container {...rest}>
			<header>
				{Icon ? <Icon size={40} /> : null}
				<h1>{title}</h1>
			</header>
			<main>{children}</main>
		</Container>
	);
}
