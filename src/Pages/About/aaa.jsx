/* import React, { useEffect } from 'react'; */
import { Link, useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  /*     useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/')
        }, 5000)

        return () => clearTimeout(timeout);
    }, []);  */
  function goAfter5() {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>
        <Link to="/">get back</Link>
      </p>
      <button type="button" onClick={goAfter5}>
        Go after 5
      </button>
    </div>
  );
}