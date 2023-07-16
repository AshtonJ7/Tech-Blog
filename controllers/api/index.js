const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogsRoutes = require('./blogsRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/blogs', blogsRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
