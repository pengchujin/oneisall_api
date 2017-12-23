const GetE = require('../controllers/test.js');
const GetO = require('../controllers/oneIndex');
const GetQ = require('../controllers/question')
const router = require('koa-router')();

router.get('/essay/id/:id', GetE.getEssayInfo);
router.get('/essay/date/:date', GetE.getEssayByDate);
router.get('/add/essay',GetE.addEssayInfo);
router.get('/new/essay',GetE.newEssayInfo);

router.get('/one/vol/:vol', GetO.getOneIndexInfo);
router.get('/add/one',GetO.addOneIndex);
router.get('/new/one',GetO.newOne);
router.get('/one/date/:date',GetO.getOneByDate)

router.get('/question/id/:id', GetQ.getQuestionById);
router.get('/add/questions', GetQ.addQuestion);
router.get('/question/date/:date', GetQ.getQuestionByDate);
router.get('/new/question', GetQ.newQuestion);


module.exports = router;