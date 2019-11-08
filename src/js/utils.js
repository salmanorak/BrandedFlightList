function slide() {
 const up = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = `${duration}ms`;
    target.style.boxSizing = 'border-box';
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
    target.parentElement.classList.remove('slideDown');
  };

  const down = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none') { display = 'flex'; }

    target.style.display = display;
    const height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = `${duration}ms`;
    target.style.height = `${height}px`;
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
    target.parentElement.classList.add('slideDown');
  };
  const toggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
      return down(target, duration);
    } 
      return up(target, duration);
  };
  return {
    up,
    down,
    toogle: toggle
  };
}
function findItemInArrayByProperty(arr, property, value) {
  return arr.find(item => item[property] === value);
}

function findParent(el, selector, type) {
  const matchCount = __(selector, type);

  return matchCount ? _(el, selector, type) : `no Item with ${selector} ${type}`;

  function _(el, selector, type) {
      if (el.parentElement === document.body) return `'no Parent with ${type} ${selector}`;
      if (type === 'class') {
          if (el.parentElement.classList.contains(selector)) return el.parentElement;
      } else if (type === 'id') {
          if (el.parentElement.id === selector) return el.parentElement;
      }
      return _(el.parentElement, selector, type);
  }

  function __(selector, type) {
      let matches;
      if (type === 'class') {
         matches = document.querySelectorAll('.'.concat(selector));
      } else if (type === 'id') {
         matches = document.querySelectorAll('#'.concat(selector));
      }
      return matches.length;
  }
}

export { slide, findItemInArrayByProperty, findParent };
