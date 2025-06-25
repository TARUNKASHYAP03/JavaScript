const heading =document.querySelector('#heading');
const paragraph = document.querySelectorAll('.para');
const main=document.querySelector('main');
heading.innerHTML = 'Hello World';
paragraph.forEach((p, index) => {
    p.innerHTML = `This is paragraph ${index + 1}.`;
});

heading.style.color = 'blue';
paragraph.forEach((p, index) => {
    p.style.color = index % 2 === 0 ? 'green' : 'red';
});

const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'This is a new paragraph added to the DOM.';
document.body.appendChild(newParagraph);

