import { useState, useEffect } from 'react';
import { pb } from '../libs/pocketbase';

export function useDate() {
  const [date, setDate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCommittee() {
      try {
        const records = await pb.collection('dates').getFullList({
          sort: '-created',
          $autoCancel: true,
        });
        setDate(records);
        setLoading(false);
      } catch (e) {
        console.error('Error fetching co-organizers:', e);
        setError(e);
        setLoading(false);
      }
    }

    fetchCommittee();
  }, []);

  return { date, loading, error };
}

