(function(){
	var cookingCalendarApp = angular.module("cookingCalendarApp", []);

	cookingCalendarApp.controller("ProductsListCtrl", function(){
		this.product = list;
	});

	var list = {
		title: "Nombre del plato"
	};
	var products = [
		{
			id: 1,
			title: "Plato 1",
			description: "Descripción del plato 1",
			img: "plato1.jpg"
		},
		{
			id: 2,
			title: "Plato 2",
			description: "Descripción del plato 2",
			img: "plato2.jpg"
		}
	];

})();
