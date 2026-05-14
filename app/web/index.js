import User from "@/models/User";

export default async function Home() {

   const users = await User.find();

   return (
      <div>

        {users.map((user) => (
          <div key={user._id}>
            <h1>{user.username}</h1>
            <h2>{user.password}</h2>
          </div>
        ))}

      </div>
   )
}