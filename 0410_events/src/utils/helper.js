let supportPageOffset = window.pageXOffset !== undefined;
let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');

let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

// window.scrollTo(0, 1000);

// window.scroll();
// window.scroll(options);

window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth',
});

export const addBodyClass = (className) => {
  document.querySelector('body').classList.add(className)
}

export const removeBodyClass = (className) => {
  document.querySelector('body').classList.remove(className)
}
