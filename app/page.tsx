import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Fat Mare Week.</strong> When will the extra horse
            on the inside become an extra horse on the outside? Only the mare
            knows...
          </p>
          <Link
            href="/watch"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Watch Now</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/mare-pic.jpg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="A visibly pregnant mare"
          />
          <Image
            src="/mare-pic.jpg"
            width={560}
            height={620}
            className="block md:hidden"
            alt="A visibly pregnant mare"
          />
        </div>
      </div>
    </main>
  );
}
