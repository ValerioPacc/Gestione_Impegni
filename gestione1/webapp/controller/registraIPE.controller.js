sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageBox",
        "sap/m/Dialog",
        "sap/ui/core/library",
        "sap/m/Button",
        "sap/m/library",
        "sap/m/Text",
        "./BaseController"
    ],
    function(BaseController,MessageBox,Dialog,coreLibrary,Button,mobileLibrary,Text) {
      "use strict";
      // shortcut for sap.m.ButtonType
	var ButtonType = mobileLibrary.ButtonType;

	// shortcut for sap.m.DialogType
	var DialogType = mobileLibrary.DialogType;

	// shortcut for sap.ui.core.ValueState
	var ValueState = coreLibrary.ValueState;
  
      return BaseController.extend("gestione1.controller.registraIPE", {
        onInit() {

        },

        onSuccessMessageDialogPress: function () {
          MessageBox.confirm("Vuoi registrare il Decreto in provvisorio?", {
            actions: ["OK", "Annulla"],
            emphasizedAction: "OK",
            title: "Registrazione",
            onClose: function (sAction) {
             
              if (sAction === "OK") {
                MessageBox.success("Decreto registrato con successo");
              }
              else{
                sAction.close();
              }
            }
          })
        },

        onOpenConfDialog : function () {

          if (!this.fFragment) {
            this.fFragment = this.loadFragment({
              name: "gestione1.fragment.confDialog",
              controller: this
            }).then(function (oFragment) {
              this.getView().addDependent(oFragment);
              return oFragment;
            }.bind(this));
          } 
          this.fFragment.then(function(oFragment) {
            oFragment.open();
          }.bind(this));
        },
        onSuccessMessageBoxPress: function () {
          MessageBox.success("Decreto provvisorio registrato ", {
          onClose: function () {
          }
          });
        
        },

        onBackButton1: function () {
          this.getOwnerComponent().getRouter().navTo("Decreto");
      },
      onBackButton2: function () {
        this.getOwnerComponent().getRouter().navTo("RegistraIPE");
      }, 
      navToWizard: function (oEvent) {
        this.getOwnerComponent().getRouter().navTo("wizard");
    },
    navToView1: function (oEvent) {
      this.getOwnerComponent().getRouter().navTo("View1");
  },
      });
    }
  );
  