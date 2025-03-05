import { useState, useEffect } from 'react';
import { pb } from '../libs/pocketbase';

export function useSpeakers() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDownloadButtons() {
      try {
        const records = await pb.collection('speakers').getFullList({
          sort: 'order',
          $autoCancel: false,
        });
        setSpeakers(records);
        setLoading(false);
      } catch (e) {
        console.error('Error fetching speaker:', e);
        setError(e);
        setLoading(false);
      }
    }

    fetchDownloadButtons();
  }, []);

  return { speakers, loading, error };
}

