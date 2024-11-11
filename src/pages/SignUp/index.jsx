import { Container, ButtonSignIn, ButtonSignUp } from './styles';

import { MdOutlinePersonOutline, MdLockOutline, MdOutlineBadge } from 'react-icons/md';

import { Input } from '../../components/Input';

export function SignUp() {
	return (
		<Container>
			<main>
				<form>
					<Input icon={MdOutlineBadge} placeholder="Digite seu nome" id="input-name" />
					<Input icon={MdOutlinePersonOutline} placeholder="Digite seu e-mail" id="input-email" />
					<Input icon={MdLockOutline} placeholder="Digite sua senha" type="password" id="input-password" />
				</form>
				<div className="buttons">
					<ButtonSignIn>Registrar-se</ButtonSignIn>
					<ButtonSignUp>Entrar</ButtonSignUp>
				</div>
			</main>
		</Container>
	);
}
