import Image from 'next/image';
function Footer() {
  return (
    <footer className="bg-cyan-600 mt-8 py-12">
      <div className="flex flex-row lg:px-16 md:px-10 sm:px-5 gap-8 items-end justify-between">
        <p className="text-lg">
          <a className="no-underline hover:underline" target="_blank" href="https://www.themoviedb.org/">
            <Image src="/tmdb-logo.svg" alt="My Image" width={200} height={50} />
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </a>
        </p>
        <p className="text-base">
          <a className="no-underline hover:underline" target="_blank" href="https://ashleyjaynes.com/">
            App developed by Ashley Jaynes
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
