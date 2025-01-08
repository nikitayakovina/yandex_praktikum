import notFound from '../../pages/notFound.hbs';
import './notFound.scss';
import Handlebars from "handlebars";
import Error from '../../components/Error/error.js';
import { onCustomEvent } from '../../utils/event.js';

Handlebars.registerPartial('Error', Error);

export default class NotFound {
    container;
    template = document.getElementById('notFound');

    constructor(container) {
        this.container = container;
    }

    render(code = 500) {
        const data = {
            code,
            text: this.textByCode(code)
        };

        this.container.innerHTML = notFound(data);

        document.getElementById('error__link').addEventListener('click', event => {
            onCustomEvent('chats')
        })
    }

    textByCode(code) {
        return Number(code) === 404 ? 'Страница не найдена' : 'Ошибка на стороне сервера';
    }
}
