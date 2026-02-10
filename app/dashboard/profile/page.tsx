import { getUser } from "@/actions/auth/get-user";
import { ChangeName } from "@/components/dashboard/profile/ChangeName";
import { ChangePassword } from "@/components/dashboard/profile/ChangePassword";
import { TopNav } from "@/components/dashboard/TopNav";

export default async function ProfilePage() {
  const user = await getUser();

  const userMetaData = user?.user_metadata;
  const displayName = userMetaData?.name;
  const emailUser = userMetaData?.email;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <div className="bg-background text-foreground">
        <TopNav
          email={user?.email ?? "example@example.com"}
          name={displayName ?? "User"}
        />
      </div>
      <main className="p-4 lg:p-6">
        <h1 className="text-2xl font-bold ">Profile</h1>
        <hr />
        <ChangeName name={displayName ?? "User"} />
        <hr />
        <ChangePassword email={emailUser ?? "example@example.com"} />
      </main>
    </div>
  );
}
