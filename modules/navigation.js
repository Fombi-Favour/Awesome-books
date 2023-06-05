const handlePageChange = (e) => {
  const navLinks = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].style.color = '';
  }

  if (e.target.classList.contains('list')) {
    document.querySelector('#book-display').style.display = 'block';
    document.querySelector('#add-book').style.display = 'none';
    document.querySelector('#contact').style.display = 'none';
  } else if (e.target.classList.contains('addBook')) {
    document.querySelector('#book-display').style.display = 'none';
    document.querySelector('#add-book').style.display = 'block';
    document.querySelector('#contact').style.display = 'none';
  } else if (e.target.classList.contains('contactInfo')) {
    document.querySelector('#book-display').style.display = 'none';
    document.querySelector('#add-book').style.display = 'none';
    document.querySelector('#contact').style.display = 'block';
  }
};

export default handlePageChange;
