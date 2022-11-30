import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import ModalWindow, { ModalText } from '../ModalWindow/ModalWindow';
import { Routes } from '../../../App/AppRoutes/routes';
import { routes } from '../../../App/AppRoutesAuth/AppRouterAuth';
import Input, { IInputData } from '../Input/Input';
import styles from './SignIn.module.css'
import { setUser } from '../../../../store/reducer/userReducer';
import { useAppDispatch } from '../../../../store/hook/hooks';


const SignIn = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm<IInputData>();
	const [textErrorState, setTexErrorState] = useState<ModalText>(ModalText.SUCCES_SIGN_IN);
	const [isDisableError, setIsDisableError] = useState(false);

	const onSubmit: SubmitHandler<IInputData> = ({ email, password }) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				navigate(Routes.home);
			})
			.catch((error) => {
				setIsDisableError(true);
			});
	};
	const getErrorText = (responseText: string) => {
		if (responseText === 'auth/wrong-password') {
			setTexErrorState(ModalText.ERROR_PASSWORD);
		}
		if (responseText === 'auth/user-not-found') {
			setTexErrorState(ModalText.ERROR_EMAIL_NOT_FOUND);
		}
	};

	return (

		<form onSubmit={handleSubmit(onSubmit)} className={styles.formSignIn}>
			<h2 className={styles.titleSignIn}>Sign In</h2>
			{isDisableError && <ModalWindow message={textErrorState} />}
			<Input
				keyData="email"
				inputName="Email"
				inputType="email"
				placeholder="Your email"
				register={register}
				required
			/>
			<Input
				keyData="password"
				inputName="Password"
				inputType="password"
				placeholder="Your password"
				register={register}
				required
			/>
			<Link className={styles.forgotPassword} to={routes.RESET_PASSWORD}>Forgot password?</Link>
			<button className={styles.buttonSignIn} type="submit">Sign in</button>
			<p className={styles.noAccountText}>
				Don’t have an account? <Link className={styles.signUpStyled} to={routes.SIGN_UP}>Sign Up</Link>
			</p>
		</form>
	);
};

export default SignIn;
