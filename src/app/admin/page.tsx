// src/app/admin/page.tsx
import Link from 'next/link';
import { MenuItem } from '@/context/CartContext';

// This function now fetches real data
async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/menu`, {
      cache: 'no-store',
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Failed to get menu items for admin page:", error);
    return [];
  }
}

const AdminDashboard = async () => {
  const menuItems = await getMenuItems();

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <Link href="/admin/add-item">
          <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700">
            Add New Item
          </button>
        </Link>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-700 text-gray-300 uppercase text-sm">
            <tr>
              <th className="py-3 px-6">Item Name</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-200">
            {menuItems?.map((item) => (
              <tr key={item._id} className="border-b border-gray-700 hover:bg-gray-700/50">
                <td className="py-4 px-6 font-medium">{item.name}</td>
                <td className="py-4 px-6">${item.price.toFixed(2)}</td>
                <td className="py-4 px-6 text-right space-x-2">
                  <button className="text-blue-400 hover:text-blue-300">Edit</button>
                  <button className="text-red-500 hover:text-red-400">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;