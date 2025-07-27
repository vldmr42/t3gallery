import { db } from "~/server/db";

const mockUrls = [
  "https://ru0s7pis5r.ufs.sh/f/akJMLL1mLkBArDcMQ0Zza5viKU6uSh9qYWPTnBdyp7wHeZlt",
  "https://ru0s7pis5r.ufs.sh/f/akJMLL1mLkBAowTmyI2ejPU83vkcpLHBtVKNhuEnFARJ0TOD",
  "https://ru0s7pis5r.ufs.sh/f/akJMLL1mLkBATg6plon2uy1eGxRqSQacbfK0hN87C6LkZFow",
  "https://ru0s7pis5r.ufs.sh/f/akJMLL1mLkBAQdvODNF3YG8n1wgRqdPFpvH0ChQDxb5OBNjX",
];

const mockImages = [...mockUrls, ...mockUrls, ...mockUrls].map(
  (url, index) => ({
    id: index + 1,
    url,
  }),
);

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (app in progress)
    </main>
  );
}
