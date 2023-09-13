"use client";
import { Button } from "@/components/ui/button";
import { AiOutlineGithub } from "react-icons/ai";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/navigation";

interface AuthButtonProps {
  isLogin: boolean;
}

const AuthButton = ({ isLogin }: AuthButtonProps) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: `${location.origin}/auth/callback` },
    });
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <>
      {isLogin ? (
        <Button
          className="w-full h-14 gap-2 font-semibold"
          variant="destructive"
          onClick={signout}
        >
          <BiLogOut className="text-lg" />
          <h1>Logout</h1>
        </Button>
      ) : (
        <Button
          className="w-full h-14 gap-2 font-semibold"
          onClick={signInWithGitHub}
        >
          <AiOutlineGithub className="text-lg" />
          <h1>Sign In With Github</h1>
        </Button>
      )}
    </>
  );
};

export default AuthButton;
