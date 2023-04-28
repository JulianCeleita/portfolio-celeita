import Image from "next/image";

function AboutClientSingle({ title, image }: AboutClientSingleProps) {
  return (
    <div className="py-5 px-10 border bg-secondary-light hover: border-ternary-light dark:border-ternary-dark  shadow-sm rounded-lg mb-5 hover:scale-110 transition-transform duration-200 ease-in-out">
      <Image
        src={image}
        alt={title}
        layout="responsive"
        width={100}
        height={50}
      />
    </div>
  );
}

export default AboutClientSingle;
