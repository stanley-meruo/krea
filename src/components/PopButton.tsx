import { BsCreditCardFill } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";

const PopButton = () => {

    return (
      <div className="fixed bottom-5 right-4 flex gap-2 xs:right-5 sm:right-8 lg:right-12 xl:right-14 xxl:right-16">
        <button className="flex items-center gap-1 bg-gray-200 p-1.5 rounded-xl shadow transition text-sm lg:text-base">
          <IoDocumentText />
          Legal
        </button>
        <button className="flex items-center gap-1 bg-gray-200 p-1.5 rounded-xl shadow transition text-sm lg:text-base">
          <BsCreditCardFill />
          Pricing
        </button>
      </div>
    );
};
export default PopButton;