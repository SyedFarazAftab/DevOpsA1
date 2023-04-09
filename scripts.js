const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'red';
  });

  link.addEventListener('mouseout', () => {
    link.style.color = 'black';
  });
});

const skillDetails = document.querySelector('.skill-details');
const skillButton = document.querySelector('.skill-button');
const closeButton = document.querySelector('.close-button');

skillButton.addEventListener('click', () => {
  skillDetails.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  skillDetails.style.display = 'none';
});