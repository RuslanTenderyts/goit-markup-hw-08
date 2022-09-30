(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
    };

    refs.openMenuBtn.addEventListener('click',toggLeModal);
    refs.closeMenuBtn.addEventListener('click',toggLeModal);

    function toggLeModal() {
      refs.menu.classList.toggle('is-open');
    }
  })()
    