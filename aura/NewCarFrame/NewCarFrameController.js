({    
    handleSuccess : function(component, event, helper) {

        var clientId = component.get('v.client.Id');
        helper.handleSuccessHelper(component, clientId);

        component.find("newCarOverlayFrame").notifyClose();
    },
    closeWindow : function(component, event, helper) {
        component.find("newCarOverlayFrame").notifyClose();

    }
})
