import PagesMetaHead from "../PagesMetaHead";
import AppFooter from "../shared/AppFooter";
import AppHeader from "../shared/AppHeader";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PagesMetaHead description={undefined} />
      <AppHeader />
      <div>{children}</div>
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
