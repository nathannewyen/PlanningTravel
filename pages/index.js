import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import '../styles/main.css';

// Utils
import { EventBus, defaultPlace, auth, logout } from '../utils';

// Components
import { Nav, WantToGo, PlacePicker, PlaceForm, AuthForm} from '../components';

export default function Home() {
  const [isModalShown, setIsModalShown] = useState(false);
  const [authModalShown, setAuthModalShown] = useState(false);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(user => setAuthed(!!user));
  }, []);

  const openModal = (place = defaultPlace) => {
    document.body.classList.add('freeze');
    // setPlaceToEdit(place);
    setIsModalShown(true);
  };

  const closeModal = () => {
    document.body.classList.remove('freeze');
    setIsModalShown(false);
  };

  EventBus.on('addPlace', () => {
    if (authed) {
      openModal();
    } else {
      setAuthModalShown(true);
    }
  });


  EventBus.on('login', () => {
    closeModal();
    // setAuthed(true);
    setAuthModalShown(true);
  });

  EventBus.on('closePlaceModal', () => closeModal());
  EventBus.on('closeAuthModal', () => setAuthModalShown(false));
  EventBus.on('logout', async () => await logout());

  return (
    <div>
      <Head>
        <title>Time to have fun</title>
      </Head>
      <Nav authed={authed} />
      <div className="container mx-auto px-4 pt-20">
        {authModalShown && <AuthForm />}

        {isModalShown && (
          <PlaceForm authed={authed} />
        )}

        <PlacePicker />
        
        <WantToGo />
      </div>
    </div>
  )
}
