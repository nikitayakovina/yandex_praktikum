export default class NotFound {
    container;
    template = document.getElementById('notFound');

    constructor(container) {
        this.container = container;
    }

    render() {
        const template = Handlebars.compile(this.template.innerHTML);
    }
}