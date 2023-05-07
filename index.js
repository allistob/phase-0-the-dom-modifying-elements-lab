// Write your code here!
const nodeToRemove = document.querySelector('main#main');
nodeToRemove.remove();
const newHeader = document.createElement('h1');
newHeader.textContent = 'New Header Text';
newHeader.classList.add('header-class');
newHeader.setAttribute('id', 'victory');
const yourName = 'Allison';
newHeader.textContent = `${yourName} is the champion`;
newHeader.classList.add('header-class');
newHeader.setAttribute('id', 'victory');
document.body.appendChild(newHeader);