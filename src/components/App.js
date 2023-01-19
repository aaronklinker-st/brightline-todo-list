import template from './app.template.html?raw';
import Brightline from 'brightline.js/src/Brightline.min';

export function App(todos) {
    const brightline = new Brightline(template);
    brightline.each(todos, "list-item");
    return brightline.render();
}
