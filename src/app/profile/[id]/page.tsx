export default function UserProfile({params} : any) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Profile Page</h1>
        <hr />
        <p className="mt-4">Profile Page {params.id}</p>
      </div>
    );
  }
  