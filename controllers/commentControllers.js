const CommentCtrl = {
    comment : async (req, res) => {
        let comment = req.body.comment
        comment.postedBy = req.body.userId
        try {
            let result = await Post.findByIdAndUpdate(req.body.postId, { $push: { comments: comment } }, { new: true })
                .populate('comments.postedBy', '_id name')
                .populate('postedBy', '_id name')
                .exec()
            res.json(result)
        } catch (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
    },
    uncomment : async (req, res) => {
        let comment = req.body.comment
        try {
            let result = await Post.findByIdAndUpdate(req.body.postId, { $pull: { comments: { _id: comment._id } } }, { new: true })
                .populate('comments.postedBy', '_id name')
                .populate('postedBy', '_id name')
                .exec()
            res.json(result)
        } catch (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
    }
}

module.exports= CommentCtrl