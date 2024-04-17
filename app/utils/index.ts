import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const scrollToView = (key: string, router?: AppRouterInstance) => {
  if (typeof document !== "undefined") {
    const element = document?.getElementById(key);
    if (element?.scrollIntoView) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      router && router?.push("/");
    }
  }
};
