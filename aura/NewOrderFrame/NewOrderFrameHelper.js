({
    handleSuccessHelper : function(component, client, orderId) {
        component.find('notifLibrary').showToast({
            "variant": "success",
            "title": "Success!",
            "message": "Order has been added successfully."
        });

        $A.createComponent("c:NewOrderFrame", {client : client,
                                                newOrder : orderId,
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
    handleProductSuccess : function(component, clientId) {

        component.find('notifLibrary').showToast({
            "variant": "success",
            "title": "Success!",
            "message": "Order has been added successfully."
        });
        
        const appEvent = $A.get('e.c:SelectedClientId');
        
        appEvent.fire({
            recordId : clientId
        });
    }
})