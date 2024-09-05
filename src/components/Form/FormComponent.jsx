import {useRef, useState} from "react";
import {Form, ButtonContainer, Button, ErrorMessage, MessageContainer, SuccessMessage, Header} from "./style.js";
import {config, initialState, initialErrorsState} from "../../config.js";
import InputComponent from "../Input/InputComponent.jsx";

const FormComponent = () => {

    const [status, setStatus] = useState('idle');
    const [formState, setFormState] = useState(initialState);
    const [errors, setErrors] = useState(initialErrorsState);
    const [name, setName] = useState('');

    const typingTimeoutRef = useRef(null);

    const setFieldErrors = (name, value) => {
        let error = '';

        switch (name) {
            case 'login':
                const regexp = /^\S+@\S+\.\S+$/;
                error = !value ? 'Введите логин!' : !regexp.test(value) ? 'Логин должен быть в формате электронной почты' : '';
                break;
            case 'password':
                error = !value ? 'Введите пароль!' : '';
                break;
            default:
                break;
        }

        setErrors((prevState) => ({...prevState, [name]: error}));
    }

    const dataCompleted = () => {
        return Object.values(formState).every((data) => data !== '') &&
            Object.values(errors).every((error) => error === '')
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormState((prevState) => ({...prevState, [name]: value}));

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            setFieldErrors(name, value);
        }, 1000);
    }

    const handleBlur = (e) => {
        const {name, value} = e.target;
        setFieldErrors(name, value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (dataCompleted()) {
            fetch('https://66d8314837b1cadd8053c03e.mockapi.io/form/v1/usersfordz')
                .then(res => res.json())
                .then(data => {
                    let user = data.find(user => (user.login === formState.login));
                    if (user && user.password === formState.password) {
                        setStatus('success');
                        setName(user.name);
                    } else {
                        setStatus('notFind');
                    }
                })
                .catch(error => {
                    setStatus('networkError')
                    console.log(error);
                });
        }
    }

    const handleReset = () => {
        setFormState(initialState);
        setErrors(initialErrorsState);
        setStatus('idle');
        setName('');
    }

    return (
        <>
            {status === 'success'
                ? (<SuccessMessage>{`Добро пожаловать, ${name}!`}</SuccessMessage>)
                : (<Form onSubmit={handleSubmit}>
                        <Header>Войдите в систему</Header>
                        {config.map(input => {
                            return (
                                <InputComponent
                                    key={input.name}
                                    type={input.type}
                                    name={input.name}
                                    value={formState[input.name]}
                                    labelText={input.labelText}
                                    placeholder={input.placeholder}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors[input.name]}
                                />
                            )
                        })}
                        <ButtonContainer>
                            <Button type='button' onClick={handleReset}>Очистить</Button>
                            <Button type='submit' disabled={!dataCompleted()}
                                    data-disabled={dataCompleted()}>Войти</Button>
                        </ButtonContainer>
                        <MessageContainer>
                            {status === 'notFind' && <ErrorMessage>Неверный логин или пароль</ErrorMessage>}
                            {status === 'networkError' && <ErrorMessage>Повторите попытку позже</ErrorMessage>}
                        </MessageContainer>
                    </Form>
                )}
        </>)
};

export default FormComponent;