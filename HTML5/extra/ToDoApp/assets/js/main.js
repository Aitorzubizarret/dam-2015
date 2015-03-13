(function() {
	// Variables globales
	var ToDos = []; // Aqui tendremos un array de objectos. Cada objecto será una tarea.
	var storage = localStorage; // Tecnología que utilizaremos para guardar los datos.
	var prefix = "ToDo";
	var lastID; // Last ID number used in a ToDo. It'll identify any ToDO.

	// Capturamos los elementos que necesitamos
	var newTodoInput = document.getElementById("todoInput");
	var addTodoBtn = document.getElementById("addBtn");
	var todoList = document.getElementById("todoList");
	
	// Funciones
	var getToDos = function() {
		if (storage.length > 0) {
			for(var i = 0; i < storage.length; i++) {
				if (storage.key(i) === prefix) {
					ToDos = JSON.parse(storage.getItem(storage.key(i)));
					lastID = ToDos[ToDos.length-1].id;
					lastID = lastID + 1;
				} else {
					lastID = 0;
				}
			}
			showToDoList();
		} else {
			lastID = 0;
		}
	};
	var showToDoList = function() {
		if (ToDos.length > 0) {
			for (var i = 0; i < ToDos.length; i++) {
				addToDoToList(ToDos[i].id, ToDos[i].text, ToDos[i].isDone);
			}
		}
	};
	var addTodo = function(e) {
		e.preventDefault();
		if (newTodoInput.value.trim() !== '') {
			addToDoToList(lastID, newTodoInput.value.trim(), false);
			saveTodo(newTodoInput.value.trim());
			newTodoInput.value = ""; // Limpiamos el input para nuevas tareas
		}
	};
	var addToDoToList = function(id, text, isDone) {
		// Creamos un checkbox, que servirá para marcar que la tarea esta completada.
		var newCheckbox = document.createElement("input");
		newCheckbox.type = "checkbox";
		newCheckbox.classList.add("delete");

		// Creamos un span para meter en él la descripción de la tarea.
		var newTodoText = document.createElement("span");
		newTodoText.innerText = text;

		// Creamos un botón para eliminar la tarea
		var newDeleteBtn = document.createElement("button");
		newDeleteBtn.classList.add("deleteBtn");
		newDeleteBtn.innerText = "-";

		// Comprobamos si la tarea esta hecha o no
		if (isDone) {
			newTodoText.classList.add("todoDone"); // Aparecerá tachada
			newCheckbox.checked = true; // El checkbox aparecera 'checked'
		}

		// Creamos un nuevo elemento (li) para la lista e insertamos en él los elementos de arriba.
		var newTodo = document.createElement("li");
		newTodo.setAttribute('data-id', id);
		newTodo.appendChild(newCheckbox);
		newTodo.appendChild(newTodoText);
		newTodo.appendChild(newDeleteBtn);

		// Insertamos en el UL el nuevo elemento LI que hemos creado.
		todoList.appendChild(newTodo);
	};
	var saveTodo = function(text) {
		var ToDo = {
			id: lastID,
			text : text,
			isDone : false
		};
		ToDos.push(ToDo); // Update de array of ToDos
		updateLocalToDos(); // Actualizar el array guardado localmente
		lastID = lastID + 1;
	};
	var updateLocalToDos = function() {
		storage.setItem(prefix, JSON.stringify(ToDos));
	};
	var deleteTodo = function(e) {
		if (e.target.type === "submit") {
			var li = e.target.parentNode;
			var todoId = li.getAttribute('data-id');
			getToDoPosition(todoId, function(position) {
				todoList.removeChild(li); // Eliminar el li
				ToDos.splice(position, 1); // Eliminar el objeto del array
				updateLocalToDos(); // Actualizar el array guardado localmente
			});
		}
	};
	var toggleDoneUndone = function(e) {
		if (e.target.type === "checkbox") {
			var li = e.target.parentNode;
			var todoId = li.getAttribute('data-id');
			var span = e.target.parentNode.getElementsByTagName("span");

			if (e.target.checked) {
				getToDoPosition(todoId, function(position) {
					span[0].classList.add("todoDone");
					ToDos[position].isDone = true;
					updateLocalToDos();
				});
			} else {
				getToDoPosition(todoId, function(position) {
					span[0].classList.remove("todoDone");
					ToDos[position].isDone = false;
					updateLocalToDos();
				});
			}
		}
	};
	var getToDoPosition = function(id, success) {
		var position;
		for (var i = 0; i < ToDos.length; i++) {
			if (parseInt(ToDos[i].id) === parseInt(id)) {
				position = i;
				i = ToDos.length;
			}
		}
		if (position >= 0) {
			success(position);
		}
	};
	var updateToDoStatus = function(data) {
		console.log("El elemento esta en " + data.position + " y su estado es " + data.status);
	};

	// Listeners
	window.addEventListener("load", getToDos, false);
	addTodoBtn.addEventListener("click", addTodo, false);
	todoList.addEventListener("click", deleteTodo, false);
	todoList.addEventListener("click", toggleDoneUndone, false);

	// Dataset
	// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
})();