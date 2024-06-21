import Image from "next/image";
import Subtitle from "@/uikit/typography/subtitle";
import Title from "@/uikit/typography/title";
import Description from "@/uikit/typography/description";
import BackgroundWithTexture from "@/uikit/BackgroundWithTexture";
import FeatureCard from "@/uikit/featureCard";

import featureImg1 from "../../../public/home/about/feature-img-1.jpg";
import featureImg2 from "../../../public/home/about/feature-img-2.jpg";
import featureImg3 from "../../../public/home/about/feature-img-3.jpg";

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
      <BackgroundWithTexture />
      <div className="max-w-[1370px] mx-auto px-6 lg:px-0">
        <div className="container mx-auto">
          <Subtitle>about</Subtitle>
          <Title>
            Welcome To <span className="font-normal">Alpha</span>Camp
          </Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            egestas nisi nec libero fermentum, a varius tortor venenatis. Sed
            vitae dolor interdum, semper leo at, tristique nisl. Maecenas vitae
            luctus tortor, vel efficitur sem. Maecenas tincidunt sem nec magna
            gravida varius. Aliquam nec ligula a augue congue condimentum.
            Pellentesque eget lorem euismod, viverra nisl in, viverra velit.
          </Description>
          <div className="flex justify-evenly mb-16 flex-col lg:flex-row">
            <div className="flex flex-col items-center justify-center mb-6 lg:mb-0">
              <Image
                src="/icons/camp-icon-1.svg"
                width={96}
                height={55}
                alt="icon"
              />
              <p className="mt-3 text-gray-800 uppercase font-inika">
                30 camper sites
              </p>
            </div>
            <span className="bg-gray-200 h-[50px] lg:flex w-[2px] hidden" />
            <div className="flex flex-col items-center justify-center mb-6 lg:mb-0">
              <Image
                src="/icons/camp-icon-2.svg"
                width={74}
                height={55}
                alt="icon"
              />
              <p className="mt-3 text-gray-800 uppercase font-inika">
                25 CARAVAN SITES
              </p>
            </div>
            <span className="bg-gray-200 h-[50px] lg:flex w-[2px] hidden" />
            <div className="flex flex-col items-center justify-center mb-6 lg:mb-0">
              <Image
                src="/icons/camp-icon-3.svg"
                width={58}
                height={55}
                alt="icon"
              />
              <p className="mt-3 text-gray-800 uppercase font-inika">
                50 TENT SITES
              </p>
            </div>
            <span className="bg-gray-200 h-[50px] lg:flex w-[2px] hidden" />
            <div className="flex flex-col items-center justify-center mb-6 lg:mb-0">
              <Image
                src="/icons/camp-icon-4.svg"
                width={94}
                height={58}
                alt="icon"
              />
              <p className="mt-3 text-gray-800 uppercase font-inika">
                10 GLAMP SITES
              </p>
            </div>
            <span className="bg-gray-200 h-[50px] lg:flex w-[2px] hidden" />
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/camp-icon-5.svg"
                width={90}
                height={56}
                alt="icon"
              />
              <p className="mt-3 text-gray-800 uppercase font-inika">
                10 CABIN HOUSES
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-9">
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
