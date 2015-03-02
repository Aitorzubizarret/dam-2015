var App = App || { Model : {} };

App.Model.Persona = (function() {
	// Variables privadas
	var _nombre;
	var _edad;
	var _genero;

	// Constructor
	function Persona(nombre, edad, genero) {
		_nombre = (typeof nombre === 'string') ? nombre : 'Desconocido';
		_edad = ((typeof edad === 'number')&&(edad > 0)) ? edad : 0;
		_genero = (typeof genero === 'string') ? genero : '';
	}

	// Métodos
	Persona.prototype.getNombre = function() {
		return _nombre;
	};
	Persona.prototype.setNombre = function(nombre) {
		_nombre = (typeof nombre === 'string') ? nombre : _nombre;
	};
	Persona.prototype.getEdad = function() {
		return _edad;
	};
	Persona.prototype.setEdad = function(edad) {
		_edad = (typeof edad === 'number') ? edad : _edad;
	}
	Persona.prototype.getGenero = function() {
		return _genero;
	};
	Persona.prototype.setGenero = function(genero) {
		_genero = (typeof genero === 'string') ? genero : _genero;
	};
	Persona.prototype.obtDetallesPersona = function() {
		var respuesta = "La persona se llama " + this.getNombre() + ", tiene " + this.getEdad() + " años y es " + this.getGenero() + ".";
		return respuesta;
	};

	return Persona;
})();