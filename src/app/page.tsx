import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="bg-white/10 rounded-[30px] md:rounded-[60px] px-8 py-8 md:px-24 md:py-12 max-w-lg md:max-w-2xl text-white border-2 border-white/40 mx-auto mt-24 md:ml-24">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            association for computing machinery @ ut arlington
          </h1>
        </div>

        <p className="text-lg md:text-xl leading-relaxed font-medium">
          The ACM chapter at UTA welcomes students of all background, majors,
          interests, and skill levels to join our community and share in our
          love for technology. ACM is currently comprised of four committees,
          each serving a different topic and mission.
        </p>

        <div className="w-full flex justify-center mt-8">
          <Link href="#" target="_blank">
            <button className="font-bold text-lg border border-white/60 rounded-2xl px-5 py-1">
              apply
            </button>
          </Link>
        </div>
      </div>

      <div className="w-[85%] md:w-6/12 h-auto md:h-72 my-12 bg-white/10 rounded-[30px] md:rounded-tr-[0px] md:rounded-br-[0px] border-r-2 md:border-r-[0px] md: border-l-2 border-t-2 border-b-2 border-white/40 mx-auto md:mx-[0px] md:ml-auto p-12 flex flex-col items-center md:items-start justify-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Sponsors and Partners
        </h1>
      </div>
    </main>
  );
}
