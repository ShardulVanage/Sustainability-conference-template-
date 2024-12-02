import { useState, useEffect } from 'react';
import { pb } from '../libs/pocketbase';

export function useCoOrganizers() {
  const [coOrganizers, setCoOrganizers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCoOrganizers() {
      try {
        const records = await pb.collection('co_organizers_img').getFullList({
          sort: '-created',
        });
        setCoOrganizers(records);
        setLoading(false);
      } catch (e) {
        console.error('Error fetching co-organizers:', e);
        setError(e);
        setLoading(false);
      }
    }

    fetchCoOrganizers();
  }, []);

  return { coOrganizers, loading, error };
}

