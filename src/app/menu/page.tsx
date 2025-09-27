// src/app/menu/page.tsx
import MenuPageClient from '@/components/MenuPageClient';
import { MenuItem } from '@/context/CartContext';

async function getMenuItems(): Promise<MenuItem[]> {
  try {
    // Add { cache: 'no-store' } here
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/menu`, {
      cache: 'no-store',
    });
    if (!res.ok) {
        return [];
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Failed to get menu items:", error);
    return [];
  }
}

const MenuPage = async () => {
  const menuItems = await getMenuItems();

  return <MenuPageClient menuItems={menuItems} />;
};

export default MenuPage;