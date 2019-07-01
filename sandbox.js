//first step: query the DOM element
// const button = document.querySelector('button');
//
// //second step: add event listener
// button.addEventListener('click', () => {
//   console.log('you cliked me');
// });

const items = document.querySelectorAll('li');

items.forEach(item =>{
  item.addEventListener('click', event =>{
    // console.log('item clicked');
    // console.log(event);
    // console.log(event.target);
    event.target.style.textDecoration = 'line-through';

  });

});
