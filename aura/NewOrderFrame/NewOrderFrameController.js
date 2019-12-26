({
    handleOrderSuccess : function(component, event, helper) {

        var client = component.get('v.client');
        var payload = event.getParams().response;

        helper.handleSuccessHelper(component, client, payload.id);

        component.find("newOrderOverlayFrame").notifyClose();
    },

    handleProductSuccess : function(component, event, helper) {
        var clientId = component.get('v.client.Id');

        helper.handleProductSuccess(component, clientId);
        component.find("newOrderOverlayFrame").notifyClose();
    },
    
    closeWindow : function(component, event, helper) {
        component.find("newOrderOverlayFrame").notifyClose();

    }
})
