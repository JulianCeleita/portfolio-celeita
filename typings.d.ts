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