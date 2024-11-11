import { Container, ButtonSignIn, ButtonSignUp } from './styles';

import { MdOutlinePersonOutline, MdLockOutline } from 'react-icons/md';

import { Input } from '../../components/Input';

export function SignIn() {
	return (
		<Container>
			<main>
				<form>
					<Input icon={MdOutlinePersonOutline} placeholder="Digite seu e-mail" id="input-email" />
					<Input icon={MdLockOutline} placeholder="Digite sua senha" id="input-password" />
				</form>
				<div className="buttons">
					<ButtonSignIn>Registrar-se</ButtonSignIn>
					<ButtonSignUp>Entrar</ButtonSignUp>
				</div>
			</main>
		</Container>
	);
}
