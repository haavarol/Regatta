

async function getPost() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  return res.json();
}

export default async function Dashboard() {

  const post = await getPost();
  return (
    <main>
      <h1>
        Dashboard
      </h1>
      {JSON.stringify(post, null, 2)}
    </main>
  )
}