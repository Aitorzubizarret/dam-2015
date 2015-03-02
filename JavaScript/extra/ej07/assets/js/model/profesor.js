var App = App || { Model : {} };

App.Model.Profesor = (function() {
	// Variables privadas
	var _asignatura;
	var _nivel;	

	// Constructor
	function Profesor(nombre, edad, genero, asignatura, nivel) {
		App.Model.Persona.call(this, nombre, edad, genero); // Llamámos al super
		_asignatura = (typeof asignatura === 'string') ? asignatura : '';
		_nivel = (typeof nivel === 'number') ? nivel : 0;
	}

	// Profesor pertenece a Persona
	Profesor.prototype = Object.create(App.Model.Persona.prototype);
	Profesor.prototype.Constructor = Profesor;

	// Métodos
	Profesor.prototype.asignar = function(asignatura, nivel) {
		_asignatura = (typeof asignatura === 'string') ? asignatura : '';
		_nivel = (typeof nivel === 'number') ? nivel : 0;
	};
	Profesor.prototype.getAsignatura = function() {
		return _asignatura;
	};
	Profesor.prototype.setAsignatura = function(asignatura) {
		_asignatura = (typeof asignatura === 'string') ? asignatura : _asignatura;
	};
	Profesor.prototype.getNivel = function() {
		return _nivel;
	};
	Profesor.prototype.setNivel = function(nivel) {
		_nivel = (typeof nivel === 'number') ? nivel : _nivel;
	}
	Profesor.prototype.obtDetallesProfesor = function() {
		var respuesta1 = this.obtDetallesPersona();
		var respuesta2 = "Imparte la asignatura de " + this.getAsignatura() + " y su nivel es " + this.getNivel() + ".";
		return respuesta1 + " " + respuesta2;
	};

	return Profesor;
})();