import Image from "next/image";

export default function AboutHero2() {
  return (
    <section className="md:px-24 lg:flex block justify-between sm:px-16 px-10 py-6">
      <Image
        src="/assets/about-stone.png"
        className="w-[250px] h-[388px] lg:float-none float-left mb-4 mr-4"
        alt="Agrawal Stones"
        width={300}
        height={1000}
      />

      <p className=" first-letter:text-7xl text-justify text-lg pt-8">
        Welcome to the distinguished world of <strong>Agrawal Stones Group</strong>. Recognized nationally as the most
        reliable manufacturer and premier supplier of high-quality limestone, sandstone, and slatestone products, we
        pride ourselves on offering an extensive range of colors, sizes, and finishes to perfectly suit both interior
        and exterior applications. Our diverse product selection is celebrated for its exceptional material quality,
        exquisite finish, vibrant colors, and overall durability. This dedication to excellence has led to immense
        appreciation in the market and a growing demand from customers who frequently place substantial repeat orders,
        testifying to the reliability and superior quality of our offerings. At <strong>Agrawal Stones Group</strong>,
        we are committed to continuous innovation and contemporary design, ensuring our products remain at the forefront
        of industry standards. Our enhanced products and services have helped us cultivate a vast and loyal clientele,
        further solidifying our reputation. Each product is crafted with meticulous attention to detail, aligning with
        modern trends and evolving customer preferences. Experience the unparalleled quality and service that set{" "}
        <strong>Agrawal Stones Group</strong> apart in the stone industry, and discover why our customers consider us
        their trusted partner for all their stone needs.
      </p>
    </section>
  );
}
