"use strict";

var CMSearch = {
  create : function(){
    chrome.contextMenus.create(
      {
        id:settings.context_menus.search_id,
        title:settings.context_menus.search_title,
        contexts:settings.context_menus.search_contexts,
        enabled:true
      },
      function(){

      }
    );
  },
  onclicked:function(info,tab){
    if(info.selectionText === undefined) return false;
    Search.search(info.selectionText);
  }
};

class OnClickListener {
  constructor(){
    chrome.contextMenus.onClicked.addListener(function(info,tab){
        // console.log('search...');
        // console.log(info,tab);
        switch(info.menuItemId){
          case settings.context_menus.search_id:CMSearch.onclicked(info,tab);
        }
    })
  }
}