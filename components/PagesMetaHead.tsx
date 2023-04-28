import Head from "next/head";

function PagesMetaHead({ title, keywords, description }: PagesMetaHeadProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>Portfolio Julian Celeita</title>
    </Head>
  );
}

PagesMetaHead.defaultProps = {
  title: "Next.js & TailwindCSS Julian Celeita Portfolio",
  keywords: "React, Next.js, TypeScript, Firebase, GraphQL, Redux",
  description: "Hello, this is my personal portfolio dedicated to showcasing my best projects. You will find applications made with React, Next.js, TypeScript, Firebase, GraphQL, Redux, among others!",
};

export default PagesMetaHead;
