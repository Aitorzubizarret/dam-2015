(function() {
	// Variables globales
	var storage = localStorage;
	var prefix = "toDos-";

	// Capturamos los elementos que necesitamos
	var newTodoInput = document.getElementById("todoInput");
	var addTodoBtn = document.getElementById("addBtn");
	var todoList = document.getElementById("todoList");
	
	// Funciones
	var loadSavedTodos = function() {
		for (var i = 1; i <= storage.length; i++) {
			if (storage.getItem(prefix + i)) {
				createTodo(storage.getItem(prefix + i));
			}
		}
	};
	var addTodoToList = function(e) {
		e.preventDefault();
		if (newTodoInput.value.trim() !== '') {
			createTodoAndSave(newTodoInput.value.trim());

			// Limpiamos el input para que pueda meter nuevas tareas
			newTodoInput.value = "";
		}
	};
	var createTodo = function(todoText) {
		// Creamos un checkbox, que servirá para marcar que la tarea esta completada.
		var newCheckbox = document.createElement("input");
		newCheckbox.type = "checkbox";
		newCheckbox.classList.add("delete");

		// Creamos un span para meter en él la descripción de la tarea.
		var newTodoText = document.createElement("span");
		newTodoText.innerText = todoText;

		// Creamos un nuevo elemento (li) para la lista e insertamos en él el checkbox y el span.
		var newTodo = document.createElement("li");
		newTodo.appendChild(newCheckbox);
		newTodo.appendChild(newTodoText);

		// Insertamos en el UL el nuevo elemento LI que hemos creado.
		todoList.appendChild(newTodo);
	};
	var createTodoAndSave = function(todoText) {
		createTodo(todoText);
		// Guardamos la tarea en el navegador
		saveTodo(todoText);
	};
	var saveTodo = function(todoText) {
		storage.setItem(prefix + (storage.length+1), todoText);
	};
	var toggleDoneUndone = function(e) {
		if (e.target.type === "checkbox") {
			var textSpan = e.target.parentNode.getElementsByTagName("span");
			if (e.target.checked) {
				textSpan[0].classList.add("todoDone");
			} else {
				textSpan[0].classList.remove("todoDone");
			}
		}
	};

	// Listeners
	addTodoBtn.addEventListener("click", addTodoToList, false);
	todoList.addEventListener("click", toggleDoneUndone, false);
	window.addEventListener("load", loadSavedTodos, false);
})();