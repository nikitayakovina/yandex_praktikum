import auth from '../../pages/auth.hbs';
import Handlebars from "handlebars";
import '../../modules/Auth/auth.scss';
import Input from '../../components/Input/input.js';
import Footer from '../../components/Footer/footer.js';
import chats from '../../pages/chats.hbs';

Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('Footer', Footer);

export default class Auth {
    container;
    template;

    constructor(container) {
        this.container = container;
    }

    render() {
        const data = {
            title: 'Вход',
            inputs: [
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
                }
            ],
            footer: {
                title: 'Войти',
                linkText: 'Нет аккаунта?',
                link: 'signup'
            }
        };

        this.container.innerHTML = auth(data);

        document.getElementById('signin').addEventListener('click', () => {
            this.container.innerHTML = chats();
        })
    }
}