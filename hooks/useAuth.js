import { authstore } from "@/store/authstore";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const useAuth = (Component) => {
  return (props) => {
    const router = useRouter();
    const pathname = router.pathname;
    const isLoginPage = pathname === "/login";

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        authstore.dispatch({ type: "UPDATE_TOKEN", payload: { token } });
        if (isLoginPage) {
          router.replace("/");
        }
      } else {
        router.replace("/login");
      }
    }, [router]);

    return <Component {...props} />;
  };
};
