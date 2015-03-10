/*
$(document).ready(function() {
    
});

ó

window.onload = function() {
    
};
*/
$(function() {
    // 3.8.1

    // 1 - Seleccionar todos los elementos div que poseen la clase "module".
    var $divs = $('div.module');
    //console.log($divs);

    // 2 - Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList.
    var $li = $('#myList li:nth-child(3');
    //console.log($li);

    var $lis = $('#myList li');
    //console.log($lis.eq(2));

    $lis.on('click', function(e) {
        console.log(e);
        console.log(this);
    });



    var $ul = $('#myList');
    console.log($ul.find('li').eq(2));

    // 3 - Seleccionar el elemento label del elemento input utilizando un selector de atributo.
    var $input = $('input[name="q"]');
    var $label = $('label[for="' + $input.attr('name') + '"]');
    console.log($label);

    // 4 - Averiguar cuantos elementos en la página están ocultos
    var $hidden = $(':hidden');
    $hidden.each(function(idx, elem) {
        console.log(elem);
        $(elem).show();
    });

    // 3.8.2
    var $imgs = $('img');
    $imgs.each(function(idx, elem) {
        console.log(elem.alt);
        //console.log($(elem).attr('alt')); // Lo mismo de lo de arriba
    });

    $input.closest('form').addClass('form');
    $input.closest('form').removeClass('form');
    $input.closest('form').toggleClass('form');

    var $current = $('#myList .current');
    $current.removeClass('current').next().addClass('current');

    var $submit = $('#specials select').closest('ul').find('input[type="submit"]');
    console.log($submit);

    $('#slideshow li').first().addClass('current').siblings().addClass('disabled');

    var lis = [];
    for (var i = 0; i < 5; i++) {
        lis.push('<li>' + i + '</li>');
    }
    $ul.append(lis.join(''));

    $li = $('<li/>', {
        class : 'current',
        text: 'Node list',
        id : 'myli'
    });
    $ul.append($li);
    $li.appendTo($ul); // Lo mismo que lo de arriba pero en orden diferente.
    /*
        El primero es, en el ul mete el li, y el segundo es, mete el li en el ul.
    */

    $ul.find('li:odd').remove();

    $ul.on('click', 'li', function(e) {
        console.log(e);
        console.log(this);
    });

});