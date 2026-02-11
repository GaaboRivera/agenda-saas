import { getUser } from "@/actions/auth/get-user";
import { TableContacts } from "@/components/dashboard/contacts/TableContacts";
import { TopNav } from "@/components/dashboard/TopNav";

export default async function FavoritesPage() {
  const user = await getUser();

  const userMetaData = user?.user_metadata;
  const displayName = userMetaData?.name;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <div className="bg-background text-foreground">
        <TopNav
          email={user?.email ?? "example@example.com"}
          name={displayName ?? "User"}
        />
      </div>
      <main className="p-4 lg:p-6">
        <h2 className="text-2xl font-bold ">Favoritos</h2>
        <hr className="my-5" />
        <TableContacts id={user?.id ?? ""} favorites={true} />
      </main>
    </div>
  );
}
