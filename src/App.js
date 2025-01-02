import Handlebars from "handlebars";
import Auth from "./modules/Auth/auth";
import NotFound from "./modules/NotFound/notFound";
import SignUp from "./modules/Signup/signup";

export default class App {
    appTemplate = document.getElementById('app');
    pages = {
        signin: new Auth(this.appTemplate),
        signup: new SignUp(this.appTemplate),
        notFound: new NotFound(this.appTemplate),
    };

    constructor() {}

    init() {
        // TODO: вынести в сервис routing
        // const route = window.location.hash.split('/')[1] || 'notFound';
        // const appTemplate = document.getElementById('app');
    
        this.pages['signin'].render();

        window.addEventListener('popstate', (event) => {
            event.stopPropagation();

            const href = window.location.href;
            const link = href.split('/').reverse()[0];
            
            this.pages[link].render();
        });
    }
}