import Image from 'next/image'
import Header from './_components/Header'

import Inicio from './_components/Inicio'

export default function Home() {
  return (
    <div>
      <Header/>
      <div><Inicio/></div>
    </div>
  )
}
