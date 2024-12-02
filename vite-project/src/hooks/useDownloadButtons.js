import { useState, useEffect } from 'react';
import { pb } from '../libs/pocketbase';

export function usedownloadButtons() {
  const [downloadButtons, setDownloadButtons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDownloadButtons() {
      try {
        const records = await pb.collection('download_buttons').getFullList({
          sort: '-created',
        });
        setDownloadButtons(records);
        setLoading(false);
      } catch (e) {
        console.error('Error fetching co-organizers:', e);
        setError(e);
        setLoading(false);
      }
    }

    fetchDownloadButtons();
  }, []);

  return { downloadButtons, loading, error };
}

