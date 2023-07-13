import Image from 'next/image'
import { sleep } from '@/utils'

export default async function Home() {
  console.log(111)
  await sleep(5000)
  console.log(222)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello next.js!
    </main>
  )
}
