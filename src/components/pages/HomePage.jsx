import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <NavLink to={`/users`} className="navBtn">
        Tweets
      </NavLink>
      <p className="homeText">
        Sorry for this mess. Did not have enough time to apply beauty.
      </p>
    </div>
  );
};

export default HomePage;
