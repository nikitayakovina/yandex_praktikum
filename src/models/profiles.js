// профили
export const profilesList = [
    {
        id: '1',
        imgSrc: 'src/static/circle_gray.svg',
        name: 'test',
        login: 'test',
        password: 'password',
        email: 'email',
        first_name: 'first_name',
        second_name: 'second_name',
        display_name: 'display_name',
        phone: 'phone',
        selected: false
    },
    {
        id: '2',
        imgSrc: 'src/static/circle_gray.svg',
        login: 'test2',
        password: 'password2',
        email: 'email2',
        first_name: 'first2_name',
        second_name: 'second2_name',
        display_name: 'display2_name',
        phone: 'phone2',
        selected: false
    },
];

// inputs для настроек профиля
export const inputsProfileSettings = [
    {
        labelFor: "password",
        label: "Пароль",
        id: "password",
        name: "password",
        placeholder: "Введите пароль"
    },
    {
        labelFor: "login",
        label: "Логин",
        id: "login",
        name: "login",
        placeholder: "Введите логин"
    },
    {
        labelFor: "email",
        label: "Почта",
        id: "email",
        name: "email",
        placeholder: "Введите почту"
    },
    {
        labelFor: "first_name",
        label: "Имя",
        id: "first_name",
        name: "first_name",
        placeholder: "Введите имя"
    },
    {
        labelFor: "second_name",
        label: "Фамилия",
        id: "second_name",
        name: "second_name",
        placeholder: "Введите фамилию"
    },
    {
        labelFor: "display_name",
        label: "Отображаемое имя",
        id: "display_name",
        name: "display_name",
        placeholder: "Введите отображаемое имя"
    },
    {
        labelFor: "phone",
        label: "Телефон",
        id: "phone",
        name: "phone",
        placeholder: "Введите телефон"
    },
];