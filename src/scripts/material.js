import {MDCRipple} from '@material/ripple/index';

/**
 * Instatiates material design components.
 */
export default function initMDC() {
  const ripples = document.querySelectorAll('.mdc-ripple-surface');

  ripples.forEach((ripple) => new MDCRipple(ripple));
}

