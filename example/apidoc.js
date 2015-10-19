

/**
* 
* @api {get} /account/:user_id GET Account(s)
* @apiGroup Topic
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve one  of V.0.1.0 ..
* 
* 
* 
*   
*     
*       @apiParam {Object_id} [user_id]  user_id(s) of the Topic
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
*                   @apiSuccess {String} status status of the Topic
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {ObjectId} creator_id creator_id of the Topic
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {String} icon_reference icon_reference of the Topic
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {String} name name of the Topic
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
*                   @apiSuccess {Number} order order of the Topic
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {ObjectId} mailing_lists mailing_lists of the Topic
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
*                   @apiSuccess {Date} created_date created_date of the Topic
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {Date} updated_date updated_date of the Topic
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
*       @apiSuccessExample {json}Success-Response
*       HTTP/1.1 200 OK:
*       {
*       "status" : "[object Object]""creator_id" : "[object Object]""icon_reference" : "[object Object]""name" : "[object Object]""little_name" : "[object Object]""order" : "[object Object]""mailing_lists" : "[object Object]""revisions" : "[object Object]""created_date" : "[object Object]""updated_date" : "[object Object]""deleted_date" : "[object Object]"
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
*   @apiErrorExample TopicNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed get a Topic"
*   }
* 
*   @apiError {String} error Failed get a Topic
* 
* 
* 
*/

/**
* 
* @api {post} /account POST one Account
* @apiGroup Topic
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
*           @apiParam {String} status status of the Topic
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {ObjectId} creator_id creator_id of the Topic
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {String} icon_reference icon_reference of the Topic
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {String} name name of the Topic
*         
*     
*   
* 
*   
*     
* 
*       
*         @apiParam {String} [little_name] little_name of the Topic
*       
* 
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {Number} order order of the Topic
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {ObjectId} mailing_lists mailing_lists of the Topic
*         
*     
*   
* 
*   
*     
* 
*       
*         @apiParam {[Object]} [revisions] revisions of the  Topic
*       
* 
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {Date} created_date created_date of the Topic
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {Date} updated_date updated_date of the Topic
*         
*     
*   
* 
*   
*     
* 
*       
*         @apiParam {Date} [deleted_date] deleted_date of the Topic
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
*   @apiSuccessExample TopicSuccess-Response:
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
*   @apiErrorExample TopicNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed post a Topic"
*   }
* 
*   @apiError {String} error Failed post a Topic
* 
* 
* 
*/

/**
* 
* @api {head} /account/:account HEAD of account(s)
* @apiGroup Topic
* @apiVersion 0.1.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all account, if you want get  the header of one account you should specify his id, otherwise the header of whole accounts are returned
* 
* 
* 
*   
*     
*       @apiParam {Object_id} [account_id]  account_id(s) of the Topic
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
*   @apiErrorExample TopicNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed head a Topic"
*   }
* 
*   @apiError {String} error Failed head a Topic
* 
* 
* 
*/

/**
* 
* @api {delete} /account/:account_id DELETE one account
* @apiGroup Topic
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
*           @apiParam {Object_id} account_id  account_id(s) of the Topic
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
*   @apiSuccessExample TopicSuccess-Response:
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
*   @apiErrorExample TopicNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed delete a Topic"
*   }
* 
*   @apiError {String} error Failed delete a Topic
* 
* 
* 
*/

/**
* 
* @api {patch} /account/:account_id PATCH one account
* @apiGroup Topic
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
*           @apiParam {Object_id} account_id  account_id(s) of the Topic
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
*             @apiParam {String} [status] status of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {ObjectId} [creator_id] creator_id of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [icon_reference] icon_reference of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [name] name of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [little_name] little_name of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Number} [order] order of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {ObjectId} [mailing_lists] mailing_lists of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {[Object]} [revisions] [revisions] of the  Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} [created_date] created_date of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} [updated_date] updated_date of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} [deleted_date] deleted_date of the Topic
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
*   @apiSuccessExample TopicSuccess-Response:
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
*   @apiErrorExample TopicNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed patch a Topic"
*   }
* 
*   @apiError {String} error Failed patch a Topic
* 
* 
* 
*/

/**
* 
* @api {put} /account/:account_id PUT one account
* @apiGroup Topic
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
*           @apiParam {Object_id} account_id  account_id(s) of the Topic
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
*             @apiParam {String} status status of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {ObjectId} creator_id creator_id of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} icon_reference icon_reference of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} name name of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [little_name] little_name of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Number} order order of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {ObjectId} mailing_lists mailing_lists of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {[Object]} [revisions] [revisions] of the  Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} created_date created_date of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} updated_date updated_date of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} [deleted_date] deleted_date of the Topic
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
*   @apiSuccessExample TopicSuccess-Response:
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
*   @apiErrorExample TopicNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed put a Topic"
*   }
* 
*   @apiError {String} error Failed put a Topic
* 
* 
* 
*/

/**
* 
* @api {get} /account/:user_id GET Account(s)
* @apiGroup Topic
* @apiVersion 0.2.0
* @apiPermission admin
* @apiDescription Method to retrieve one or all user, if you want get one user you should specify his id, otherwise the whole users are returned
* 
* 
* 
*   
*     
*       @apiParam {Object_id} [user_id]  user_id(s) of the Topic
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
*                   @apiSuccess {String} status status of the Topic
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {ObjectId} creator_id creator_id of the Topic
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {String} icon_reference icon_reference of the Topic
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {String} name name of the Topic
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
*                   @apiSuccess {Number} order order of the Topic
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {ObjectId} mailing_lists mailing_lists of the Topic
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
*                   @apiSuccess {Date} created_date created_date of the Topic
*                 
*             
* 
*         
*       
* 
*         
*             
*                 
*                   @apiSuccess {Date} updated_date updated_date of the Topic
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
*       @apiSuccessExample {json}Success-Response
*       HTTP/1.1 200 OK:
*       {
*       "status" : "[object Object]""creator_id" : "[object Object]""icon_reference" : "[object Object]""name" : "[object Object]""little_name" : "[object Object]""order" : "[object Object]""mailing_lists" : "[object Object]""revisions" : "[object Object]""created_date" : "[object Object]""updated_date" : "[object Object]""deleted_date" : "[object Object]"
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
*   @apiErrorExample TopicNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed get a Topic"
*   }
* 
*   @apiError {String} error Failed get a Topic
* 
* 
* 
*/

/**
* 
* @api {post} /account POST one Account
* @apiGroup Topic
* @apiVersion 0.2.0
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
*           @apiParam {String} status status of the Topic
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {ObjectId} creator_id creator_id of the Topic
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {String} icon_reference icon_reference of the Topic
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {String} name name of the Topic
*         
*     
*   
* 
*   
*     
* 
*       
*         @apiParam {String} [little_name] little_name of the Topic
*       
* 
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {Number} order order of the Topic
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {ObjectId} mailing_lists mailing_lists of the Topic
*         
*     
*   
* 
*   
*     
* 
*       
*         @apiParam {[Object]} [revisions] revisions of the  Topic
*       
* 
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {Date} created_date created_date of the Topic
*         
*     
*   
* 
*   
*     
* 
*         
*           @apiParam {Date} updated_date updated_date of the Topic
*         
*     
*   
* 
*   
*     
* 
*       
*         @apiParam {Date} [deleted_date] deleted_date of the Topic
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
*   @apiSuccessExample TopicSuccess-Response:
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
*   @apiErrorExample TopicNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed post a Topic"
*   }
* 
*   @apiError {String} error Failed post a Topic
* 
* 
* 
*/

/**
* 
* @api {head} /account/:account HEAD of account(s)
* @apiGroup Topic
* @apiVersion 0.2.0
* @apiPermission admin
* @apiDescription Method to retrieve the header of one or all account, if you want get  the header of one account you should specify his id, otherwise the header of whole accounts are returned
* 
* 
* 
*   
*     
*       @apiParam {Object_id} [account_id]  account_id(s) of the Topic
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
*   @apiErrorExample TopicNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed head a Topic"
*   }
* 
*   @apiError {String} error Failed head a Topic
* 
* 
* 
*/

/**
* 
* @api {delete} /account/:account_id DELETE one account
* @apiGroup Topic
* @apiVersion 0.2.0
* @apiPermission admin
* @apiDescription Method to delete a account in database
* 
* 
* 
*   
*     
*       
*         
*           @apiParam {Object_id} account_id  account_id(s) of the Topic
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
*   @apiSuccessExample TopicSuccess-Response:
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
*   @apiErrorExample TopicNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed delete a Topic"
*   }
* 
*   @apiError {String} error Failed delete a Topic
* 
* 
* 
*/

/**
* 
* @api {patch} /account/:account_id PATCH one account
* @apiGroup Topic
* @apiVersion 0.2.0
* @apiPermission admin
* @apiDescription Method to patch a specific param to account in database
* 
* 
* 
*   
*     
*       
*         
*           @apiParam {Object_id} account_id  account_id(s) of the Topic
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
*             @apiParam {String} [status] status of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {ObjectId} [creator_id] creator_id of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [icon_reference] icon_reference of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [name] name of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [little_name] little_name of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Number} [order] order of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {ObjectId} [mailing_lists] mailing_lists of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {[Object]} [revisions] [revisions] of the  Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} [created_date] created_date of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} [updated_date] updated_date of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} [deleted_date] deleted_date of the Topic
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
*   @apiSuccessExample TopicSuccess-Response:
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
*   @apiErrorExample TopicNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed patch a Topic"
*   }
* 
*   @apiError {String} error Failed patch a Topic
* 
* 
* 
*/

/**
* 
* @api {put} /account/:account_id PUT one account
* @apiGroup Topic
* @apiVersion 0.2.0
* @apiPermission admin
* @apiDescription Method to put all property of a account in database
* 
* 
* 
*   
*     
*       
*         
*           @apiParam {Object_id} account_id  account_id(s) of the Topic
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
*             @apiParam {String} status status of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {ObjectId} creator_id creator_id of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} icon_reference icon_reference of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} name name of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {String} [little_name] little_name of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Number} order order of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {ObjectId} mailing_lists mailing_lists of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {[Object]} [revisions] [revisions] of the  Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} created_date created_date of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} updated_date updated_date of the Topic
*           
* 
*         
*     
*   
*     
*       
* 
*           
*             @apiParam {Date} [deleted_date] deleted_date of the Topic
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
*   @apiSuccessExample TopicSuccess-Response:
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
*   @apiErrorExample TopicNotFound:
*   HTTP/1.1 400
*   {
*     "error" : " Failed put a Topic"
*   }
* 
*   @apiError {String} error Failed put a Topic
* 
* 
* 
*/