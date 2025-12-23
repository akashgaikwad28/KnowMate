import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="flex justify-end">
        <UserButton />
      </div>
      <h1 className="text-2xl font-bold mt-4">Dashboard</h1>
    </div>
  );
}
