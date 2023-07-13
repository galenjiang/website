import Link from "next/link";

export default async function Dogs() {
  return (
    <div>
      <div>Dogs</div>
      <Link href={'/dogs/jack'}>to jack</Link>
    </div>
  )
}
