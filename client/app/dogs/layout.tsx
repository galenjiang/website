export default async function Dogs({children}: { children: React.ReactNode}) {
  console.log('dogs')
  return (
    <div className='min-h-screen'>
      dog{ children }
    </div>
  )
}
