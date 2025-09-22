import Image from "next/image";


const Footer = () => {
    return (
      <section className="text-white bg-neutral-700 p-4 xs:px-5 sm:px-8 lg:px-12 xl:px-14">
        <section className="flex items-center justify-between text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Image
              src="/krea-white.png"
              alt="Krea Logo"
              width={28}
              height={16}
              className="rounded"
            />
            <span className="font-semibold">Krea AI</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">curated by</span>
            <Image
              src="/mobbin.png"
              alt="Mobbin Logo"
              width={100}
              height={80}
              className=""
            />
          </div>
        </section>
      </section>
    );
};
export default Footer;