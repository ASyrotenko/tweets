import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

import TweetsList from '../modules/TweetsList/TweetsList';
import css from '../modules/TweetsList/tweets-list.module.css';

import { getAllUsers, allUsers } from '../shared/api/tweets';
import { smoothScroll } from '../shared/scripts/smoothScroll';

const TweetsPage = () => {
  const [items, setItems] = useState([]);
  const [countUsers, setCountUsers] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      try {
        const result = await getAllUsers(page);
        const totalUsers = await allUsers();
        setCountUsers(totalUsers);
        if (page === 1) {
          return setItems([...result]);
        }
        setItems(prevState => [...prevState, ...result]);
        smoothScroll(page);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, [page, countUsers]);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className="container">
      {loading && (
        <div className="loading__container">
          <TailSpin color="#5cd3a8" />
        </div>
      )}
      <NavLink to={`/home`} className={css.btn}>
        Go Home
      </NavLink>
      {error && (
        <p className="errorMassege">
          Oops. Something goes wrong. Please try again.
        </p>
      )}
      <TweetsList items={items} />
      {items.length > 0 && items.length < countUsers && (
        <button type="button" onClick={onLoadMore} className="loadMoreBtn">
          Load more
        </button>
      )}
    </div>
  );
};

export default TweetsPage;
