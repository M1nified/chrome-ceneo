"use strict";

var Search = {
  search : function(lookforme){
    if(settings.search.window_target === 'single')
    SingleTab.update(
      {
        url : Ceneo.getUrlFind(lookforme),
        active : true
      }
    );
  }
}