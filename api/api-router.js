const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const sleepTrackerRouter = require('../sleep-tracker/sleepTracker-router');

router.use('/auth', authRouter);
router.use('/users', sleepTrackerRouter);

router.get('/', (req, res) => {
    res.json({ api: "Is working" })
})

module.exports = router;