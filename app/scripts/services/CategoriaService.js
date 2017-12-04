'use strict';


myApp.service('CategoriaService',function ($http) {

   var categoria = {};
   var categorias = [];
   var index;

   return {
      agregarCategoriasLocal : agregarCategoriasLocal,
       obtenerCategoriasLocal : obtenerCategoriasLocal,
       editarCategoriaLocal : editarCategoriaLocal,
       guardarCategoriaLocal : guardarCategoriaLocal,
       eliminarCategoriaLocal : eliminarCategoriaLocal,
       wipe : wipe

   };


   function agregarCategoriasLocal (categoria) {
       categorias.push(categoria);
   }

   function obtenerCategoriasLocal() {
       return categorias;
   }

   function editarCategoriaLocal(value) {
      index = value;
      return categorias[value];
   }

   function guardarCategoriaLocal(categoria) {
       categorias[index] = categoria;
       categoria = null;
   }

   function eliminarCategoriaLocal (val) {
       if (val > -1) {
           categorias.splice(val,1);
       }
   }

   function wipe() {
       categoria = {};
       categorias =[];
       index = -1;
   }


});
