public class StoreService {

    @AuraEnabled
    public static Contact[] GetClients(){
        return [SELECT Name, Id 
                FROM Contact];
    }

    @AuraEnabled
    public static Contact GetClient(Id ClientId){
        return [SELECT Name, Id 
                FROM Contact 
                WHERE Id = :ClientId];
    }
    
    @AuraEnabled
    public static Client_Cars__c[] GetClientCars(Id ClientId){
        return [SELECT Name, Client_Cars_Number__c, Car__c, Color__c, Gearbox__c, Type__c 
                FROM Client_Cars__c 
                WHERE Client__c = :ClientId];
    }

    @AuraEnabled
    public static Client_Order__c[] GetClientOrders(Id ClientId){
        return [SELECT 	Name, Client_Order_Number__c, Order_Description__c, Total_Order_Price__c
                FROM Client_Order__c
                WHERE Client__c = :ClientId];
    }
    
    @AuraEnabled
    public static void AddNewOrder(Id client, String description){
        Client_Order__c newOrder = new Client_Order__c (Client__c = client, Order_Description__c = description);
        insert newOrder;
    }

    @AuraEnabled
    public static void DeleteAllCars(){
        Client_Cars__c[] carsForDelete = [SELECT Name, Id FROM Client_Cars__c];
        try {
            delete carsForDelete;
        } catch (DmlException e) {
            System.debug(e.getStackTraceString());
        }

        Client_Order__c[] clientOrdersForDelete = [SELECT Name, Id FROM Client_Order__c];
        try {
            delete clientOrdersForDelete;
        } catch (DmlException e) {
            System.debug(e.getStackTraceString());
        }
    }

}