sap.ui.controller("testui5application.myview", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf testui5application.myview
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf testui5application.myview
*/
//	onBeforeRendering: function() {<!DOCTYPE html>
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf testui5application.myview
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf testui5application.myview
*/
//	onExit: function() {
//
//	}

    h1 : function(oEvent) {
        alert(oEvent.getSource().getId() + "Roll Here");
    },	

   getroll1 : 3,
   
});