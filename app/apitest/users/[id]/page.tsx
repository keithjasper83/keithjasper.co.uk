// // /app/apitest/users/[id]/page.tsx
// 'use server';

// import { fetchUserById } from '../../../../lib/api';

// export default async function UserPage({ params }: { params: { id: string } }) {
//   const user = await fetchUserById(params.id);
  
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-4">User Details</h1>
//       {user ? (
//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-xl font-semibold">{user.name}</h2>
//           <p className="text-gray-600">{user.email}</p>
//           {/* More user details */}
//         </div>
//       ) : (
//         <p>Loading user information...</p>
//       )}
//     </div>
//   );
// }
