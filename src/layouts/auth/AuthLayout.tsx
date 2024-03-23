import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  // useEffect(() => {
  //   if (state.isAuthenticated && router.isReady) router.push("/");
  // }, [router.isReady, state.isAuthenticated]);

  // if (state.isAuthenticated) return null;

  return (
    <div className="w-full h-screen lg:grid grid-cols-2">
      <div className="bg-white h-screen w-full flex items-center justify-center">
        <div className="absolute top-[16px] left-4">
          <Link href="/">
            <Image
              src="/logo.png"
              width={64}
              height={32}
              objectFit="contain"
              alt="logo siap cuan"
            />
          </Link>
        </div>
        {children}
      </div>
      <div className="bg-slate-200 h-screen w-full hidden lg:block relative">
        <Image
          unoptimized
          src="https://images.unsplash.com/photo-1640622303392-7d2bee0c2438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
