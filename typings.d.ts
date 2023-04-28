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

  interface ProjectSingleProps {
    id: string;
    img: string;
    title: string;
    category: string;
  }

  interface FormInputProps {
    inputLabel: string;
    labelFor: string;
    inputType: string;
    inputId: string;
    inputName: string;
    placeholderText: string;
    ariaLabelName: string;
  }

  interface SocialLink {
    id: number;
    icon: React.ReactNode;
    url: string;
  }