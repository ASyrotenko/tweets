import { useState, useEffect } from 'react';

import TweetsList from '../modules/TweetsList/TweetsList';

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
        setItems(prevState => [...result]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, []);

  return (
    <div className="container">
      <TweetsList items={items} />
    </div>
  );
};

export default TweetsPage;
