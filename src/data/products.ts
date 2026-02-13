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
    },
    // --- New Products from Zainclub Research ---
    // Grocery & Foods
    {
        id: '21',
        name: 'Condensed Fiesta Nacho Cheese Soup',
        slug: 'fiesta-nacho-cheese-soup',
        price: 2.14,
        image: '/images/Condensed Fiesta Nacho Cheese Soup.webp',
        category: 'Grocery & Foods',
        categorySlug: 'grocery-foods',
        description: 'A creamy, rich, and spicy soup that can be used as a recipe starter or a delicious dip.',
        inStock: true,
        rating: 4.5,
        reviews: 45
    },
    {
        id: '22',
        name: 'Chicken & Mini Round Noodle Sipping Soup',
        slug: 'chicken-noodle-sipping-soup',
        price: 2.79,
        image: '/images/Chicken & Mini Round Noodle Sipping Soup.webp',
        category: 'Grocery & Foods',
        categorySlug: 'grocery-foods',
        description: 'Portable, microwavable cup of comforting chicken soup with mini round noodles.',
        inStock: true,
        rating: 4.7,
        reviews: 32
    },
    {
        id: '23',
        name: 'Original Canned Pasta in Tomato Sauce',
        slug: 'spaghettios-original-pasta',
        price: 1.59,
        image: '/images/Original Canned Pasta in Tomato Sauce.webp',
        category: 'Grocery & Foods',
        categorySlug: 'grocery-foods',
        description: 'Signature O-shaped pasta in a savory tomato and cheese sauce, ready in minutes.',
        inStock: true,
        rating: 4.4,
        reviews: 87
    },
    {
        id: '24',
        name: 'Condensed Kids Chicken and Stars Soup',
        slug: 'kids-chicken-stars-soup',
        price: 2.49,
        image: '/images/Condensed Kids Chicken and Stars Soup.webp',
        category: 'Grocery & Foods',
        categorySlug: 'grocery-foods',
        description: 'Fun star-shaped pasta and tender chicken meat in a savory chicken broth.',
        inStock: true,
        rating: 4.8,
        reviews: 56
    },
    // Pets Supplies
    {
        id: '25',
        name: 'Chicken Jerky Recipe Dog Treats',
        slug: 'chicken-jerky-dog-treats',
        price: 19.99,
        image: '/images/Chicken Jerky Recipe Dog Treats.webp',
        category: 'Pets Supplies',
        categorySlug: 'pets-supplies',
        description: 'Premium chicken jerky treats made with real chicken for a high-protein snack.',
        inStock: true,
        rating: 4.9,
        reviews: 112
    },
    {
        id: '26',
        name: 'Irish Rover Beef Stick Dog Treats',
        slug: 'beef-stick-dog-treats',
        price: 24.99,
        image: '/images/Irish Rover Beef Stick Dog Treats.webp',
        category: 'Pets Supplies',
        categorySlug: 'pets-supplies',
        description: 'Savory beef sticks that dogs love, perfect for training and rewarding.',
        inStock: true,
        rating: 4.8,
        reviews: 78
    },
    {
        id: '27',
        name: 'All-Natural Beef Hide Canine Chews',
        slug: 'beef-hide-chews',
        price: 15.99,
        image: '/images/All-Natural Beef Hide Canine Chews.webp',
        category: 'Pets Supplies',
        categorySlug: 'pets-supplies',
        description: 'Long-lasting beef hide chews that promote healthy teeth and gums.',
        inStock: true,
        rating: 4.6,
        reviews: 94
    },
    {
        id: '28',
        name: 'Freeze-Dried Raw Beef Liver Bits',
        slug: 'freeze-dried-beef-liver',
        price: 29.99,
        image: '/images/Freeze-Dried Raw Beef Liver Bits.webp',
        category: 'Pets Supplies',
        categorySlug: 'pets-supplies',
        description: '100% natural, grain-free freeze-dried beef liver treats for dogs and cats.',
        inStock: true,
        rating: 4.9,
        reviews: 134
    },
    // Water & Beverages
    {
        id: '29',
        name: 'Purified Bottled Water 24-Pack',
        slug: 'purified-water-24-pack',
        price: 12.99,
        image: '/images/Purified Bottled Water 24-Pack.webp',
        category: 'Water & Beverages',
        categorySlug: 'water-beverages',
        description: 'Crisp and refreshing purified water in a convenient bulk pack.',
        inStock: true,
        rating: 4.7,
        reviews: 432
    },
    {
        id: '30',
        name: 'Carbonated Mineral Water 12-Pack',
        slug: 'carbonated-mineral-water',
        price: 14.99,
        image: '/images/Carbonated Mineral Water 12-Pack.webp',
        category: 'Water & Beverages',
        categorySlug: 'water-beverages',
        description: 'Premium carbonated mineral water from natural springs.',
        inStock: true,
        rating: 4.8,
        reviews: 124
    },
    {
        id: '31',
        name: '100% Natural North Spring Water',
        slug: 'natural-spring-water',
        price: 8.99,
        image: '/images/100% Natural North Spring Water.webp',
        category: 'Water & Beverages',
        categorySlug: 'water-beverages',
        description: 'Naturally filtered spring water with a clean, light taste.',
        inStock: true,
        rating: 4.6,
        reviews: 156
    },
    {
        id: '32',
        name: 'Plus+ Alkaline Bottled Water',
        slug: 'alkaline-bottled-water',
        price: 18.99,
        image: '/images/Plus+ Alkaline Bottled Water.webp',
        category: 'Water & Beverages',
        categorySlug: 'water-beverages',
        description: 'High-pH alkaline water enriched with essential minerals.',
        inStock: true,
        rating: 4.5,
        reviews: 89
    },
    // Household Essentials
    {
        id: '33',
        name: 'Windfresh Powder Laundry Detergent',
        slug: 'powder-laundry-detergent',
        price: 22.99,
        image: '/images/Windfresh Powder Laundry Detergent.webp',
        category: 'Household Essentials',
        categorySlug: 'household-essentials',
        description: 'High-efficiency powder detergent that removes tough stains effectively.',
        inStock: true,
        rating: 4.7,
        reviews: 215
    },
    {
        id: '34',
        name: 'Disinfecting Wipes Multi-Pack 3-Pack',
        slug: 'disinfecting-wipes-pack',
        price: 15.99,
        image: '/images/Disinfecting Wipes Multi-Pack 3-Pack.webp',
        category: 'Household Essentials',
        categorySlug: 'household-essentials',
        description: 'Kills 99.9% of bacteria and viruses on hard, non-porous surfaces.',
        inStock: true,
        rating: 4.8,
        reviews: 312
    },
    {
        id: '35',
        name: 'Artstyle Oval Paper Plates 50-Count',
        slug: 'oval-paper-plates',
        price: 12.49,
        image: '/images/Artstyle Oval Paper Plates 50-Count.webp',
        category: 'Household Essentials',
        categorySlug: 'household-essentials',
        description: 'Sturdy and stylish oval paper plates perfect for any gathering.',
        inStock: true,
        rating: 4.5,
        reviews: 67
    },
    {
        id: '36',
        name: 'Luxury 2-Ply Toilet Paper 24-Roll',
        slug: 'luxury-toilet-paper-pack',
        price: 19.99,
        image: '/images/Luxury 2-Ply Toilet Paper 24-Roll.webp',
        category: 'Household Essentials',
        categorySlug: 'household-essentials',
        description: 'Ultra-soft and absorbent 2-ply toilet paper for maximum comfort.',
        inStock: true,
        rating: 4.6,
        reviews: 145
    },
    // Apparels
    {
        id: '37',
        name: 'Classic Multi-Color Baseball Cap',
        slug: 'classic-baseball-cap',
        price: 15.99,
        image: '/images/Classic Multi-Color Baseball Cap.webp',
        category: 'Apparels',
        categorySlug: 'apparels',
        description: 'Breathable cotton baseball cap available in various premium colors.',
        inStock: true,
        rating: 4.7,
        reviews: 89
    },
    {
        id: '38',
        name: 'Premium Structured Fitted Hat',
        slug: 'premium-fitted-hat',
        price: 24.99,
        image: '/images/Premium Structured Fitted Hat.jpg',
        category: 'Apparels',
        categorySlug: 'apparels',
        description: 'Constructed fit hat with moisture-wicking technology and modern style.',
        inStock: true,
        rating: 4.8,
        reviews: 56
    },
    {
        id: '39',
        name: 'Outdoor Adventure Sun Hat',
        slug: 'outdoor-sun-hat',
        price: 29.99,
        image: '/images/Outdoor Adventure Sun Hat.jpg',
        category: 'Apparels',
        categorySlug: 'apparels',
        description: 'Wide-brimmed sun hat with UPF 50+ protection for outdoor activities.',
        inStock: true,
        rating: 4.9,
        reviews: 42
    },
    {
        id: '40',
        name: 'Stylish Heritage Winter Beanie',
        slug: 'stylish-winter-beanie',
        price: 19.99,
        image: '/images/Stylish Heritage Winter Beanie.jpg',
        category: 'Apparels',
        categorySlug: 'apparels',
        description: 'Warm and cozy ribbed beanie made from soft, high-quality yarns.',
        inStock: true,
        rating: 4.8,
        reviews: 123
    }
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
    return products.filter(product => product.categorySlug === categorySlug);
};

export const getProductBySlug = (slug: string): Product | undefined => {
    return products.find(product => product.slug === slug);
};

export const getLatestProducts = (count: number = 8): Product[] => {
    return [...products].reverse().slice(0, count);
};
