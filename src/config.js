export const config = [
    {
        name: 'login',
        labelText: 'Логин',
        placeholder: 'Введите адрес электронной почты',
        type: 'email',
    },
    {
        name: 'password',
        labelText: 'Пароль',
        placeholder: 'Введите пароль',
        type: 'password',
    },

]

export const initialState = {
    login: '',
    password: '',
}

export const initialErrorsState = {
    login: '',
    password: '',
}


