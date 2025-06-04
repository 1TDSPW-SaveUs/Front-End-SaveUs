document.addEventListener('DOMContentLoaded', () => {
    const backToTopLink = document.querySelector('a[href="#topo"]');

    if (backToTopLink) {
        backToTopLink.addEventListener('click', function(e) {
            e.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});