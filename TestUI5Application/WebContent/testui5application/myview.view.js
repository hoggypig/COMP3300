sap.ui.jsview("testui5application.myview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf testui5application.myview
	*/ 
	getControllerName : function() {
		return "testui5application.myview";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf testui5application.myview
	*/ 
	createContent : function(oController)
	{
       var layout = new sap.ui.layout.form.GridLayout("gridlayout");
       
       var form = new sap.ui.layout.form.Form("form", {
    	    title: new sap.ui.core.Title({text: "Yahtzee"}),
    	    layout: layout,
    	    formContainers: 
    	    [
    	        new sap.ui.layout.form.FormContainer("rolls",{
    	        	formElements: 
    	            [
    	                new sap.ui.layout.form.FormElement({
    	                	label: new sap.ui.commons.Label({text: "Roll:"}),
    	                	fields: [new sap.ui.commons.TextView({text: "x",layoutData: new sap.ui.layout.form.GridElementData({hCells: "6"})})] })
                    ]
    	        }),
    	        new sap.ui.layout.form.FormContainer("dice",{
    	        	formElements: 
    	            [
    	                new sap.ui.layout.form.FormElement({
    	                	fields: [new sap.ui.commons.TextView({id: this.createId("roll1"), text: oController.getroll1,layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),
    	                	         new sap.ui.commons.TextView({text: "0",layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),
    	                	         new sap.ui.commons.TextView({text: "0",layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),
    	                	         new sap.ui.commons.TextView({text: "0",layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),
    	                	         new sap.ui.commons.TextView({text: "0",layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})})                	         
    	                	         ] 
    	                })
                    ]
    	        }),          
       	        new sap.ui.layout.form.FormContainer("holdbuttons",{
    	        	formElements: 
    	            [
    	                new sap.ui.layout.form.FormElement({
    	                	fields: [new sap.ui.commons.Button({id: this.createId("h1"), text: "Hold 1", press: oController.h1,
    	                		                                layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),
    	                           	 new sap.ui.commons.Button({id: this.createId("h2"), text: "Hold 2", layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),
    	                           	 new sap.ui.commons.Button({id: this.createId("h3"), text: "Hold 3", layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),
    	                           	 new sap.ui.commons.Button({id: this.createId("h4"), text: "Hold 4", layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),
    	                           	 new sap.ui.commons.Button({id: this.createId("h5"), text: "Hold 5", layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),            	         
    	                             ] 
    	                })
                    ]	        
       	        }),
    	        new sap.ui.layout.form.FormContainer("holds",{
    	        	formElements:
    	            [
    	                new sap.ui.layout.form.FormElement({
    	                	fields: [new sap.ui.commons.TextView({text: "0",layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),
    	                	         new sap.ui.commons.TextView({text: "0",layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),
    	                	         new sap.ui.commons.TextView({text: "0",layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),
    	                	         new sap.ui.commons.TextView({text: "0",layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),
    	                	         new sap.ui.commons.TextView({text: "0",layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})})                	         
    	                	         ] 
    	                })
                    ]
    	        })      	        
            ]
       });
       
       return form;
       
		
	/*	
		var aControls = [];
        var rollButton = new sap.ui.commons.Button({
                        id : this.createId("Roll"),
                        text : "Roll"
        });
        aControls.push(rollButton.attachPress(oController.roll));

        var h1 = new sap.ui.commons.Button({
            id : this.createId("h1"),
            text : "Hold"
        });
        aControls.push(h1.attachPress(oController.roll));

        var h2 = new sap.ui.commons.Button({
            id : this.createId("h2"),
            text : "Hold"
        });
        aControls.push(h2.attachPress(oController.roll));

        var h3 = new sap.ui.commons.Button({
            id : this.createId("h31"),
            text : "Hold"
        });
        aControls.push(h3.attachPress(oController.roll));

        var h4 = new sap.ui.commons.Button({
            id : this.createId("h4"),
            text : "Hold"
        });
        aControls.push(h4.attachPress(oController.roll));

        var h5 = new sap.ui.commons.Button({
            id : this.createId("h5"),
            text : "Hold"
        });
        aControls.push(h5.attachPress(oController.roll));

        return aControls;*/
    }

});
