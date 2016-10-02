"use strict";

var SingleTab = {
  tabId : undefined,
  getSingle : function(){
    return new Promise((resolve,reject)=>{
      if(this.tabId !== undefined){
        chrome.tabs.get(this.tabId,(tab)=>{
          resolve(tab);
        })
      }else{
        this.create().then(tab=>{
          resolve(tab);
        })
      }
    })
  },
  create : function(){
    return new Promise((resolve,reject)=>{
      chrome.tabs.create(
        {},
        tab=>{
          this.tabId = tab.id;
          resolve(tab);
        }
      )
    });
  },
  update : function(properties){
    return new Promise((resolve,reject)=>{
      let updateProperties = properties;
      this.getSingle().then(tab=>{
        chrome.tabs.update(
          this.tabId,
          updateProperties,
          tab=>{resolve(tab);}
          );
      })
    })
  }
}