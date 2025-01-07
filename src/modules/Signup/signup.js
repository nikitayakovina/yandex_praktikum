import signup from '../../pages/signup.hbs';
import '../../modules/SignUp/signup.scss';

export default class SignUp {
    container;
    template;

    constructor(container) {
        this.container = container;
    }

    render() {
        const data = {
            title: 'Регистрация',
            inputs: [
                {
                    labelFor: "firstName",
                    label: "Имя",
                    id: "firstName",
                    name: "firstName",
                    placeholder: "Введите имя"
                },
                {
                    labelFor: "secondName",
                    label: "Фамилия",
                    id: "secondName",
                    name: "secondName",
                    placeholder: "Введите фамилию"
                },
                {
                    labelFor: "login",
                    label: "Логин",
                    id: "login",
                    name: "login",
                    placeholder: "Введите логин"
                },
                {
                    labelFor: "password",
                    label: "Пароль",
                    id: "password",
                    name: "password",
                    placeholder: "Введите пароль"
                },
                {
                    labelFor: "phone",
                    label: "Телефон",
                    id: "phone",
                    name: "phone",
                    placeholder: "Введите телефон"
                },
            ],
            footer: {
                title: 'Зарегистрироваться',
                linkText: 'Войти',
                id: 'signUp',
                link: 'redirectSignIn'
            }
        };

        this.container.innerHTML = signup(data);


        document.getElementById('footer').addEventListener('click', (event) => {
            const element = event.target.closest('.action');
            const id = element?.dataset?.id;
            
            if (id === 'signUp') {
                this.redirect('chats');
            } else {
                this.redirect(id);
            }
        });
    }

    redirect(page) {
        window.dispatchEvent(new CustomEvent('navigate', { detail: { page } }));
    }
}