import Image from "next/image";


const Footer = () => {
    return (
      <section className="text-white bg-neutral-700 p-4 xs:px-5 sm:px-8 lg:px-12 xl:px-14">
        <section className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/krea-white.png"
              alt="Krea Logo"
              width={28}
              height={16}
              className="rounded"
            />
            <span className="ml-2 font-semibold text-lg">Krea AI</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-lg">curated by</span>
            <Image
              src="/mobbin.png"
              alt="Mobbin Logo"
              width={150}
              height={80}
              className="ml-4"
            />
          </div>
        </section>
      </section>
    );
};
export default Footer;