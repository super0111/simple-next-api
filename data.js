const events = [
  {
    id: 'ayayay',
    featured: true,
    title: 'AYAYAY! TOUR',
    artist: { id: 'nodal', name: 'Christian Nodal' },
    priceRange: { min: 10, max: 2000 },
  },
  {
    id: 'papi',
    featured: true,
    title: 'Papi Juancho',
    artist: { id: 'maluma', name: 'Maluma' },
  },
  {
    id: '40años',
    featured: true,
    title: '40 años',
    artist: { id: 'angeles', name: 'Los Ángeles Azules' },
  },
];

const artists = [
  {
    id: 'nodal',
    featured: true,
    name: 'Christian Nodal',
    bio: 'Christian Nodal is the most important youth soloist of the Mexican Regional genre, with only 19 years of age, he has managed to place 5 singles in the first place of the specialized charts for several weeks “No Te Contaron Mal”, “ Me Deje Llevar”, “Adios Amor”, “Te Fallé”, “Eres”", and on Youtube, he has more than a trillion visits, on Spotify more than 3.7 million listeners per month.  Multi-awarded in Mexico and the United States, the only Mexican regional artist in the 21st 21, with 3 awards on Billboard, 2 on iHeartradio, a Latin Grammy to name a few, is a singer who has broken the schemes of this competitive and difficult genre. Proving that to achieve success, age does not matter, it matters the talent, discipline, dedication to 100% and a great team.<p>After his already successful tour in Mexico and the USA, "DE TU MANO TOUR", he is starting 2019 with his "Ahora" tour, where besides his traditional Mariacheño, he will present several surprises that will surely please his fans.</p>',
    bigImage: 'big.jpg',
  },
];

const tickets = require('./data/tickets.json');

function getAllEvents() {
  return events;
}

async function getFeaturedEvents() {
  return events.filter((event) => event.featured);
}

async function getEvent(artistId, eventId) {
  return events.find(
    (event) => event.id == eventId && event.artist.id == artistId
  );
}

function getEventsByMonth(year, month) {
  return events.filter((event) => event.year === year && eve);
}

function getArtist(id) {
  return artists.find((artist) => artist.id === id);
}

function getFeaturedArtists() {
  return artists.filter((artist) => artist.featured);
}

async function getTickets(
  artistId,
  eventId,
  numberOfTickets,
  zone,
  priceRange
) {
  return tickets.filter(
    (ticket) =>
      ticket.event.artist.id == artistId &&
      ticket.event.id == eventId &&
      ticket.seats.count >= numberOfTickets &&
      (!zone || ticket.zone.id == zone) &&
      (!priceRange ||
        (ticket.price.value >= priceRange.min &&
          ticket.price.value <= priceRange.max))
  );
}

module.exports = {
  getAllEvents,
  getFeaturedEvents,
  getEvent,
  getFeaturedArtists,
  getArtist,
  getTickets,
};
