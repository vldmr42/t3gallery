import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getUserImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getUserImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url} alt="image" />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="text-2x1 h-full w-full">Please Sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
