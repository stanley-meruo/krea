import { PiMicrophoneStageFill, PiPersonArmsSpreadFill } from "react-icons/pi";
import { BsImage } from "react-icons/bs";
import { HiVideoCamera } from "react-icons/hi";
import { ImMagicWand } from "react-icons/im";
import { LiaDraftingCompassSolid } from "react-icons/lia";
import { AiFillSignature } from "react-icons/ai";
import Button from "./Button";
import { MdOutlineModelTraining } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

const GenerateSection = () => {

    return (
      <section className="dark:text-white py-12 px-4 xs:px-5 sm:px-8 lg:px-12 xl:px-14">
        <section className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Generate</h2>
          <button className="flex items-center gap-1 text-sm font-semibold text-blue-500 dark:text-gray-400 md:text-base md:gap-1.5">
            <FaAngleDown />
            Show all
          </button>
        </section>

        {/* Section */}
        <section className="grid gap-8 md:grid-cols-2 md:gap-x-10 xmd:gap-x-18 xxl:grid-cols-3 xl:gap-x-20">
          <div className="space-y-8 md:space-y-10">
            {/* Image */}
            <div className="flex items-center gap-2">
              <span className="grid size-13 p-1 rounded-lg text-white bg-gradient-to-b from-gray-800 via-gray-500 to-gray-300">
                <BsImage size={24} className="m-auto" />
              </span>
              <div>
                <p className="flex items-center gap-x-2 font-semibold lg:text-lg">
                  Image
                  <span className="bg-blue-600 text-white rounded-xl px-2 text-sm">
                    New
                  </span>
                </p>
                <p className="text-xs w-56 md:w-50 lg:text-sm">
                  Generate images with custom styles in Flux and Ideogram.
                </p>
              </div>
              <div className="hidden xs:flex xs:ml-auto">
                <Button label="Open" />
              </div>
            </div>
            {/* Edit */}
            <div className="flex items-center gap-2">
              <span className="grid size-13 p-1 rounded-lg text-white bg-gradient-to-b from-gray-900 via-purple-900 to-purple-300">
                <LiaDraftingCompassSolid size={24} className="m-auto" />
              </span>
              <div>
                <p className="flex items-center gap-x-2 font-semibold">
                  Edit
                  <span className="bg-blue-600 text-white rounded-xl px-2 text-sm">
                    New
                  </span>
                </p>
                <p className="text-xs w-56 md:w-50 lg:text-sm">
                  Add oblects, change style or expand photos and generations.
                </p>
              </div>
              <div className="hidden xs:flex xs:ml-auto">
                <Button label="Open" />
              </div>
            </div>
          </div>

          <div className="space-y-8 md:space-y-10">
            {/* Video */}
            <div className="flex items-center gap-2">
              <span className="grid size-13 p-1 rounded-lg text-white bg-orange-400">
                <HiVideoCamera size={28} className="m-auto" />
              </span>
              <div>
                <p className="flex items-center gap-x-2 font-semibold">Video</p>
                <p className="text-xs w-56 md:w-50 lg:text-sm">
                  Generate videos with custom Haluo, Pica, Rutawuy, Luma and
                  more.
                </p>
              </div>
              <div className="hidden xs:flex xs:ml-auto">
                <Button label="Open" />
              </div>
            </div>
            {/* Video Lipsync */}
            <div className="flex items-center gap-2">
              <span className="grid size-13 p-1 rounded-lg text-white bg-gradient-to-b from-teal-950 via-teal-700 to-lime-200">
                <PiMicrophoneStageFill size={24} className="m-auto" />
              </span>
              <div>
                <p className="flex items-center gap-x-2 font-semibold">
                  Video Lipsync
                  <span className="bg-blue-600 text-white rounded-xl px-2 text-sm">
                    New
                  </span>
                </p>
                <p className="text-xs w-56 md:w-50 lg:text-sm">
                  Lip sync any video to audio.
                </p>
              </div>
              <div className="hidden xs:flex xs:ml-auto">
                <Button label="Open" />
              </div>
            </div>
          </div>

          <div className="space-y-8 md:space-y-10">
            {/* Realtime*/}
            <div className="flex items-center gap-2">
              <span className="grid size-13 p-1 rounded-lg text-white bg-gradient-to-b from-blue-400 via-cyan-500 to-cyan-100">
                <AiFillSignature size={28} className="m-auto" />
              </span>
              <div>
                <p className="flex items-center gap-x-2 font-semibold">
                  Realtime
                </p>
                <p className="text-xs w-56 md:w-50 lg:text-sm">
                  Realtime AI rebdering on a canvas. Instant feedback loops.
                </p>
              </div>
              <div className="hidden xs:flex xs:ml-auto">
                <Button label="Open" />
              </div>
            </div>
            {/* Motion Transfer */}
            <div className="flex items-center gap-2">
              <span className="grid size-13 p-1 rounded-lg text-white bg-black dark:bg-gray-700">
                <PiPersonArmsSpreadFill size={24} className="m-auto" />
              </span>
              <div>
                <p className="flex items-center gap-x-2 font-semibold">
                  Motion Transfer
                  <span className="bg-blue-500 text-white rounded-xl px-2 text-sm">
                    New
                  </span>
                </p>
                <p className="text-xs w-56 md:w-50 lg:text-sm">
                  Transfer motion to images and animate characters.
                </p>
              </div>
              <div className="hidden xs:flex xs:ml-auto">
                <Button label="Open" />
              </div>
            </div>
          </div>

          <div className="space-y-8 md:space-y-10">
            {/* Enhancer*/}
            <div className="flex items-center gap-2">
              <span className="grid size-13 p-1 rounded-lg text-white bg-gradient-to-b from-gray-950 via-gray-700 to-gray-500">
                <ImMagicWand size={24} className="m-auto" />
              </span>
              <div>
                <p className="flex items-center gap-x-2 font-semibold">
                  Enhancer
                </p>
                <p className="text-xs w-56 md:w-50 lg:text-sm">
                  Upscale and enhance images and videos up to 22k.
                </p>
              </div>
              <div className="hidden xs:flex xs:ml-auto">
                <Button label="Open" />
              </div>
            </div>
            {/* Train */}
            <div className="flex items-center gap-2">
              <span className="grid size-13 p-1 rounded-lg text-white bg-black dark:bg-gray-700">
                <MdOutlineModelTraining size={28} className="m-auto" />
              </span>
              <div>
                <p className="flex items-center gap-x-2 font-semibold">
                  Train
                  <span className="bg-blue-500 text-white rounded-xl px-2 text-sm">
                    New
                  </span>
                </p>
                <p className="text-xs w-56 md:w-50 lg:text-sm">
                  Teach Krea to replicate your style, products, or characters.
                </p>
              </div>
              <div className="hidden xs:flex xs:ml-auto">
                <Button label="Open" />
              </div>
            </div>
          </div>
        </section>
      </section>
    );
}
export default GenerateSection