function animation() {
    const slideUp = (target, duration = 500) => {
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
    const slideDown = (target, duration = 500) => {
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
    const slideToggle = (target, duration = 500) => {
      if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
      } 
        return slideUp(target, duration);
    };
    const fadeIn = (target, duration = 0.3) => {
        const interval = 10;//ms
        let op = 0.0;
        const iop = 1;
        const timer = setInterval(() => {
            if (op >= iop) {
                op = iop;
                clearInterval(timer);
            }
            target.style.opacity = op;
            op += iop / ((1000 / interval) * duration);
        }, interval);
    };
    const fadeOut = (target, duration = 0.5) => {
      const interval = 10;//ms
      let op = 1.0;
      const iop = 1;
      const timer = setInterval(() => {
          if (op <= 0) {
              op = iop;
              clearInterval(timer);
          }
          target.style.opacity = op;
          op -= iop / ((1000 / interval) * duration);
      }, interval);
  };
  return {
    slideUp,
    slideDown,
    slideToogle: slideToggle,
    fadeIn,
    fadeOut
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

export { animation, findItemInArrayByProperty, findParent };
