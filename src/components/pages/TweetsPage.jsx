import { useState, useEffect } from 'react';

import { getAllUsers } from '../shared/api/tweets';

const TweetsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      try {
        const result = await getAllUsers();
        setItems(prevState => [...prevState, ...result]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, []);

  return <div>TweetsPage</div>;
};

export default TweetsPage;
