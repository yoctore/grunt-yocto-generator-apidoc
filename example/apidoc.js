

/**
* 
* @api {get} /account/:user_id GET Account(s)
* @apiGroup Account
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all user, if you want get one user you should specify his id, otherwise the whole users are returned
* 
* 
* 
*   
*     
*       @apiParam {Object_id} [user_id]  user_id(s) of the Account
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   
*     
*       
* 
*         
*             
*                 
*                   @apiSuccess {String} firstname firstname of the Account
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {String} lastname lastname of the Account
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {String} birth_date birth_date of the Account
*                 
*             
* 
*         
*       
* 
*         
*           @apiSuccess {String} family_status family_status of the din Account
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {String} civility civility of the Account
*                 
*             
* 
*         
*       
* 
*         
*           @apiSuccess {String} job_category job_category of the din Account
*         
*       
* 
*         
*           @apiSuccess {Number} dependent_person dependent_person of the din Account
*         
*       
* 
*         
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {[Object]} commercial_optin commercial_optin of the Account
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {String} home_id home_id of the Account
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {[Object]} emails emails of the Account
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {[Object]} phones phones of the Account
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {[Object]} sync sync of the Account
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {ObjectID} auths auths of the Account
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {String} notification_preference notification_preference of the Account
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {ObjectID} profiles profiles of the Account
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {String} iso_code iso_code of the Account
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {Date} created_date created_date of the Account
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {Date} updated_date updated_date of the Account
*                 
*             
* 
*         
*       
* 
*         
*           @apiSuccess {Date} deleted_date deleted_date of the din Account
*         
*       
* 
*       @apiSuccessExample {json}Success-Response
*       HTTP/1.1 200 OK:
*       {
*       "firstname" : "[object Object]""lastname" : "[object Object]""birth_date" : "[object Object]""family_status" : "String""civility" : "[object Object]""job_category" : "String""dependent_person" : "Number""childrens" : "[object Object]""commercial_optin" : "[object Object]""home_id" : "[object Object]""emails" : "[object Object]""phones" : "[object Object]""sync" : "[object Object]""auths" : "[object Object]""notification_preference" : "[object Object]""profiles" : "[object Object]""iso_code" : "[object Object]""created_date" : "[object Object]""updated_date" : "[object Object]""deleted_date" : "Date"
*       }
*   
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample AccountNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed get a Account"
*   }
* 
*   @apiError {String} error Failed get a Account
* 
* 
* 
*/

/**
* 
* @api {post} /account POST one Account
* @apiGroup Account
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new account in database
* 
* 
* 
* 
* 
* 
* 
*   
*     
* 
*         
*           @apiParam {String} firstname firstname of the Account
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {String} lastname lastname of the Account
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {String} birth_date birth_date of the Account
*         
*     
*   
* 
*   
*     @apiParam {String} [family_status] family_status of the Account
*   
* 
*   
*     
* 
*         
*           @apiParam {String} civility civility of the Account
*         
*     
*   
* 
*   
*     @apiParam {String} [job_category] job_category of the Account
*   
* 
*   
*     @apiParam {Number} [dependent_person] dependent_person of the Account
*   
* 
*   
*     
* 
*       
*         @apiParam {[Object]} [childrens] childrens of the  Account
*       
* 
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {[Object]} commercial_optin commercial_optin of the Account
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {String} home_id home_id of the Account
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {[Object]} emails emails of the Account
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {[Object]} phones phones of the Account
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {[Object]} sync sync of the Account
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {ObjectID} auths auths of the Account
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {String} notification_preference notification_preference of the Account
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {ObjectID} profiles profiles of the Account
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {String} iso_code iso_code of the Account
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {Date} created_date created_date of the Account
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {Date} updated_date updated_date of the Account
*         
*     
*   
* 
*   
*     @apiParam {Date} [deleted_date] deleted_date of the Account
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiSuccessExample AccountSuccess-Response:
*   HTTP/1.1 200 OK
*   {
*     "message" : "request success"
*   }
* 
*   @apiSuccess {String} message request success
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample AccountNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed post a Account"
*   }
* 
*   @apiError {String} error Failed post a Account
* 
* 
* 
*/

/**
* 
* @api {head} /account/:account HEAD of account(s)
* @apiGroup Account
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all account, if you want get  the header of one account you should specify his id, otherwise the header of whole accounts are returned
* 
* 
* 
*   
*     
*       @apiParam {Object_id} [account_id]  account_id(s) of the Account
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample AccountNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed head a Account"
*   }
* 
*   @apiError {String} error Failed head a Account
* 
* 
* 
*/

/**
* 
* @api {delete} /account/:account_id DELETE one account
* @apiGroup Account
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a account in database
* 
* 
* 
*   
*     
*       
*         
*           @apiParam {Object_id} account_id  account_id(s) of the Account
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiSuccessExample AccountSuccess-Response:
*   HTTP/1.1 200 OK
*   {
*     "message" : "request success"
*   }
* 
*   @apiSuccess {String} message request success
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample AccountNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed delete a Account"
*   }
* 
*   @apiError {String} error Failed delete a Account
* 
* 
* 
*/

/**
* 
* @api {patch} /account/:account_id PATCH one account
* @apiGroup Account
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to account in database
* 
* 
* 
*   
*     
*       
*         
*           @apiParam {Object_id} account_id  account_id(s) of the Account
*         
*       
*     
*   
* 
* 
* 
* 
* 
*   
*     
*       
* 
*           
*             @apiParam {String} [firstname] firstname of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [lastname] lastname of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [birth_date] birth_date of the Account
*           
* 
*         
*     
*   
*     
*       @apiParam {String} [family_status] family_status of the Account cccccc
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [civility] civility of the Account
*           
* 
*         
*     
*   
*     
*       @apiParam {String} [job_category] job_category of the Account cccccc
*     
*   
*     
*       @apiParam {Number} [dependent_person] dependent_person of the Account cccccc
*     
*   
*     
*       
* 
*           
*             @apiParam {[Object]} [childrens] [childrens] of the  Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {[Object]} [commercial_optin] [commercial_optin] of the  Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [home_id] home_id of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {[Object]} [emails] [emails] of the  Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {[Object]} [phones] [phones] of the  Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {[Object]} [sync] [sync] of the  Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {ObjectID} [auths] auths of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [notification_preference] notification_preference of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {ObjectID} [profiles] profiles of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [iso_code] iso_code of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} [created_date] created_date of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} [updated_date] updated_date of the Account
*           
* 
*         
*     
*   
*     
*       @apiParam {Date} [deleted_date] deleted_date of the Account cccccc
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiSuccessExample AccountSuccess-Response:
*   HTTP/1.1 200 OK
*   {
*     "message" : "request success"
*   }
* 
*   @apiSuccess {String} message request success
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample AccountNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed patch a Account"
*   }
* 
*   @apiError {String} error Failed patch a Account
* 
* 
* 
*/

/**
* 
* @api {put} /account/:account_id PUT one account
* @apiGroup Account
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a account in database
* 
* 
* 
*   
*     
*       
*         
*           @apiParam {Object_id} account_id  account_id(s) of the Account
*         
*       
*     
*   
* 
* 
* 
* 
* 
*   
*     
*       
* 
*           
*             @apiParam {String} firstname firstname of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} lastname lastname of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} birth_date birth_date of the Account
*           
* 
*         
*     
*   
*     
*       @apiParam {String} [family_status] family_status of the Account cccccc
*     
*   
*     
*       
* 
*           
*             @apiParam {String} civility civility of the Account
*           
* 
*         
*     
*   
*     
*       @apiParam {String} [job_category] job_category of the Account cccccc
*     
*   
*     
*       @apiParam {Number} [dependent_person] dependent_person of the Account cccccc
*     
*   
*     
*       
* 
*           
*             @apiParam {[Object]} [childrens] [childrens] of the  Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {[Object]} [commercial_optin] commercial_optin of the  Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} home_id home_id of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {[Object]} [emails] emails of the  Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {[Object]} [phones] phones of the  Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {[Object]} [sync] sync of the  Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {ObjectID} auths auths of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} notification_preference notification_preference of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {ObjectID} profiles profiles of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} iso_code iso_code of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} created_date created_date of the Account
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} updated_date updated_date of the Account
*           
* 
*         
*     
*   
*     
*       @apiParam {Date} [deleted_date] deleted_date of the Account cccccc
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiSuccessExample AccountSuccess-Response:
*   HTTP/1.1 200 OK
*   {
*     "message" : "request success"
*   }
* 
*   @apiSuccess {String} message request success
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample AccountNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed put a Account"
*   }
* 
*   @apiError {String} error Failed put a Account
* 
* 
* 
*/

/**
* 
* @api {get} /store/:store_id GET store(s)
* @apiGroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all store, if you want get one store you should specify his id, otherwise the whole stores are returned
* 
* 
* 
*   
*     
*       @apiParam {Object_id} [store_id]  store_id(s) of the store
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   
*     
*       
* 
*         
*           @apiSuccess {String} storeBrand_id storeBrand_id of the din store
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {String} name name of the store
*                 
*             
* 
*         
*       
* 
*       @apiSuccessExample {json}Success-Response
*       HTTP/1.1 200 OK:
*       {
*       "storeBrand_id" : "String""name" : "[object Object]"
*       }
*   
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample storeNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed get a store"
*   }
* 
*   @apiError {String} error Failed get a store
* 
* 
* 
*/

/**
* 
* @api {head} /store/:store_id HEAD of store(s)
* @apiGroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all store, if you want get  the header of one store you should specify his id, otherwise the header of whole stores are returned
* 
* 
* 
*   
*     
*       @apiParam {Object_id} [store_id]  store_id(s) of the store
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample storeNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed head a store"
*   }
* 
*   @apiError {String} error Failed head a store
* 
* 
* 
*/

/**
* 
* @api {post} /store/ POST one store
* @apiGroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new store in database
* 
* 
* 
* 
* 
* 
* 
*   
*     @apiParam {String} [storeBrand_id] storeBrand_id of the store
*   
* 
*   
*     
* 
*         
*           @apiParam {String} name name of the store
*         
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiSuccessExample storeSuccess-Response:
*   HTTP/1.1 200 OK
*   {
*     "message" : "request success"
*   }
* 
*   @apiSuccess {String} message request success
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample storeNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed post a store"
*   }
* 
*   @apiError {String} error Failed post a store
* 
* 
* 
*/

/**
* 
* @api {delete} /store/:store_id DELETE one store
* @apiGroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a store in database
* 
* 
* 
*   
*     
*       
*         
*           @apiParam {Object_id} store_id  store_id(s) of the store
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiSuccessExample storeSuccess-Response:
*   HTTP/1.1 200 OK
*   {
*     "message" : "request success"
*   }
* 
*   @apiSuccess {String} message request success
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample storeNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed delete a store"
*   }
* 
*   @apiError {String} error Failed delete a store
* 
* 
* 
*/

/**
* 
* @api {patch} /store/:store_id PATCH one store
* @apiGroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to store in database
* 
* 
* 
*   
*     
*       
*         
*           @apiParam {Object_id} store_id  store_id(s) of the store
*         
*       
*     
*   
* 
* 
* 
* 
* 
*   
*     
*       @apiParam {String} [storeBrand_id] storeBrand_id of the store cccccc
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [name] name of the store
*           
* 
*         
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiSuccessExample storeSuccess-Response:
*   HTTP/1.1 200 OK
*   {
*     "message" : "request success"
*   }
* 
*   @apiSuccess {String} message request success
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample storeNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed patch a store"
*   }
* 
*   @apiError {String} error Failed patch a store
* 
* 
* 
*/

/**
* 
* @api {put} /store/:store_id PUT one store
* @apiGroup store
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a store in database
* 
* 
* 
*   
*     
*       
*         
*           @apiParam {Object_id} store_id  store_id(s) of the store
*         
*       
*     
*   
* 
* 
* 
* 
* 
*   
*     
*       @apiParam {String} [storeBrand_id] storeBrand_id of the store cccccc
*     
*   
*     
*       
* 
*           
*             @apiParam {String} name name of the store
*           
* 
*         
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiSuccessExample storeSuccess-Response:
*   HTTP/1.1 200 OK
*   {
*     "message" : "request success"
*   }
* 
*   @apiSuccess {String} message request success
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample storeNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed put a store"
*   }
* 
*   @apiError {String} error Failed put a store
* 
* 
* 
*/

/**
* 
* @api {get} /user/:user_id GET User(s)
* @apiGroup user
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all user, if you want get one user you should specify his id, otherwise the whole users are returned
* 
* 
* 
*   
*     
*       @apiParam {Object_id} [user_id]  user_id(s) of the user
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   
*     
*       
* 
*         
*             
*                 
*                   @apiSuccess {String} name name of the user
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {String} firstname firstname of the user
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {String} email email of the user
*                 
*             
* 
*         
*       
* 
*       @apiSuccessExample {json}Success-Response
*       HTTP/1.1 200 OK:
*       {
*       "name" : "[object Object]""firstname" : "[object Object]""email" : "[object Object]"
*       }
*   
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample userNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed get a user"
*   }
* 
*   @apiError {String} error Failed get a user
* 
* 
* 
*/

/**
* 
* @api {head} /user/:user_id HEAD of User(s)
* @apiGroup user
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all user, if you want get  the header of one user you should specify his id, otherwise the header of whole users are returned
* 
* 
* 
*   
*     
*       @apiParam {Object_id} [user_id]  user_id(s) of the user
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample userNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed head a user"
*   }
* 
*   @apiError {String} error Failed head a user
* 
* 
* 
*/

/**
* 
* @api {post} /user/ POST one User
* @apiGroup user
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to add a new user in database
* 
* 
* 
* 
* 
* 
* 
*   
*     
* 
*         
*           @apiParam {String} name name of the user
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {String} firstname firstname of the user
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {String} email email of the user
*         
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiSuccessExample userSuccess-Response:
*   HTTP/1.1 200 OK
*   {
*     "message" : "request success"
*   }
* 
*   @apiSuccess {String} message request success
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample userNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed post a user"
*   }
* 
*   @apiError {String} error Failed post a user
* 
* 
* 
*/

/**
* 
* @api {delete} /user/:user_id DELETE one User
* @apiGroup user
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to delete a user in database
* 
* 
* 
*   
*     
*       
*         
*           @apiParam {Object_id} user_id  user_id(s) of the user
*         
*       
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiSuccessExample userSuccess-Response:
*   HTTP/1.1 200 OK
*   {
*     "message" : "request success"
*   }
* 
*   @apiSuccess {String} message request success
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample userNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed delete a user"
*   }
* 
*   @apiError {String} error Failed delete a user
* 
* 
* 
*/

/**
* 
* @api {patch} /user/:user_id PATCH one User
* @apiGroup user
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to user in database
* 
* 
* 
*   
*     
*       
*         
*           @apiParam {Object_id} user_id  user_id(s) of the user
*         
*       
*     
*   
* 
* 
* 
* 
* 
*   
*     
*       
* 
*           
*             @apiParam {String} [name] name of the user
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [firstname] firstname of the user
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [email] email of the user
*           
* 
*         
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiSuccessExample userSuccess-Response:
*   HTTP/1.1 200 OK
*   {
*     "message" : "request success"
*   }
* 
*   @apiSuccess {String} message request success
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample userNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed patch a user"
*   }
* 
*   @apiError {String} error Failed patch a user
* 
* 
* 
*/

/**
* 
* @api {put} /user/:user_id PUT one User
* @apiGroup user
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to put all property of a user in database
* 
* 
* 
*   
*     
*       
*         
*           @apiParam {Object_id} user_id  user_id(s) of the user
*         
*       
*     
*   
* 
* 
* 
* 
* 
*   
*     
*       
* 
*           
*             @apiParam {String} name name of the user
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} firstname firstname of the user
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} email email of the user
*           
* 
*         
*     
*   
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
*   @apiSuccessExample userSuccess-Response:
*   HTTP/1.1 200 OK
*   {
*     "message" : "request success"
*   }
* 
*   @apiSuccess {String} message request success
* 
* 
* 
* 
* 
* 
* 
*   @apiErrorExample userNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed put a user"
*   }
* 
*   @apiError {String} error Failed put a user
* 
* 
* 
*/