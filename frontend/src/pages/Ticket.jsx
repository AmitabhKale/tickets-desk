import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTicket, reset, closeTicket } from '../features/tickets/ticketSlice';
import BackButton from '../component/BackButton';
import Spinner from '../component/Spinner';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getNotes, reset as NotesReset } from '../features/notes/noteSlice';
import NoteItem from '../component/NoteItem';


const Ticket = () => {
    const {ticket, isLoading, isSuccess,isError, message} = useSelector((state) => state.tickets);

    const {notes, isLoading: notesIsLoading} = useSelector((state) => state.notes)

    const params = useParams()
    const dispatch = useDispatch();
    const {ticketId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        // eslint-disable-next-line
        dispatch(getTicket(ticketId))
        dispatch(getNotes(ticketId))
        
    }, [isError, message, ticketId])

    const onTicketClose = () => {
        dispatch(closeTicket(ticketId))
        toast.success('Ticket Closed');
        navigate('/tickets')
    }

    // if(isLoading){
    //     return <Spinner/>
    // }

  return (
    <div className='ticket-page' >
        <header className="ticket-header">
            <BackButton  url='/tickets'  />
            <h2>
                Ticket Id: {ticket._id}
                <span className={`status status-${ticket.status}`}>
                {ticket.status}
                </span>
            </h2>
                <h3>Date Submitted : {new Date(ticket.createdAt).toLocaleString()}</h3>
                <h3>Product : {ticket.product}</h3>
                <hr />
                <div className="ticket-desc">
                    <h3>Description of the issue</h3>
                    <p>{ticket.description}</p>
                </div>
            
            <h2>Notes</h2>
        </header>

        {notes.map( (note) => (
            <NoteItem  key={note._id} note={note} />
        ))}

        {ticket.status !== 'closed' && (<button onClick={onTicketClose} className='btn btn-block btn-danger'>Close Ticket</button>)}
    </div>
  )
}

export default Ticket