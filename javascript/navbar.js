/*
* = = = =  nav toggle = = =  =
* */
// Select button and links
const navBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

  // add an event listener for opening and closing the menu button
  navBtn.addEventListener('click', () => {
    links.classList.toggle('show-links');
  });

/*
* = = = = Smooth Scroll = = = =
* */
// Select links

const scrollLinks = document.querySelectorAll('.scroll-link');
  scrollLinks.forEach( link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      links.classList.remove('show-links');

      const id = e.target.getAttribute('href').slice(1);
      const element = document.getElementById(id);

      let position = element.offsetTop - 62;

      window.scrollTo({
        left : 0,
        top : position,
        behavior : 'smooth',
      });
    });
  });