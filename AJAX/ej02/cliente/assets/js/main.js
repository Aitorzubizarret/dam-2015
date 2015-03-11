$(function() {
    // Variables
    var options = [];
    var strProvincias = '../servidor/cargaProvinciasJSON.php';
    var strMunicipios = '../servidor/cargaMunicipiosJSON.php';

    // Elementos
    $selectProvincias = $('#selectProvincias');
    $selectMunicipios = $('#selectMunicipios');

    // Funciones
    /*
    var getData = function (url, metodo, parametro, select) {
        if (metodo === 'get') {
            $.getJSON(url, null, function() {

            });
        } else if (metodo === 'post') {
            $.ajax(url, {
                method : metodo,
                data : {
                    provincia : parametro
                },
                dataType : 'json',
                success : function() {

                }
            });
        }
    };
    */

    var loadSelect = function(url, funcion, parametro, select) {
        if (funcion === 'get') {
            $.getJSON(url, null, function(provincias) {
                options.push(new Option("Selecciona una provincia", null));
                for (var cp in provincias) {
                    options.push(new Option(provincias[cp], cp));
                }
                /*
                $.each(provincias, function(index, value) {
                    options.push(new Option(value, index)); // Creamos un option
                    //$selectProvincias.append('<option value="' + index + '">' + value + '</option>');
                });
                */

                select.children().remove(); // Eliminamos el hijo del select que pone "Selecciona provincia"
                select.append(options); // Añadimos el array con la lista de options
                select.removeAttr('disabled');
            });
        } else if (funcion === 'post') {
            $.ajax(url, {
                method : 'POST',
                data : {
                    provincia : parametro
                },
                dataType : 'json',
                success : function(municipios) {
                    options = [];
                    for (var cp in municipios) {
                        options.push(new Option(municipios[cp], cp));
                    }
                    select.children().remove();
                    select.append(options);
                }
            });
        }
    };

    loadSelect(strProvincias, "get", null, $selectProvincias);

    // Listener para ejecutar una función cuando detecte una acción (click) del usuario
    $selectProvincias.on('click', function() {
        loadSelect(strMunicipios, "post", $selectProvincias.val(), $selectMunicipios);
    });

});