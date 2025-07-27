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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
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
