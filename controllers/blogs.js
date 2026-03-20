const router = require('express').Router();
const { Blog } = require('../models');

const blogFinder = async (req, res, next) => {
    req.blog = await Blog.findByPk(req.params.id);
    if (!req.blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    next();
};

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.json(blogs);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    return res.status(201).json(newBlog);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/:id', blogFinder, async (req, res) => {
  await req.blog.destroy();
  res.status(204).end();
});

module.exports = router;