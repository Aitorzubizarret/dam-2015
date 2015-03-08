(function() {
	// Variables globales
	var storage = localStorage;
	var prefix = "toDoTasks-";

	// Capturamos los elementos que necesitamos
	var newTaskInput = document.getElementById("taskInput");
	var addTaskBtn = document.getElementById("addBtn");
	var taskList = document.getElementById("taskList");
	
	// Funciones
	var loadSavedTasks = function() {
		console.log("Cargada");
		for (var i = 1; i <= storage.length; i++) {
			createTask(storage.getItem(prefix + i));
		};
	};
	var addEventToList = function(e) {
		e.preventDefault();
		if (newTaskInput.value.trim() != '') {
			// Creamos un checkbox, que servirá para marcar que la tarea esta completada.
			var newCheckbox = document.createElement("input");
			newCheckbox.type = "checkbox";
			newCheckbox.classList.add("delete");

			// Creamos un span para meter en él la descripción de la tarea.
			var newTaskText = document.createElement("span");
			newTaskText.innerText = newTaskInput.value.trim();

			// Creamos un nuevo elemento (li) para la lista e insertamos en él el checkbox y el span.
			var newTask = document.createElement("li");
			newTask.classList.add("taskDone");
			newTask.appendChild(newCheckbox);
			newTask.appendChild(newTaskText);

			// Insertamos en el UL el nuevo elemento LI que hemos creado.
			taskList.appendChild(newTask);

			// Guardamos la tarea en el navegador
			saveTask(newTaskInput.value);

			// Limpiamos el input para que pueda meter nuevas tareas
			newTaskInput.value = "";
		}
	};
	var createTask = function(taskText) {
		// Creamos un checkbox, que servirá para marcar que la tarea esta completada.
		var newCheckbox = document.createElement("input");
		newCheckbox.type = "checkbox";
		newCheckbox.classList.add("delete");

		// Creamos un span para meter en él la descripción de la tarea.
		var newTaskText = document.createElement("span");
		newTaskText.innerText = taskText;

		// Creamos un nuevo elemento (li) para la lista e insertamos en él el checkbox y el span.
		var newTask = document.createElement("li");
		newTask.classList.add("taskDone");
		newTask.appendChild(newCheckbox);
		newTask.appendChild(newTaskText);

		// Insertamos en el UL el nuevo elemento LI que hemos creado.
		taskList.appendChild(newTask);
	};
	var saveTask = function(taskText) {
		storage.setItem(prefix + (storage.length+1), taskText);
	};
	var showTaskAsDone = function() {
		console.log("Hello");
	};

	// Listeners
	addTaskBtn.addEventListener("click", addEventToList, false);
	taskList.addEventListener("click", showTaskAsDone, false);
	window.addEventListener("load", loadSavedTasks, false);
})();