"use strict";

var Ceneo = {
  getUrlFind : function(lookforme){
    return settings.ceneo.search_url_before + lookforme.replace(" ","+");
  }
}