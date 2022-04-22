const express = require('express');
const {getTickets, getTicket, createTicket, deleteTicket, updateTicket} = require('../controllers/ticketController')

const router = express.Router();


const {protect } = require('../middleware/authMiddleware')

const noteRouter = require('./noteRoutes');
router.use('/:ticketId/notes', noteRouter);

router.route('/').get(protect, getTickets).post(protect, createTicket)

router.route('/:id').get(protect, getTicket).put(protect, updateTicket).delete(protect, deleteTicket)


module.exports = router;    