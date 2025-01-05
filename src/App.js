import Auth from "./modules/Auth/auth";
import Chats from "./modules/Chats/chats";
import NotFound from "./modules/NotFound/notFound";
import Profile from "./modules/Profile/profile";
import SignUp from "./modules/Signup/signup";

export default class App {
    appTemplate = document.getElementById('app');
    pages = {
        signin: new Auth(this.appTemplate),
        signup: new SignUp(this.appTemplate),
        chats: new Chats(this.appTemplate),
        profile: new Profile(this.appTemplate),
        notFound: new NotFound(this.appTemplate),
    };

    constructor() {}

    init() {
        this.pages['profile'].render();

        window.addEventListener('popstate', (event) => {
            event.stopPropagation();

            const href = window.location.href;
            const link = href.split('/').reverse()[0];

            if (!this.pages[link]) {
                // redirect 404
                return;
            }
            
            this.pages[link].render();
        });
    }
}