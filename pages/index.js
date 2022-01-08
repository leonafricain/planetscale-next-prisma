import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState} from 'react'
import Link from 'next/link';
export default function Home() {

  const [stars, setStars] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/stars').then(response => response.json()).then(data => {
      setStars(data);
      setIsLoading(false) 
    })
  }, [])

  if(isLoading) {
    return <p>Loading...</p>
  }
  if(!stars) {
    return <p>No list stars</p>
  }
  return (
    <div>
      <h1>List de stars from PlanetScale</h1>
      <ul>
        {
          stars.map(star => <li key={star.id}>
              {star.name} - <span>{star.createdAt}</span>
          </li>)
        }
      </ul>
    </div>
  )
}
