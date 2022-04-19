const asyncHandler = require('express-async-handler')

const User =  require('../models/userModel');
const Ticket = require('../models/ticketModel');



// @desc     GEt  user tickets
// @route    /api/tickets
// @access   Private
const getTickets = asyncHandler( async (req,res) => {
    res.status(200).json({ message: 'getTickets'})
})

// @desc     Create new tickets
// @route    /api/tickets
// @access   Private
const createTicket = asyncHandler( async (req,res) => {
    res.status(200).json({ message: 'createTickets'})
})

module.exports = {
    getTickets,
    createTicket
}