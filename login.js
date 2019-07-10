import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));

// Because we don't need to retain a reference to the ripple instance, there's no need to assign it to a variable.
new MDCRipple(document.querySelector('.cancel'));
new MDCRipple(document.querySelector('.next'));