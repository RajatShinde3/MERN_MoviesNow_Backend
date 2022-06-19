const router=require('express').Router();
const blogCommentController=require('./../controllers/blogComment.controller')
const auth=require('../middleware/auth');

router.get('/:blog_id/comments',blogCommentController.list)
router.post('/:blog_id/comments/create',auth,blogCommentController.create)
router.put('/comments/:comment_id/update',auth,blogCommentController.update)
router.delete('/comments/:comment_id/delete',auth,blogCommentController.delete)
module.exports=router;