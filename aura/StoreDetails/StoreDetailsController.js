({
    handleSelectedClientIdEvent : function(component, event, helper) {
        const eventDataMap = event.getParams();

        component.set('v.isClientSelected', true);
        component.set('v.recordId', eventDataMap.recordId)

        helper.getClientData(component, eventDataMap.recordId);
        helper.getClientCar(component, eventDataMap.recordId);
        helper.getClientOrders(component, eventDataMap.recordId);
    },

    handleAddNewCarForm: function(component, event, helper) {
        helper.AddNewCarHelper(component);
    },
    handleAddNewOrderForm: function(component, event, helper) {
        helper.AddNewOrderHelper(component);
    },
    
    handleSectionToggle : function(component, event, helper) {
        helper.handleSectionToggleHelper(component, event);
    },
    handleAddNewPartForm : function(component, event, helper){
        helper.AddNewPartFormHelper(component, event, helper);
    }

})