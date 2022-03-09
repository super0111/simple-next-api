import axios from 'axios';

export function getFeaturedEvents() {
  return axios
    .get('http://localhost:3000/api/events/featured')
    .then((res) => res.data);
}

export function getTickets(event, numberOfTickets, zone, priceRange) {
  return axios
    .get(
      `http://localhost:3000/api/events/${event.artist.id}/${event.id}/tickets`,
      {
        params: { numberOfTickets, zone, priceRange },
      }
    )
    .then((res) => {
      return res.data;
    });
}
