import $ from 'jQuery';

const OFFSET = 0.8;
const SHOWN_CLASS = '-shown';
const TRANSITION_CLASS = '-transition';

// eslint-disable-next-line max-len
const isElementScrolledPast = (element: HTMLElement, offset: number): boolean => $(element).offset().top <= $(window).scrollTop() + $(window).height() * offset;

const showContent = (elements: JQuery<HTMLElement>) => {
  elements.each((index: number, element: HTMLElement) => {
    if (
      isElementScrolledPast(element, OFFSET) && !$(element).hasClass(SHOWN_CLASS)
    ) {
      $(element).removeClass(TRANSITION_CLASS);
      $(element).addClass(SHOWN_CLASS);
    }
  });
};

export const onMount = () => {
  setTimeout(() => {
    $('.hero-container').addClass('-shown');
  }, 650);
};

export const setupPageContent = (): void => {
  const checkPageContent = !window.requestAnimationFrame
    ? () => {
      setTimeout(() => {
        showContent($('.-transition'));
      }, 100);
    }
    : () => {
      window.requestAnimationFrame(() => {
        showContent($('.-transition'));
      });
    };
  $(window).on('scroll', checkPageContent);
};
