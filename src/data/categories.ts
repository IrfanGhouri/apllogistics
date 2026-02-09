export interface Category {
    id: string;
    name: string;
    slug: string;
    image: string;
    description: string;
}

export const categories: Category[] = [
    {
        id: '1',
        name: 'Grocery & Foods',
        slug: 'grocery-foods',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
        description: 'Fresh groceries and quality food products delivered to your doorstep.'
    },
    {
        id: '2',
        name: 'Pets Supplies',
        slug: 'pets-supplies',
        image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80',
        description: 'Everything your furry friends need - food, toys, and accessories.'
    },
    {
        id: '3',
        name: 'Water & Beverages',
        slug: 'water-beverages',
        image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=600&q=80',
        description: 'Stay hydrated with our wide selection of water and beverages.'
    },
    {
        id: '4',
        name: 'Household Essentials',
        slug: 'household-essentials',
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80',
        description: 'Essential items for a clean and organized home.'
    },
    {
        id: '5',
        name: 'Apparels',
        slug: 'apparels',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
        description: 'Trendy and comfortable clothing for every occasion.'
    }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
    return categories.find(cat => cat.slug === slug);
};
