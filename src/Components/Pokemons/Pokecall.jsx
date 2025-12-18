
//async await vs fetch.then https://dev.to/paperbyte/async-await-vs-fetchthen-20oe
import { useRef, useState } from 'react';
import styles from './Pokecall.module.css'

export default function Pokecall() {
  const inputRef = useRef(null);
  const imageRef = useRef(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    const pokemonName = inputRef.current.value.toLowerCase();

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) {
        throw new Error('Could not fetch that Pokémon');
      }

      const data = await response.json();
      const pokemonPicture = data.sprites.front_default;

      imageRef.current.src = pokemonPicture;
      imageRef.current.style.display = 'block';
      setError(null); // clear error if success
    } catch (err) {
      console.error(err);
      setError('Could not find that Pokémon!');
      imageRef.current.style.display = 'none';
    }
  }

  return (
    <div className={styles.container}>
      <input type="text" ref={inputRef} className={styles["input"]} placeholder="Enter Pokémon Name" />
      <button onClick={fetchData} className={styles.btn}>Fetch Pokémon</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className={styles.spriteBox}>

        <img
            ref={imageRef}
            alt="Pokémon"
            style={{ display: 'none', marginTop: '1rem', height: '10rem', width: '10rem' }}
        />
      </div>
    </div>
  );
}
