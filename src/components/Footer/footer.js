import './footer.scss';

export default `
    <div class="footer">
        <button class="footer__button" id="signin">
            <span>{{ title }}</span>
        </button>
        <a href="#/{{link}}" class="footer__link">{{ linkText }}</a>
    </div>
`;