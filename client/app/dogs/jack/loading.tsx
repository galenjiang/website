import { sleep } from "@/utils"

export default async function Loading() {
    
  await sleep(5000)
  console.log('loading end')
  return (
    <div>
      abcdefghi
    </div>
  )
}
