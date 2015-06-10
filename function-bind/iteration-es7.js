let { map, filter } = Array.prototype;
let todoItems = document.querySelectorAll('ul.my-list > li');

let completedItems = todoItems::filter(item => item.dataset.completed);
let titles = todoItems::map(item => item.textContent);
