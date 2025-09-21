import Carousel from "@/components/Carousel";
import Image from "next/image";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      content: (
        <Image
          src="/pic-11.jpg"
          className="w-full h-full object-cover rounded-lg"
          alt="Slide 1"
          width={500}
          height={400}
        />
      ),
      caption: "New Image Model",
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description:
        "Generate complex images with the brand new nd powerful Wan 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    },
    {
      id: 2,
      content: (
        <Image
          src="/pic-21.jpg"
          className="w-full h-full object-cover rounded-lg"
          alt="Slide 2"
          width={800}
          height={600}
        />
      ),
      caption: "New Image Model",
      title: "Open Source",
      subtitle: "FLUX.1 Krea",
      description:
        "We're making the weight to our FLUX.1 Kre model open source.Download and run our models weights, read the technical report, or generate with it in Krea image.",
    },
    {
      id: 3,
      content: (
        <Image
          src="/pic-11.jpg"
          className="w-full h-full object-cover rounded-lg"
          alt="Slide 3"
          width={800}
          height={600}
        />
      ),
      caption: "New Image Model",
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description:
        "Generate complex images with the brand new nd powerful Wan 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    },
    {
      id: 4,
      content: (
        <Image
          src="/pic-21.jpg"
          className="w-full h-full object-cover rounded-lg"
          alt="Slide 2"
          width={800}
          height={600}
        />
      ),
      caption: "New Image Model",
      title: "Open Source",
      subtitle: "FLUX.1 Krea",
      description:
        "We're making the weight to our FLUX.1 Kre model open source.Download and run our models weights, read the technical report, or generate with it in Krea image.",
    },
    {
      id: 5,
      content: (
        <Image
          src="/pic-11.jpg"
          className="w-full h-full object-cover rounded-lg"
          alt="Slide 2"
          width={800}
          height={600}
        />
      ),
      caption: "New Image Model",
      title: "Wan 2.2",
      subtitle: "WAN 2.2 Image generation",
      description:
        "Generate complex images with the brand new nd powerful Wan 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    },
    {
      id: 6,
      content: (
        <Image
          src="/pic-21.jpg"
          className="w-full h-full object-cover rounded-lg"
          alt="Slide 2"
          width={800}
          height={600}
        />
      ),
      caption: "New Image Model",
      title: "Open Source",
      subtitle: "FLUX.1 Krea",
      description:
        "We're making the weight to our FLUX.1 Kre model open source.Download and run our models weights, read the technical report, or generate with it in Krea image.",
    },
  ];

  return (
    <main className="flex items-center justify-center pt-32 px-4 xs:px-5 sm:px-8 lg:px-12 xl:px-14 xxl:px-16">
      <Carousel slides={slides} />
    </main>
  );
};
export default HeroSection;
