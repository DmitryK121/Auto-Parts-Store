({
    
    handleSuccessHelper : function(component, clientId) {
        component.find('notifLibrary').showToast({
            "variant": "success",
            "title": "Success!",
            "message": "Car has been added successfully."
        });
        
        const appEvent = $A.get('e.c:SelectedClientId');
        
        appEvent.fire({
            recordId : clientId
        });
    }
})
