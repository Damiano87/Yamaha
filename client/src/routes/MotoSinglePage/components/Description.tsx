type DescProps = {
  description2: string;
  description2Title: string;
};
const Description = ({ description2, description2Title }: DescProps) => {
  return (
    <article className="lg:w-[42rem] mx-auto my-24">
      <h2 className="text-[1.5rem] uppercase font-bold mb-4">
        {description2Title}
      </h2>
      <p className="text-[1.1rem]">{description2}</p>
    </article>
  );
};

export default Description;
