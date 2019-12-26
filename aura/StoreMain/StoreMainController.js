({
    handleShowClients : function(component, event, helper) {
        helper.getClients(component);
    },
    
    deleteAllCars : function (component, event, helper){
        var action = component.get("c.DeleteAllCars")
        
        action.setCallback(this, function(response){

            var state = response.getState();
            if (state === "SUCCESS"){
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
    }
})