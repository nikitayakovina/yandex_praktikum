import Auth from "./modules/Auth/auth";
import Chats from "./modules/Chats/chats";
import NotFound from "./modules/NotFound/notFound";
import Profile from "./modules/Profile/profile";
import SignUp from "./modules/Signup/signup";

export default class App {
    appTemplate = document.getElementById('app');
    pages = {
        redirectSignIn: new Auth(this.appTemplate),
        redirectSignUp: new SignUp(this.appTemplate),
        chats: new Chats(this.appTemplate),
        profile: new Profile(this.appTemplate),
        notFound: new NotFound(this.appTemplate)
    };

    constructor() {}

    init() {
        // this.pages.redirectSignIn.render();
        this.pages.notFound.render();

        window.addEventListener('navigate', (event) => {
            const page = event.detail.page;

            if (!this.pages[page]) {
                this.pages.notFound.render();

                return;
            }
            
            this.pages[page].render();
        });
    }
}