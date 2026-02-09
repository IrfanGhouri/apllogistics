export interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    categorySlug: string;
    description: string;
    inStock: boolean;
    rating: number;
    reviews: number;
}

export const products: Product[] = [
    // Grocery & Foods
    {
        id: '1',
        name: 'Organic Fresh Vegetables Bundle',
        slug: 'organic-vegetables-bundle',
        price: 24.99,
        originalPrice: 29.99,
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80',
        category: 'Grocery & Foods',
        categorySlug: 'grocery-foods',
        description: 'A curated selection of fresh, organic vegetables perfect for healthy meals.',
        inStock: true,
        rating: 4.8,
        reviews: 124
    },
    {
        id: '2',
        name: 'Premium Basmati Rice 5kg',
        slug: 'premium-basmati-rice',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80',
        category: 'Grocery & Foods',
        categorySlug: 'grocery-foods',
        description: 'Long grain aromatic basmati rice, perfect for biryanis and pilafs.',
        inStock: true,
        rating: 4.9,
        reviews: 89
    },
    {
        id: '3',
        name: 'Fresh Fruits Basket',
        slug: 'fresh-fruits-basket',
        price: 32.99,
        originalPrice: 39.99,
        image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&q=80',
        category: 'Grocery & Foods',
        categorySlug: 'grocery-foods',
        description: 'Seasonal fresh fruits handpicked for quality and taste.',
        inStock: true,
        rating: 4.7,
        reviews: 156
    },
    {
        id: '4',
        name: 'Artisan Bread Collection',
        slug: 'artisan-bread-collection',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
        category: 'Grocery & Foods',
        categorySlug: 'grocery-foods',
        description: 'Freshly baked artisan breads made with traditional recipes.',
        inStock: true,
        rating: 4.6,
        reviews: 78
    },
    // Pets Supplies
    {
        id: '5',
        name: 'Premium Dog Food 10kg',
        slug: 'premium-dog-food',
        price: 45.99,
        originalPrice: 52.99,
        image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&q=80',
        category: 'Pets Supplies',
        categorySlug: 'pets-supplies',
        description: 'Nutritionally balanced premium dog food for all breeds.',
        inStock: true,
        rating: 4.9,
        reviews: 234
    },
    {
        id: '6',
        name: 'Cat Scratching Post Tower',
        slug: 'cat-scratching-tower',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&q=80',
        category: 'Pets Supplies',
        categorySlug: 'pets-supplies',
        description: 'Multi-level cat tower with scratching posts and cozy hideaways.',
        inStock: true,
        rating: 4.7,
        reviews: 167
    },
    {
        id: '7',
        name: 'Interactive Pet Toys Set',
        slug: 'interactive-pet-toys',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=600&q=80',
        category: 'Pets Supplies',
        categorySlug: 'pets-supplies',
        description: 'Fun and engaging toys to keep your pets entertained.',
        inStock: true,
        rating: 4.5,
        reviews: 92
    },
    {
        id: '8',
        name: 'Premium Cat Litter 20L',
        slug: 'premium-cat-litter',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80',
        category: 'Pets Supplies',
        categorySlug: 'pets-supplies',
        description: 'Clumping cat litter with superior odor control.',
        inStock: true,
        rating: 4.8,
        reviews: 145
    },
    // Water & Beverages
    {
        id: '9',
        name: 'Natural Spring Water 24-Pack',
        slug: 'spring-water-pack',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80',
        category: 'Water & Beverages',
        categorySlug: 'water-beverages',
        description: 'Pure natural spring water sourced from pristine mountains.',
        inStock: true,
        rating: 4.6,
        reviews: 312
    },
    {
        id: '10',
        name: 'Organic Green Tea Collection',
        slug: 'organic-green-tea',
        price: 19.99,
        originalPrice: 24.99,
        image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&q=80',
        category: 'Water & Beverages',
        categorySlug: 'water-beverages',
        description: 'Premium organic green tea varieties from around the world.',
        inStock: true,
        rating: 4.8,
        reviews: 189
    },
    {
        id: '11',
        name: 'Fresh Orange Juice 6-Pack',
        slug: 'fresh-orange-juice',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80',
        category: 'Water & Beverages',
        categorySlug: 'water-beverages',
        description: '100% freshly squeezed orange juice with no added sugar.',
        inStock: true,
        rating: 4.7,
        reviews: 134
    },
    {
        id: '12',
        name: 'Premium Coffee Beans 1kg',
        slug: 'premium-coffee-beans',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80',
        category: 'Water & Beverages',
        categorySlug: 'water-beverages',
        description: 'Arabica coffee beans roasted to perfection.',
        inStock: true,
        rating: 4.9,
        reviews: 267
    },
    // Household Essentials
    {
        id: '13',
        name: 'Eco-Friendly Cleaning Kit',
        slug: 'eco-cleaning-kit',
        price: 39.99,
        originalPrice: 49.99,
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80',
        category: 'Household Essentials',
        categorySlug: 'household-essentials',
        description: 'Complete cleaning kit with environmentally friendly products.',
        inStock: true,
        rating: 4.6,
        reviews: 178
    },
    {
        id: '14',
        name: 'Luxury Towel Set',
        slug: 'luxury-towel-set',
        price: 54.99,
        image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&q=80',
        category: 'Household Essentials',
        categorySlug: 'household-essentials',
        description: 'Soft, absorbent cotton towels in elegant colors.',
        inStock: true,
        rating: 4.8,
        reviews: 145
    },
    {
        id: '15',
        name: 'Smart Storage Containers Set',
        slug: 'storage-containers',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
        category: 'Household Essentials',
        categorySlug: 'household-essentials',
        description: 'Airtight food storage containers in various sizes.',
        inStock: true,
        rating: 4.5,
        reviews: 98
    },
    {
        id: '16',
        name: 'Premium Laundry Detergent',
        slug: 'premium-laundry-detergent',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80',
        category: 'Household Essentials',
        categorySlug: 'household-essentials',
        description: 'Powerful yet gentle laundry detergent for all fabrics.',
        inStock: true,
        rating: 4.7,
        reviews: 223
    },
    // Apparels
    {
        id: '17',
        name: 'Classic Cotton T-Shirt',
        slug: 'classic-cotton-tshirt',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
        category: 'Apparels',
        categorySlug: 'apparels',
        description: '100% organic cotton t-shirt in classic fit.',
        inStock: true,
        rating: 4.6,
        reviews: 289
    },
    {
        id: '18',
        name: 'Comfortable Joggers',
        slug: 'comfortable-joggers',
        price: 44.99,
        originalPrice: 54.99,
        image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80',
        category: 'Apparels',
        categorySlug: 'apparels',
        description: 'Soft and stretchy joggers perfect for everyday wear.',
        inStock: true,
        rating: 4.8,
        reviews: 176
    },
    {
        id: '19',
        name: 'Lightweight Hoodie',
        slug: 'lightweight-hoodie',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80',
        category: 'Apparels',
        categorySlug: 'apparels',
        description: 'Cozy hoodie perfect for layering in any season.',
        inStock: true,
        rating: 4.7,
        reviews: 198
    },
    {
        id: '20',
        name: 'Casual Sneakers',
        slug: 'casual-sneakers',
        price: 89.99,
        originalPrice: 109.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
        category: 'Apparels',
        categorySlug: 'apparels',
        description: 'Stylish and comfortable sneakers for everyday adventures.',
        inStock: true,
        rating: 4.9,
        reviews: 312
    }
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
    return products.filter(product => product.categorySlug === categorySlug);
};

export const getProductBySlug = (slug: string): Product | undefined => {
    return products.find(product => product.slug === slug);
};

export const getLatestProducts = (count: number = 8): Product[] => {
    return products.slice(0, count);
};
