import EventTickets from '../../../../components/events/EventTickets';
import { getEvent } from '../../../../data';
import styles from '../../../../styles/Home.module.css';

export default function EventPage(props) {
  const { event } = props;

  return (
    <div className={styles.container}>
      <div>
        <strong>Artist: </strong>
        {event.artist.name}
      </div>
      <div>
        <strong>Event: </strong>
        {event.title}
      </div>
      <EventTickets event={event} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { artistId, eventId } = ctx.query;
  const event = await getEvent(artistId, eventId);
  return {
    props: { event },
  };
}
