import { sleep } from "@/utils"

export default async function Jack() {
  
  await sleep(10000)
  console.log('jack end')
  return (
    <span>
      /jack
    </span>
  )
}
