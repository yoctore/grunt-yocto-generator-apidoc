

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
*           @apiSuccess {String} storeBrand_id storeBrand_id of the store
*         
*       
* 
*         
*             
*                 @apiSuccess {String} name name of the store
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
*         @apiParam {String} name name of the store
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
*       @apiParam {String} [storeBrand_id] storeBrand_id of the store
*     
*   
*     
*       
*           @apiParam {String} [name] name of the store
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
*       @apiParam {String} [storeBrand_id] storeBrand_id of the store
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
*                 @apiSuccess {String} name name of the user
*             
* 
*         
*       
* 
*         
*             
*                 @apiSuccess {String} firstname firstname of the user
*             
* 
*         
*       
* 
*         
*             
*                 @apiSuccess {String} email email of the user
*             
* 
*         
*       
* 
*         
* 
*           
*             @apiSuccess {[ObjectId]} [cart_id]  cart_id(s) of the user
*           
* 
*           
*       
* 
*       @apiSuccessExample {json}Success-Response
*       HTTP/1.1 200 OK:
*       {
*       "name" : "[object Object]""firstname" : "[object Object]""email" : "[object Object]"
*         "cart_id" : ["ObjectId"]
*         
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
*         @apiParam {String} name name of the user
*     
*   
* 
*   
*     
*         @apiParam {String} firstname firstname of the user
*     
*   
* 
*   
*     
*         @apiParam {String} email email of the user
*     
*   
* 
*   
*     
*       @apiParam {[ObjectId]} [cart_id]  cart_id(s) of the user
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
*           @apiParam {String} [name] name of the user
*         
*     
*   
*     
*       
*           @apiParam {String} [firstname] firstname of the user
*         
*     
*   
*     
*       
*           @apiParam {String} [email] email of the user
*         
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [cart_id]  cart_id(s) of the user
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
*           @apiParam {String} name name of the user
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
*           @apiParam {String} email email of the user
*         
*     
*   
*     
*       
*         @apiParam {[ObjectId]} [cart_id]  cart_id(s) of the user
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