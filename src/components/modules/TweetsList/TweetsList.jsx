import css from './tweets-list.module.css';
import logo from '../../../images/logo.png';

const TweetsList = ({ items }) => {
  const elements = items.map(({ id, user, tweets, followers, avatar }) => (
    <li key={id} className={css.item}>
      <img src={logo} alt="logo" className={css.logo} />
      <div className={css.topImgWrap}></div>
      <div className={css.imgContainer}>
        <img src={avatar} alt={user} className={css.img} />
      </div>
      <div className={css.line}></div>
      <p className={css.tweets}>{tweets} Tweets</p>
      <p className={css.followers}>{followers} Followers</p>
      <button type="button" className={css.button}>
        Follow
      </button>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default TweetsList;
