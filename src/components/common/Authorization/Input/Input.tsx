//template для инпутов форм
//react-hook-form  -  помогает проверять формы в React.
import { Path, UseFormRegister } from 'react-hook-form';
import styles from './Input.module.css';

//можно расширить интерфейс для поиска кино и тп
export interface IInputData {
	email: string;
	password: string;
	name: string;
	password_confirm: string;
	password_new: string;
}

type InputProps = {
	keyData: Path<IInputData>
	inputName: string
	inputType: string;
	register: UseFormRegister<IInputData>;
	placeholder?: string;
	required?: boolean;
};

//keydata- то, что вводит пользователь
//register (ф-ция)-  принимает значение, которое пользователь ввел в каждый инпут, и проверяет его.
//+ передаст каждое значение в функцию, которая будет вызвана при отправке формы.

const InputField = ({ keyData, inputName,
	inputType,
	placeholder,
	register,
	required,
}: InputProps) => {
	return (
		<div className={styles.inputItem}>
			<label htmlFor={inputName} className={styles.label}> {inputName} </label>
			<input className={styles.input}
				type={inputType}
				placeholder={placeholder}
				{...register(keyData, { required })}
			/>
		</div>
	);
};

export default InputField;