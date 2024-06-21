import BackgroundWithTexture from "@/uikit/BackgroundWithTexture";
import Description from "@/uikit/typography/description";
import Subtitle from "@/uikit/typography/subtitle";
import Title from "@/uikit/typography/title";
import BlogCard from "@/uikit/blogCard";

import blogImg1 from "../../../public/home/blog/blog-img1.jpg";
import blogImg2 from "../../../public/home/blog/blog-img2.jpg";
import blogImg3 from "../../../public/home/blog/blog-img3.jpg";
import blogImg4 from "../../../public/home/blog/blog-img4.jpg";

const posts = [
  {
    title: "El Mrij Review ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat..",
    src: blogImg1,
  },
  {
    title: "AlphaCamp Team Visit The Great Canyon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat..",
    src: blogImg2,
  },
  {
    title: "Beni-Mtir Review ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat..",
    src: blogImg3,
  },
  {
    title: "Ain Damous Review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat..",
    src: blogImg4,
  },
];

const Blog = () => {
  return (
    <div className="relative py-10">
      <BackgroundWithTexture />
      <div className="max-w-[1370px] mx-auto">
        <div className="container mx-auto">
          <Subtitle>blog</Subtitle>
          <Title>
            <span className="font-normal">Alpha</span>Camp Blog
          </Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            egestas nisi nec libero fermentum, a varius tortor venenatis. Sed
            vitae dolor interdum, semper leo at, tristique nisl. Maecenas vitae
            luctus tortor, vel efficitur sem. Maecenas tincidunt sem nec magna
            gravida varius. Aliquam nec ligula a augue congue condimentum.
            Pellentesque eget lorem euismod, viverra nisl in, viverra velit.
          </Description>
          <div className="grid grid-cols-2 gap-9">
            {posts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
