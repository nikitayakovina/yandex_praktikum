import profile from '../../pages/profile.hbs';
import '../../modules/Profile/profile.scss';
import Handlebars from "handlebars";
import ProfileInfo from '../../components/ProfileInfo/profileInfo';
import ProfileSelected from '../../components/ProfileSelected/profileSelected';
import { profilesList, inputsProfileSettings } from '../../models/profiles';
import { onCustomEvent } from '../../utils/event.js';

Handlebars.registerPartial('ProfileSelected', ProfileSelected);
Handlebars.registerPartial('ProfileInfo', ProfileInfo);

export default class Profile {
    container;
    template;
    profile;
    data = {
        profiles: profilesList,
        inputsProfileSettings
    };
    mode;

    constructor(container) {
        this.container = container;
    }

    displayTemplate() {
        this.container.innerHTML = profile(this.data);

        if (this.data?.profile) {
            document.getElementById('main').addEventListener('click', (event) => {
                const actionElement = event.target.closest('.action');
                const actionId = actionElement?.dataset?.id;
    
                if (!actionElement) {
                    return;
                }

                if (actionId === 'changeData') {
                    // save
                } else if (actionId === 'changePassword') {
                    this.mode = 'changePassword';
                    this.data.profile = { ...this.data.profile, mode: this.mode };
                    this.displayTemplate();
                } else if (actionId === 'exit') {
                    onCustomEvent('redirectSignIn');
                } else if (actionId === 'cancel') {
                    this.mode = null;
                    this.data.profile = { ...this.data.profile, mode: this.mode };
                    this.displayTemplate();
                } else if (actionId === 'save') {
                    // savePassword
                } else if (actionId === 'changePhoto') {
                    // changePhoto
                }
            })
        }

        document.getElementById('profiles__sidebar__list').addEventListener('click', (event) => {
            const profileElement = event.target.closest('.profile');

            if (profileElement) {
                profilesList.forEach(item => item.selected = false);

                const profile = profilesList.find(profile => Number(profile.id) === Number(profileElement?.dataset?.id));
                profile.selected = true;

                this.data = { ...this.data, profile };
                this.displayTemplate();
            }
        })

        document.getElementById('profiles__sidebar__header').addEventListener('click', (event) => {
            // назад
        })
    }

    render() {
        this.displayTemplate();
    }
}
