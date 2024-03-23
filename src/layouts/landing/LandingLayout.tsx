import { Navbar } from "@/components/navigation";

type Props = {
  children: React.ReactNode;
};

export const LandingLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />

      {children}
    </div>
  );
};
