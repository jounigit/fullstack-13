const router = require('express').Router();
const { Blog } = require('../models');
const { tokenExtractor } = require('../util/middleware');

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

router.post('/', tokenExtractor, async (req, res, next) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      userId: req.userId
    });
    return res.status(201).json(newBlog);
  } catch (err) {
    console.error('Error:', err);
    next(err);
  }
});

router.delete('/:id', blogFinder, async (req, res) => {
  await req.blog.destroy();
  res.status(204).end();
});

router.put('/:id', blogFinder, async (req, res, next) => {
  try {
    req.blog.likes = req.body.likes;
    await req.blog.save();
    res.json(req.blog);
  } catch (err) {
    console.error('Error:', err);
    next(err);
  }
});

module.exports = router;