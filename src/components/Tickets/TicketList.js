import React from 'react';
import { Link } from 'react-router-dom';

export default function TicketList(props) {
  console.log('ticket list', props);
  return (
    <div>
      {props.tickets.map(ticket => (
        <div>
          <p>{ticket.image}</p>
          <p>{ticket.price}</p>
          <p>{ticket.description}</p>
          {/* <Link to={`/event/:eventId/${ticket.id}`}>Details</Link> */}
        </div>
      ))}
    </div>
  );
}
