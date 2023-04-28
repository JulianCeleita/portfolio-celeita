declare module 'uuid';

interface AppProps {
    Component: React.ComponentType<any>;
    pageProps: Record<string, any>
}

interface Skill {
    slug: string;
    Component: React.ElementType;
    title: string;
    Description: React.FC;
  }

  interface AboutClientSingleProps {
    title: string;
    image: string;
  }

  interface CounterItemProps {
    title: string;
    counter: number;
    measurement: string;
  }