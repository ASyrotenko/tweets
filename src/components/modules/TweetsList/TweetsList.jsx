import { useState, useEffect } from 'react';

import { newNumberFormat } from '../../shared/scripts/newNumberFormat';

import css from './tweets-list.module.css';
import logo from '../../../images/logo.png';

const initialUsers = JSON.parse(localStorage.getItem('following-users'));

const TweetsList = ({ items }) => {
  const [following, setFollowing] = useState(initialUsers || []);

  useEffect(() => {
    localStorage.setItem('following-users', JSON.stringify(following));
  }, [following, items]);

  const toggleFollowUser = e => {
    const userId = e.currentTarget.dataset.userid;

    if (following.includes(userId)) {
      setFollowing(prevState => prevState.filter(id => id !== userId));
    } else {
      setFollowing(prevState => [...prevState, userId]);
    }

    localStorage.setItem('following-users', JSON.stringify(following));
  };

  const elements = items.map(({ id, user, tweets, followers, avatar }) => (
    <li key={id} className={css.item}>
      <img src={logo} alt="logo" className={css.logo} />
      <div className={css.topImgWrap}></div>
      <div className={css.imgContainer}>
        <img src={avatar} alt={user} className={css.img} />
      </div>
      <div className={css.line}></div>
      <p className={css.tweets}>{newNumberFormat(tweets)} Tweets</p>
      <p className={css.followers}>
        {following.includes(id)
          ? newNumberFormat(followers + 1)
          : newNumberFormat(followers)}{' '}
        Followers
      </p>
      <button
        type="button"
        className={following.includes(id) ? css.buttonFollowed : css.button}
        onClick={toggleFollowUser}
        data-userid={id}
      >
        {following.includes(id) ? 'Following' : 'Follow'}
      </button>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default TweetsList;
