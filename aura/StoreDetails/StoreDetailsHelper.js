({
    getClientData : function (component, Id){

        var action = component.get("c.GetClient")
        action.setParams({ ClientId : Id });
        
        action.setCallback(this, function(response){

            var state = response.getState();
            if (state === "SUCCESS"){
                component.set("v.selectedClient", response.getReturnValue());
            }
            else if (state === "ERROR") {
                const errors = response.getError();

                if (errors && errors[0] && errors[0].message) {
                    console.log("Error message: " + errors[0].message);
                }
                else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },

    getClientCar : function (component, Id){

        var action = component.get("c.GetClientCars")
        action.setParams({ ClientId : Id });
        
        action.setCallback(this, function(response){

            var state = response.getState();
            if (state === "SUCCESS"){
                component.set("v.clientCars", response.getReturnValue());
            }
            else if (state === "ERROR") {
                const errors = response.getError();

                if (errors && errors[0] && errors[0].message) {
                    console.log("Error message: " + errors[0].message);
                }
                else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },

    getClientOrders : function (component, Id){

        var action = component.get("c.GetClientOrders")
        action.setParams({ ClientId : Id });
        
        action.setCallback(this, function(response){

            var state = response.getState();
            if (state === "SUCCESS"){
                component.set("v.clientOrders", response.getReturnValue());
            }
            else if (state === "ERROR") {
                const errors = response.getError();

                if (errors && errors[0] && errors[0].message) {
                    console.log("Error message: " + errors[0].message);
                }
                else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },

    AddNewCarHelper : function (component){
    var selectedClient = component.get("v.selectedClient");

    $A.createComponent("c:NewCarFrame", {client : selectedClient},
                        function(content, status) {
                            if (status === "SUCCESS") {
                                    component.find('newCarOverlay').showCustomModal({
                                    header: "Add New Car",
                                    body: content,
                                    showCloseButton: true/*,
                                    cssClass: "mymodal", 
                                    closeCallback: function() {
                                        alert('You closed the alert!'); 
                                    } */
                                })
                            }
                        });
    },

    AddNewOrderHelper : function (component){

        var selectedClient = component.get("v.selectedClient");

        $A.createComponent("c:NewOrderFrame", {client : selectedClient},
        function(content, status) {
            if (status === "SUCCESS") {
                    component.find('newOrderOverlay').showCustomModal({
                    header: "Add New Order",
                    body: content,
                    showCloseButton: true
                })
            }
        });
    },

    AddNewPartFormHelper : function (component, event){
        var selectedClient = component.get("v.selectedClient");
        var orderList = component.get("v.clientOrders");
        var buttonValue = event.getSource().get("v.value");

        $A.createComponent("c:NewOrderFrame", {client : selectedClient,
                                               newOrder: orderList[buttonValue].Id,
                                               orderSwitch : false,
                                               partSwitch : true},
        function(content, status) {
            if (status === "SUCCESS") {
                    component.find('newOrderOverlay').showCustomModal({
                    header: "Add New Order",
                    body: content,
                    showCloseButton: true
                })
            }
        });
    },

    handleSectionToggleHelper : function (component, event){
       var openSections = event.getParam('openSections');
        if (openSections.length === 0) {
            component.set('v.accordionSectionText', "Show More");
        } else {
            component.set('v.accordionSectionText', "Show Less");
        } 
    }
})