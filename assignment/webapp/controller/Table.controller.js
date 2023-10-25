sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/ui/core/Fragment",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Fragment, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("assignment.controller.App", {
    onInit: function () {
      var oModel = this.getOwnerComponent().getModel();
      var oView = this.getView();
      oView.setModel(oModel);

      var oTable = this.getView().byId("ZMMT1002");
      this.oBindingTable = oTable.getBindingInfo("items");
    },

    onValueHelpRequest: function (oEvent) {
      var sInputValue = oEvent.getSource().getValue(),
        oView = this.getView();
      if (!this._pValueHelpDialog) {
        this._pValueHelpDialog = Fragment.load({
          id: oView.getId(),
          name: "assignment.fragment.ValueHelpDialog1",
          controller: this
        }).then(function (oDialog) {
          oView.addDependent(oDialog);
          return oDialog;
        });
      }
      this._pValueHelpDialog.then(function (oDialog) {
        // Create a filter for the binding
        oDialog.getBinding("items").filter([new Filter("FirstName", FilterOperator.Contains, sInputValue)]);
        // Open ValueHelpDialog filtered by the input's value
        oDialog.open(sInputValue);
      });
    },

    onValueHelpSearch1: function (oEvent) {
      var sValue = oEvent.getParameter("value");
      var oFilter = new Filter("FirstName", FilterOperator.Contains, sValue);

      oEvent.getSource().getBinding("items").filter([oFilter]);
    },

    onValueHelpClose1: function (oEvent) {
      var oSelectedItem = oEvent.getParameter("selectedItem");
      oEvent.getSource().getBinding("items").filter([]);

      if (!oSelectedItem) {
        return;
      }

      this.byId("productInput").setValue(oSelectedItem.getTitle());
    },


  });
});
