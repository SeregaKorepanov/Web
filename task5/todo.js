// let k = 1;
const input = document.getElementById('todoInput');
function addTodo() {
	// const addButton = document.getElementById('addButton');
	// console.log(addButton);
	// console.log(addButton.textContent);
	// let i = 1;
	// addButton.textContent = 'Спасибо!';
	// addButton.textContent = 'Нажали ${i} раз';
	// addButton.textContent = 'Нажали' + i + 'раз';
	// i++;
	// k++;
	// console.log(i);
	// console.log(k);
	const list = document.getElementById('todolist');
	const item = document.createElement('li');
	const hint = document.getElementById('hint');
	// const input = document.getElementById('todoInput');
	// item.textContent = 'Задача';

	if (input.value.trim() === ''){
		hint.textContent = 'Введите текст';
		return;
	}
	let str = input.value;
	str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	item.textContent = str;
	hint.textContent = '';
	// item.textContent = input.value;
	input.value = '';
	list.appendChild(item);
	const deleteButton = document.createElement('button');
	deleteButton.textContent ='x';
	deleteButton.onclick = function() {
		list.removeChild(item);
	}
	item.appendChild(deleteButton)
}

input.addEventListener(
		'keydown',
		function(event) {
			if (event.key === 'Enter')
			addTodo();
		}
	);

