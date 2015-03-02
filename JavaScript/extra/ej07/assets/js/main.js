(function() {

	/*
		PERSONA
	*/
	console.log("Persona\n -------\n");
	var persona1 = new App.Model.Persona('Jon', 20, 'Hombre');
	console.log(persona1.obtDetallesPersona());
	console.log("Nombre : " + persona1.getNombre());
	console.log("Edad : " + persona1.getEdad());
	console.log("Género : " + persona1.getGenero());

	// Cambiamos los valores de las variables de Persona con su propios métodos.
	console.log("\n")
	persona1.setNombre('Ane');
	persona1.setEdad(30);
	persona1.setGenero('Mujer');
	console.log(persona1.obtDetallesPersona());
	console.log("Nombre : " + persona1.getNombre());
	console.log("Edad : " + persona1.getEdad());
	console.log("Género : " + persona1.getGenero());


	/*
		ESTUDIANTE
	*/
	console.log("\n Estudiante\n ----------");
	var estudiante1 = new App.Model.Estudiante('Miren', 25, 'Mujer', 1, 'A');
	console.log(estudiante1.obtDetallesEstudiante());
	console.log("Curso : " + estudiante1.getCurso());
	console.log("Grupo : " + estudiante1.getGrupo());

	// Cambiamos los valores de las variables de Estudiante con sus propios métodos.
	console.log("\n")
	estudiante1.setCurso(2);
	estudiante1.setGrupo('B');
	console.log(estudiante1.obtDetallesEstudiante());
	console.log("Curso : " + estudiante1.getCurso());
	console.log("Grupo : " + estudiante1.getGrupo());

	// Cambiamos los valores de las variables de Persona (Estudiante es una Persona) y utilizamos los métodos de Persona.
	// Al ejecutar los métodos desde estudiante (como no los encuentra), buscará en su padre (Persona) y los ejecutará en Estudiante con el contexto de estudiante.
	console.log("\n")
	estudiante1.setNombre("Eneko");
	estudiante1.setEdad(45);
	estudiante1.setGenero('Hombre');
	console.log(estudiante1.obtDetallesEstudiante());
	console.log("Nombre : " + estudiante1.getNombre());
	console.log("Edad : " + estudiante1.getEdad());
	console.log("Género : " + estudiante1.getGenero());


	/*
		PROFESOR
	*/
	console.log("\n Profesor\n --------");
	var profesor1 = new App.Model.Profesor('Mikel', 35, 'Hombre', 'Matemáticas', 2);
	console.log(profesor1.obtDetallesProfesor());
	console.log("Asignatura : " + profesor1.getAsignatura());
	console.log("Nivel : " + profesor1.getNivel());

	// Cambiamos los valores de las variables de Profesor con sus propios métodos.
	console.log("\n")
	profesor1.setAsignatura('Programación');
	profesor1.setNivel(3);
	console.log(profesor1.obtDetallesProfesor());
	console.log("Asignatura : " + profesor1.getAsignatura());
	console.log("Nivel : " + profesor1.getNivel());

	// Cambiamos los valores de las variables de Persona (Profesor es una Persona) y utilizamos los métodos de Persona.
	// Al ejecutar los métodos desde profesor (como no los encuentra), buscará en su padre (Persona) y los ejecutará en Profesor con el contexto de profesor.
	console.log("\n")
	profesor1.setNombre("Leire");
	profesor1.setEdad(25);
	profesor1.setGenero("Mujer");
	console.log(profesor1.obtDetallesProfesor());
	console.log("Nombre : " + profesor1.getNombre());
	console.log("Edad : " + profesor1.getEdad());
	console.log("Género : " + profesor1.getGenero());


})();