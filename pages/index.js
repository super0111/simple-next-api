import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { getFeaturedEvents } from '../utils/db';

export default function Home(props) {
  const { featuredEvents } = props;
  const [featEv, setFeatEv] = useState({ idx: 0, event: featuredEvents[0] });

  useEffect(() => {
    setTimeout(() => {
      let nextFeatEv = featEv.idx + 1;
      if (nextFeatEv > 2) nextFeatEv = 0;
      setFeatEv({ idx: nextFeatEv, event: featuredEvents[nextFeatEv] });
    }, 5000),
      [];
  });

  const event = featEv?.event;

  return (
    <div className={styles.container}>
      <Head>
        <title>Backend</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h2>Featured Events:</h2>
        <div className={styles.event}>
          {event ? (
            <a href={`/events/${event.artist.id}/${event.id}`}>
              <h2>{event.title}</h2>
            </a>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: { featuredEvents },
  };
}
