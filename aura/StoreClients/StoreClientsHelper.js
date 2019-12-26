({    
    sendSelectedRecordIdEvent : function(component, event, helper) {
        const recordId = event.getParam('name');
        const appEvent = $A.get('e.c:SelectedClientId');
        
        appEvent.fire({
            recordId: recordId
        });
    } 
})