import './profileSelected.scss';

export default `
    <div class="profile {{#if selected}}selected{{/if}}" id="profile" data-id="{{ id }}">
        <div class="profile__image">
            <img src="{{ imgSrc }}">
        </div>
        <div class="profile__info">
            <div class="profile__info-name">{{ first_name }}</div>
            <div class="profile__info-login">{{ login }}</div>
        </div>
        <div class="profile__arrow">
            <img src="src/static/img/arrow.svg">
        </div>
    </div>
`;