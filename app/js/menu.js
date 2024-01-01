(() => {
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const modal = document.querySelector("[data-modal]");

    openMenuBtn.addEventListener("click", toggleModal);
    closeMenuBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal.classList.toggle("is-hidden");

        if (modal.classList.contains("is-hidden")) {
            disableScroll();
        } else {
            enableScroll();
        }
    }

    function disableScroll() {
        document.body.style.overflow = "hidden";
        modal.style.overflowY = "auto";
    }

    function enableScroll() {
        document.body.style.overflow = '';
    }
})();