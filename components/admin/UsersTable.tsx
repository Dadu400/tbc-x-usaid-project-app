// import { getUsers, User } from "../../helpers/axiosUsers";
// import { deleteUserAction } from "../../actions";
// import DeleteUserButton from "./DeleteUserButton";
// import EditUserButton from "./EditUserButton";
// import AddUserButton from "./AddUserButton";

// async function UsersTable() {
//   const users = await getUsers();

//   return (
// <div className="max-w-5xl mx-auto my-14 min-h-[450px]">
//   <AddUserButton />
//   <div className="shadow-md">
//     <div className="bg-gray-50">
//       <div className="flex px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider gap-4">
//         <div className="w-1/6 text-left">Name</div>
//         <div className="w-1/3 text-left">Email</div>
//         <div className="w-1/6 text-left">Age</div>
//         <div className="w-1/12 text-center">Edit</div>
//         <div className="w-1/12 text-center">Delete</div>
//       </div>
//     </div>
//     <div className="bg-white divide-y divide-gray-200">
//       {users.map((user: User) => (
//         <div key={user.id} className="flex px-6 py-4 text-sm text-gray-900 gap-4">
//           <div className="w-1/6 whitespace-nowrap">{user.name}</div>
//           <div className="w-1/3 whitespace-nowrap">{user.email}</div>
//           <div className="w-1/6 whitespace-nowrap">{user.age}</div>
//           <div className="w-1/12 flex justify-center"><EditUserButton user={user} /></div>
//           <div className="w-1/12 flex justify-center"><DeleteUserButton id={user.id as number} deleteUser={deleteUserAction} /></div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
//   );
// }

// export default UsersTable;
