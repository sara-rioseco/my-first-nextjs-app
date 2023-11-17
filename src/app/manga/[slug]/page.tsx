import Image from "next/image";

type PostPageProps = {
  params: {
   slug : string;
  };
};

export default async function MangaIdPage({ params } : PostPageProps ) {
  const response = await fetch(`https://manga-apiv1.vercel.app/api/manga/${params.slug}`);
  const data = await response.json();
  return (
    <>
      <main className="flex-1 flex-row px-7 pt-12 text-center gap-x-5 box-content">
        <Image src={data.cover} alt={`manga ${data.title} cover`} className="h-[400] w-[300]"  width="300" height="400" />
        <div>
          <h1 className="text-5xl font-semibold mb-7">
            {data.title}
          </h1>
          <p className="max-w-[700px] mx-auto">
            {data.synopsis}
          </p>
        </div>
      </main>
    </>
  )
}