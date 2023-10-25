sap.ui.define([
    "sap/ui/core/mvc/XMLView",
    "sap/ui/core/ComponentContainer"
], function (XMLView, ComponentContainer) {
        "use strict";


        // XMLView.create({viewName: "assignment.view.App"}).then(function (oView) {
        // 	oView.placeAt("content");
        // });
        new ComponentContainer({
            name: "assignment",
            settings: {
                id: "assignment"
            },
            async: true
        }).placeAt("content");
    })