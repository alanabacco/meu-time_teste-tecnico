import { tokenService } from "@/services/tokenService";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    tokenService.delete();
    router.push("/");
  }, []);

  return (
    <>
      <h1>Você será redirecionado em instantes...</h1>
    </>
  );
}
