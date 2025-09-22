import { FaAngleDown } from "react-icons/fa";

const GallerySection = () => {
    return (
      <section className="dark:text-white py-10 px-4 xs:px-5 sm:px-8 lg:px-12 xl:px-14">
        <section className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold md:text-3xl">Gallery</h2>
            <button className="flex items-center gap-1 text-sm font-semibold text-blue-500 dark:text-gray-400 md:text-base md:gap-1.5">
                <FaAngleDown />
                Show all
            </button>
        </section>
      </section>
    );
};
export default GallerySection;