import profile from '../../pages/profile.hbs';
import '../../modules/Profile/profile.scss';
import Handlebars from "handlebars";
import ProfileInfo from '../../components/ProfileInfo/profileInfo';
import ProfileSelected from '../../components/ProfileSelected/profileSelected';
import { profilesList, inputsProfileSettings } from '../../models/profiles';

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

        document.getElementById('profiles__sidebar__list').addEventListener('click', (event) => {
            const profileElement = event.target.closest('.profile');

            if (profileElement) {
                const profile = profilesList.find(profile => Number(profile.id) === Number(profileElement?.dataset?.id));

                this.data = { ...this.data, profile };
                this.displayTemplate();

                document.getElementById('main__actions').addEventListener('click', (event) => {
                    const actionElement = event.target.closest('.action');
                    const actionId = actionElement?.dataset?.id;
                    console.log(actionId)
        
                    if (actionElement && actionId === 'changeData') {

                    } else if (actionElement && actionId === 'changePassword') {
                        this.mode = 'changePassword';
                        this.data.profile = { ...this.data.profile, mode: this.mode };
                        this.displayTemplate();
                    } else if (actionElement && actionId === 'exit') {
                        
                    }
                })
            }
        })

        
    }

    render() {
        this.displayTemplate();
    }
}