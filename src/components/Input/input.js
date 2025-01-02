import './input.scss';

export default `
    <div class="form">
        <label class="label" for="{{ labelFor }}">{{ label }}</label>
        <input class="input" id="{{ id }}" name="{{ name }}" type="{{ type }}" placeholder="{{ placeholder }}">
    </div>
`;