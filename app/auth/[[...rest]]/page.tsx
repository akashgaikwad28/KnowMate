import { SignIn } from "@clerk/nextjs";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
        routing="hash"
        signUpUrl="/auth#/?mode=sign-up"
        signInUrl="/auth#/?mode=sign-in"
      />
    </div>
  );
}
