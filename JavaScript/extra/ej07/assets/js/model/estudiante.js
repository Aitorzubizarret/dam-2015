var App = App || { Model : {} };

App.Model.Estudiante = (function() {
	// Variables privadas
	var _curso;
	var _grupo;

	// Constructor
	function Estudiante(nombre, edad, genero, curso, grupo) {
		App.Model.Persona.call(this, nombre, edad, genero); // Llamámos al super
		_curso = (typeof curso === 'number') ? curso : '';
		_grupo = (typeof grupo === 'string') ? grupo : '';
	}

	// Estudiante pertenece a Persona
	Estudiante.prototype = Object.create(App.Model.Persona.prototype);
	Estudiante.prototype.Constructor = Estudiante;

	// Métodos
	Estudiante.prototype.registrar = function(curso, grupo) {
		_curso = (typeof curso === 'number') ? curso : '';
		_grupo = (typeof grupo === 'string') ? grupo : '';
	};
	Estudiante.prototype.getCurso = function() {
		return _curso;
	};
	Estudiante.prototype.setCurso = function(curso) {
		_curso = (typeof curso === 'number') ? curso : _curso;
	};
	Estudiante.prototype.getGrupo = function() {
		return _grupo;
	};
	Estudiante.prototype.setGrupo = function(grupo) {
		_grupo = (typeof grupo === 'string') ? grupo : _grupo;
	};
	Estudiante.prototype.obtDetallesEstudiante = function() {
		var respuesta1 = this.obtDetallesPersona();
		var respuesta2 = "Es estudiante y esta en el curso " + this.getCurso() + " y en el grupo " + this.getGrupo() + ".";
		return respuesta1 + " " + respuesta2;
	};

	return Estudiante;
})();