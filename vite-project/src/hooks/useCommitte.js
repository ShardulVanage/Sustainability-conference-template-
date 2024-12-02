import { useState, useEffect } from 'react';
import { pb } from '../libs/pocketbase';

export function useCommittee() {
  const [committee, setCommittee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCommittee() {
      try {
        const records = await pb.collection('committee').getFullList({
          sort: '-created',
        });
        setCommittee(records);
        setLoading(false);
      } catch (e) {
        console.error('Error fetching co-organizers:', e);
        setError(e);
        setLoading(false);
      }
    }

    fetchCommittee();
  }, []);

  return { committee, loading, error };
}

