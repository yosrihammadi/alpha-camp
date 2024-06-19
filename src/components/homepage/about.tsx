// import Image from "next/image";
import featureImg1 from "../../../public/home/about/feature-img-1.jpg";
import featureImg2 from "../../../public/home/about/feature-img-2.jpg";
import featureImg3 from "../../../public/home/about/feature-img-3.jpg";

import FeatureCard from "@/uikit/featureCard";
import Image from "next/image";

const About = () => {
  const featureData = [
    {
      title: "Explore area for tents",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas nisi nec libero fermentum, a varius tortor venenatis. Sed vitae dolor interdum.",
      src: featureImg1,
    },
    {
      title: "Trailers and RV spots",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas nisi nec libero fermentum, a varius tortor venenatis. Sed vitae dolor interdum.",
      src: featureImg2,
    },
    {
      title: "Cabins and glamping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas nisi nec libero fermentum, a varius tortor venenatis. Sed vitae dolor interdum.",
      src: featureImg3,
    },
  ];

  return (
    <div className="relative py-10">
      <div className="bg-[url('/home/about/bg-about-texture.webp')] opacity-50 py-9 absolute top-0 left-0 w-full h-full -z-10"></div>

      <div className="max-w-[1370px] mx-auto">
        <div className="container mx-auto">
          <p className="uppercase text-lg text-center font-bold font-inika text-green-50 mb-5">
            about
          </p>
          <h2 className="text-gray-700 text-center text-5xl font-bold font-inika mb-10">
            Welcome To <span className="font-normal">Alpha</span>Camp
          </h2>
          <p className="text-gray-600 text-base text-center mb-14 max-w-[1000px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            egestas nisi nec libero fermentum, a varius tortor venenatis. Sed
            vitae dolor interdum, semper leo at, tristique nisl. Maecenas vitae
            luctus tortor, vel efficitur sem. Maecenas tincidunt sem nec magna
            gravida varius. Aliquam nec ligula a augue congue condimentum.
            Pellentesque eget lorem euismod, viverra nisl in, viverra velit.
          </p>
          <div className="flex justify-evenly mb-16">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/camp-icon-1.svg"
                width={96}
                height={55}
                alt="icon"
              />
              <p className="mt-3 text-gray-700 uppercase font-inika">
                30 camper sites
              </p>
            </div>
            <span className="bg-gray-200 h-[80px] flex w-[2px]" />
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/camp-icon-2.svg"
                width={74}
                height={55}
                alt="icon"
              />
              <p className="mt-3 text-gray-700 uppercase font-inika">
                25 CARAVAN SITES
              </p>
            </div>
            <span className="bg-gray-200 h-[50px] flex w-[2px]" />
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/camp-icon-3.svg"
                width={58}
                height={55}
                alt="icon"
              />
              <p className="mt-3 text-gray-700 uppercase font-inika">
                50 TENT SITES
              </p>
            </div>
            <span className="bg-gray-200 h-[50px] flex w-[2px]" />
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/camp-icon-4.svg"
                width={94}
                height={58}
                alt="icon"
              />
              <p className="mt-3 text-gray-700 uppercase font-inika">
                10 GLAMP SITES
              </p>
            </div>
            <span className="bg-gray-200 h-[50px] flex w-[2px]" />
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/camp-icon-5.svg"
                width={90}
                height={56}
                alt="icon"
              />
              <p className="mt-3 text-gray-700 uppercase font-inika">
                10 CABIN HOUSES
              </p>
            </div>
          </div>
          <div className="flex space-x-8">
            {featureData.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
