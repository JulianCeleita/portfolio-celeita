declare module "uuid";

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: Record<string, any>;
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
  counter: any;
  measurement: string;
}

interface ProjectSingleProps {
  id: string | number;
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

interface HireMeModalProps {
  onClose: () => void;
  onRequest: () => void;
}

interface PagesMetaHeadProps {
  title?: string;
  keywords?: string;
  description?: string;
}

interface AboutMe {
  id: string;
  bio: string;
}

interface Client {
    id: string;
    title: string;
    img: NextImageType;
  }

  interface ProjectHeader {
    title: string;
    publishDate: string;
    tags: string;
  }
  
  interface ProjectImage {
    id: string;
    title: string;
    img: string;
  }
  
  interface CompanyInfo {
    id: string;
    title: string;
    details: string;
  }
  
  interface Technology {
    title: string;
    techs: string[];
  }
  
  interface ProjectDetails {
    id: string;
    details: string;
  }
  
  interface ProjectInfo {
    ClientHeading: string;
    CompanyInfo: CompanyInfo[];
    Technologies: Technology[];
    ProjectDetailsHeading: string;
    ProjectDetails: ProjectDetails[];
  }
  
  interface Project {
    id: number;
    title: string;
    url: string;
    category: string;
    img: string;
    ProjectHeader: ProjectHeader;
    ProjectImages: ProjectImage[];
    ProjectInfo: ProjectInfo;
  }