export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Coffee' | 'Tea' | 'Pastry' | 'Seasonal';
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export type Category = MenuItem['category'] | 'All';
