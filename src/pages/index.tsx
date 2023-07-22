import Image from 'next/image'
import { Inter } from 'next/font/google'
import Counter from "@/components/Counter";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      {/*<Counter description={'MyCounter'} defaultCount={0}/>*/}
      <Counter/>
    </main>
  )
}
