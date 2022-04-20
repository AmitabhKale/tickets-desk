import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTicket, reset } from '../features/tickets/ticketSlice';
// import BackButton from '../component/BackButton';
// import Spinner from '../component/Spinner';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BackButton from '../component/BackButton';


const Ticket = () => {
    const {ticket, isLoading, isSuccess,isError, message} = useSelector((state) => state.tickets);

    // const params = useParams()
    const dispatch = useDispatch();
    const {ticketId} = useParams();

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        //eslint-disable-next-line
        dispatch(getTicket(ticketId))
    }, [isError, message, ticketId])

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
                <hr />
                <div className="ticket-desc">
                    <h3>Description of the issue</h3>
                    <p>{ticket.description}</p>
                </div>
            
        </header>
    </div>
  )
}

export default Ticket