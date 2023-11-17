import Link from "next/link"
import Image from "next/image";
import NoCover from "/src/app/assets/no-cover.png"

type MangaListProps = {data : []};

export default async function MangaList( data : MangaListProps) {
  return (
    <>
      <ul> {data.data.map((manga : { id : string, title : string, slug : string, cover: string}) => (
          <li key={manga.id} className="max-w-[400px] mb-3 mx-auto">
            <Link href={`manga/${manga.slug}`}>
              <Image src={manga.cover} alt={`manga ${manga.title} cover`} className="h-[160px] w-[120px]" width="300" height="400" />
              {manga.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}