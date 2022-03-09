import { getFeaturedEvents } from '../../../data';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(404).end();
    return;
  }

  const events = await getFeaturedEvents();
  res.status(200).json(events);
}
