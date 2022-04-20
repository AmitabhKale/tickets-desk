import React, {useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getTickets, reset } from '../features/tickets/ticketSlice';
import Spinner from '../component/Spinner';
import BackButton from '../component/BackButton';
import TicketItem from '../component/TicketItem';

const Tickets = () => {
    const {tickets, isLoading, isSuccess} = useSelector((state) => state.tickets);

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            if(isSuccess){
                dispatch(reset())
            }
        }
    },[dispatch,isSuccess])

    useEffect(() => {
        dispatch(getTickets())
    }, [dispatch])

    if(isLoading){
        return Spinner
    }

  return (
    <div>
        <BackButton url="/" />
        <h1>Tickets</h1>
        <div className="tickets">
            <div className="ticket-headings">
                <div>Date</div>
                <div>Product</div>
                <div>Status</div>
                <div></div>
            </div>
            {tickets.map((ticket) => (
                <TicketItem key={ticket.id}  ticket={ticket} />
            ))}
        </div>
    </div>
  )
}

export default Tickets