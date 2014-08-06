jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("sap.ui.demo.myFiori.view.Detail", {

	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},

	onBeforeRendering:function(){
		this.byId("SupplierForm").bindElement("BusinessPartner");
	},
	
	handleApprove : function (evt) {

		// show confirmation dialog
		var bundle = this.getView().getModel("i18n").getResourceBundle();
		var jsonObj = this.getView().getModel("mock").getResourceBundle();
this.getView().
		sap.m.MessageBox.confirm(
			bundle.getText("ApproveDialogMsg"),
			function (oAction) {
				if (sap.m.MessageBox.Action.OK === oAction) {
					// notify user
					var successMsg = bundle.getText("ApproveDialogSuccessMsg");
					sap.m.MessageToast.show(successMsg);
					for (var i=0; i<jsonObj.length; i++) {
						  if (jsonObj[i].SoId = 300000003)
					      {
						    jsonObj[i].LifecycleStatus = "A";
						    break;
						  }
						}
					// TODO call proper service method and update model (not part of this session)
				}
			},
			
			bundle.getText("ApproveDialogTitle")
		);
	}
});