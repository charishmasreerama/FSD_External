import { useEffect, useState } from 'react'

type Post = {
  title: string
  body: string
}

function FetchWithEffect() {
  const [data, setData] = useState<Post | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json() as Promise<Post>)
      .then((post) => setData(post))
  }, [])

  return (
    <main>
      {data ? (
        <>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  )
}

export default FetchWithEffect
