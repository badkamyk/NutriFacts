import Image from 'next/image'
import styles from './page.module.css'
import Hero from '../components/Hero'
import Feature from '../components/Feature'

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
    </div>
  )
}
