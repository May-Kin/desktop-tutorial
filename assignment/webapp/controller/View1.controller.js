sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/ui/core/Fragment",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/m/MessageToast"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, Fragment, Filter, FilterOperator, MessageToast) {
    "use strict";

    return Controller.extend("assignment.controller.View1", {
      onInit: function () {

      },

      onValueHelpRequest1: function (oEvent) {
        let sInputValue1 = oEvent.getSource().getValue();
        let oView = this.getView();

        if (!this._pValueHelpDialog1) {
          this._pValueHelpDialog1 = Fragment.load({
            id: oView.byId("selectDialog1"),
            name: "assignment.fragment.ValueHelpDialog1",
            controller: this
          }).then(function (oDialog1) {
            oView.addDependent(oDialog1);
            return oDialog1;
          });
        }
        this._pValueHelpDialog1.then(function (oDialog1) {
          // Create a filter for the binding
          oDialog1.getBinding("items").filter([new Filter("FirstName", FilterOperator.Contains, sInputValue1)]);
          // Open ValueHelpDialog filtered by the input's value
          oDialog1.open(sInputValue1);
        });
      },

      onValueHelpSearch1: function (oEvent) {
        const sValue1 = oEvent.getParameter("value");
        let oFilter1 = new Filter("FirstName", FilterOperator.Contains, sValue1);

        oEvent.getSource().getBinding("items").filter([oFilter1]);
      },

      onValueHelpClose1: function (oEvent) {
        var oSelectedItem1 = oEvent.getParameter("selectedItem");
        // oEvent.getSource().getBinding("items").filter([]);

        if (!oSelectedItem1) {
          return;
        }
        this.byId("Z_ASGID001").setValue(oSelectedItem1.getTitle());
      },


      onValueHelpRequest2: function (oEvent) {
        var sInputValue2 = oEvent.getSource().getValue(),
          oView = this.getView();

        if (!this._pValueHelpDialog2) {
          this._pValueHelpDialog2 = Fragment.load({
            id: oView.getId("selectDialog2"),
            name: "assignment.fragment.ValueHelpDialog2",
            controller: this
          }).then(function (oDialog2) {
            oView.addDependent(oDialog2);
            return oDialog2;
          });
        }
        this._pValueHelpDialog2.then(function (oDialog2) {
          // Create a filter for the binding
          oDialog2.getBinding("items").filter([new Filter("City", FilterOperator.Contains, sInputValue2)]);
          // Open ValueHelpDialog filtered by the input's value
          oDialog2.open(sInputValue2);
        });
      },

      onValueHelpSearch2: function (oEvent) {
        var sValue2 = oEvent.getParameter("value");
        var oFilter2 = new Filter("City", FilterOperator.Contains, sValue2);

        oEvent.getSource().getBinding("items").filter([oFilter2]);
      },

      onValueHelpClose2: function (oEvent) {
        var oSelectedItem2 = oEvent.getParameter("selectedItem");
        oEvent.getSource().getBinding("items").filter([]);

        if (!oSelectedItem2) {
          return;
        }
        this.byId("LIFNR001").setValue(oSelectedItem2.getTitle());
      },

      onValueHelpRequest3: function (oEvent) {
        var sInputValue3 = oEvent.getSource().getValue(),
          oView = this.getView();

        if (!this._pValueHelpDialog3) {
          this._pValueHelpDialog3 = Fragment.load({
            id: oView.getId("selectDialog3"),
            name: "assignment.fragment.ValueHelpDialog3",
            controller: this
          }).then(function (oDialog3) {
            oView.addDependent(oDialog3);
            return oDialog3;
          });
        }
        this._pValueHelpDialog3.then(function (oDialog3) {
          // Create a filter for the binding
          oDialog3.getBinding("items").filter([new Filter("Extension", FilterOperator.Contains, sInputValue3)]);
          // Open ValueHelpDialog filtered by the input's value
          oDialog3.open(sInputValue3);
        });
      },

      onValueHelpSearch3: function (oEvent) {
        var sValue3 = oEvent.getParameter("value");
        var oFilter3 = new Filter("Extension", FilterOperator.Contains, sValue3);

        oEvent.getSource().getBinding("items").filter([oFilter3]);
      },

      onValueHelpClose3: function (oEvent) {
        var oSelectedItem3 = oEvent.getParameter("selectedItem");
        oEvent.getSource().getBinding("items").filter([]);

        if (!oSelectedItem3) {
          return;
        }
        this.byId("BISMT001").setValue(oSelectedItem3.getTitle());
      },


      onValueHelpRequest4: function (oEvent) {
        var sInputValue4 = oEvent.getSource().getValue(),
          oView = this.getView();

        if (!this._pValueHelpDialog4) {
          this._pValueHelpDialog4 = Fragment.load({
            id: oView.getId("selectDialog4"),
            name: "assignment.fragment.ValueHelpDialog4",
            controller: this
          }).then(function (oDialog4) {
            oView.addDependent(oDialog4);
            return oDialog4;
          });
        }
        this._pValueHelpDialog4.then(function (oDialog4) {
          // Create a filter for the binding
          oDialog4.getBinding("items").filter([new Filter("Country", FilterOperator.Contains, sInputValue4)]);
          // Open ValueHelpDialog filtered by the input's value
          oDialog4.open(sInputValue4);
        });
      },

      onValueHelpSearch4: function (oEvent) {
        var sValue4 = oEvent.getParameter("value");
        var oFilter4 = new Filter("Country", FilterOperator.Contains, sValue4);

        oEvent.getSource().getBinding("items").filter([oFilter4]);
      },

      onValueHelpClose4: function (oEvent) {
        var oSelectedItem4 = oEvent.getParameter("selectedItem");
        oEvent.getSource().getBinding("items").filter([]);

        if (!oSelectedItem4) {
          return;
        }
        this.byId("EMATN001").setValue(oSelectedItem4.getTitle());
      },

      // search filter view to view in table
      onFilterPosts: function (oEvent) {
        const oView = this.getView();
        
        let sFirstName = oView.byId("Z_ASGID001").getValue();
        let sInput2 = oView.byId("EKGRP001").getValue();
        let sInput3 = oView.byId("LIFNR001").getValue();
        let sInput4 = oView.byId("BISMT001").getValue();
        let sInput5 = oView.byId("EMATN001").getValue();
        let sInput6 = oView.byId("WERKS001").getValue();
        let sInput7 = oView.byId("MAKT001").getValue();

        let aFilters = [];
        
        aFilters.push(new Filter("FirstName", FilterOperator.Contains, sFirstName));
        aFilters.push(new Filter("City", FilterOperator.Contains, sInput2));
        aFilters.push(new Filter("Extension", FilterOperator.Contains, sInput3));
        aFilters.push(new Filter("Extension", FilterOperator.Contains, sInput4));
        aFilters.push(new Filter("Extension", FilterOperator.Contains, sInput5));
        aFilters.push(new Filter("Extension", FilterOperator.Contains, sInput6));
        aFilters.push(new Filter("Extension", FilterOperator.Contains, sInput7));
        
        const oTable = this.byId(sap.ui.core.Fragment.createId("innerTable", "ZMMT1002"));
        oTable.getBinding("rows").filter(aFilters);
      },

      clearInput: function () {
        this.getView().byId("Z_ASGID001").setValue("");
        this.getView().byId("EKGRP001").setValue("");
        this.getView().byId("LIFNR001").setValue("");
        this.getView().byId("BISMT001").setValue("");
        this.getView().byId("EMATN001").setValue("");
        this.getView().byId("WERKS001").setValue("");
        this.getView().byId("MAKT001").setValue("");

        const oTable = this.byId(sap.ui.core.Fragment.createId("innerTable", "ZMMT1002"));
        oTable.getBinding("rows").filter([]);
      },
    });
  });
