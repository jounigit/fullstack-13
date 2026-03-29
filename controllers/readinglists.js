const router = require('express').Router()
const { User, Blog } = require('../models')

router.post('/', async (req, res) => {
    try {
        const user = await User.findByPk(req.body.userId)
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }
        const blog = await Blog.findByPk(req.body.blogId)
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' })
        }
        await user.addReadings(blog, { through: { read: req.body.read } })
        res.status(200).json({ message: 'Reading list updated successfully' })
    } catch (err) {
        console.error('Error:', err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

module.exports = router