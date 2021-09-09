import React, { useEffect, useState } from 'react';
import About from './About';
import Home from './Home';
import styled from 'styled-components';
import Icon from './icon.png';

function fetchUsername() {
  const usernames = ['seal', 'siri', 'sil'];
  return new Promise(resolve => {
    const username = usernames[Math.floor(Math.random() * 3)];
    setTimeout(() => {
      resolve(username);
    }, 100);
  })
}

export default function App({ page }) {
  const [currentPage, setCurrentPage] = useState(page);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    window.openpopstate = event => {
      setCurrentPage(event.state);
    }

    fetchUsername().then(data => setUsername(data));
  }, []);

  function onChangePage(e) {
    const newPage = e.target.dataset.page;
    window.history.pushState(newPage, '', `/${newPage}`);
    setCurrentPage(newPage);
  }

  const PageComponent = currentPage === 'home' ? Home : About;

  return (
    <div>
      <Container>
        <button data-page="home" onClick={onChangePage}>
          Home
        </button>
        <button data-page="about" onClick={onChangePage}>
          About
        </button>
        <PageComponent username={username} />
        <img src={Icon} />
      </Container>
    </div>
  );
}

const Container = styled.div`
  background-color: #aaaaaa;
  border: 1px solid blue;
  color: blue;
  font-size: 18pt;
`;