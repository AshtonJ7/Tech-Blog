const router = require('express').Router();
const { Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');



router.get('/', withAuth, async (req, res) => {
  console.log(' =====================  Running Posts Routes ===================== ');
  try {
    const blogData = await Blog.findAll({
      include: [{ model: Comment }],
    });
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// UPDATE POST
router.put('/', withAuth, async (req, res) => {
  try {
    const newData = {
      title: req.body.title,
      body: req.body.body
    };
    console.log(newData);

    const blogData = await Blog.update(newData,
      {
        where: {
          book_id: req.params.book_id,
        },
      });
      res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/:id', withAuth, async (req, res) => {

  console.log(' =====================  Running Posts Routes ===================== ');

  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: Comment }],
    });

    if (!readerData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
      res.status(300).json(err);
    }
  });

// CREATE POST
router.post('/', withAuth, async (req, res) => {
  console.log(' =====================  Create Post ===================== ');

  const newData = {
    title: req.body.title,
    body: req.body.body,
    user_id: req.session.user_id,
  }
       
  try {
   const newBlog = await Blog.create(newData);
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE POST
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog entry found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
