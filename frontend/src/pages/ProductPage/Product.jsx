import React from 'react'
import './Product.css'
import Cart from '../../components/public/cart/Cart'
import { useParams } from 'react-router-dom'
import Header from '../../components/public/Header'
import Footer from '../../components/public/Footer'
import productImage from '../../components/public/cart/bakery-510925_1920.jpg'

const productCatalog = {
    '1': {
        name: 'Butter Croissant Box',
        sku: 'LB-CR-001-A',
        category: 'Signature Pastry',
        price: 18,
        serving: 'Box of 4 pieces',
        description:
            'Golden layers, cultured butter, and a crisp finish. This box is baked fresh in small batches every morning and packed for same-day delivery.',
        highlights: ['Same-day bake', 'No artificial flavors', 'Best seller'],
        batch: 'Morning Batch',
        image: productImage,
    },
    '2': {
        name: 'Almond Cream Danish',
        sku: 'LB-DN-014-B',
        category: 'Premium Danish',
        price: 12,
        serving: 'Pack of 2 pieces',
        description:
            'Flaky laminated dough filled with almond cream and finished with toasted flakes. Balanced sweetness with a rich buttery finish.',
        highlights: ['Toasted almonds', 'Hand-finished glaze', 'Limited daily'],
        batch: 'Chef Special',
        image: productImage,
    },
    '3': {
        name: 'Sourdough Country Loaf',
        sku: 'LB-SD-223-C',
        category: 'Artisan Bread',
        price: 11,
        serving: '750g loaf',
        description:
            'Naturally fermented for a deep flavor profile and open crumb. Excellent for breakfast toast, sandwiches, and dinner boards.',
        highlights: ['24h fermentation', 'Stone-baked crust', 'Vegan-friendly'],
        batch: 'Classic Line',
        image: productImage,
    },
    '4': {
        name: 'Vanilla Berry Tart',
        sku: 'LB-TR-045-D',
        category: 'Seasonal Dessert',
        price: 24,
        serving: '6-inch tart',
        description:
            'A crisp vanilla shell layered with pastry cream and fresh berries. A bright dessert with refined sweetness and silky texture.',
        highlights: ['Seasonal fruits', 'Madagascar vanilla', 'Celebration pick'],
        batch: 'Weekend Collection',
        image: productImage,
    },
}

const Product = () => {
    const { id = '1' } = useParams()

    const fallbackProduct = {
        name: 'Chef Choice Pastry',
        sku: `LB-NEW-${id}`,
        category: 'House Special',
        price: 15,
        serving: 'Pack of 2 pieces',
        description:
            'Freshly prepared daily with premium ingredients. This item rotates based on availability and seasonal flavors.',
        highlights: ['Freshly baked', 'Seasonal', 'Limited stock'],
        batch: 'Daily Selection',
        image: productImage,
    }

    const product = productCatalog[id] || fallbackProduct

    const relatedProductIds = Object.keys(productCatalog).filter(
        (productId) => productId !== id
    )
    const carouselProductIds =
        relatedProductIds.length > 0
            ? [...relatedProductIds, ...relatedProductIds]
            : Object.keys(productCatalog)

    return (
        <>
            <Header />
            <main className="product-page">
                <section className="product-showcase">
                    <div className="product-card">
                        <div className="product-media">
                            <p className="product-media__label">Freshly Baked</p>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-media__image"
                            />
                            <div className="product-highlights">
                                {product.highlights.map((highlight) => (
                                    <span key={highlight}>{highlight}</span>
                                ))}
                            </div>
                        </div>

                        <div className="product-content">
                            <p className="product-content__category">{product.category}</p>
                            <h1>{product.name}</h1>
                            <p className="product-content__description">
                                {product.description}
                            </p>

                            <div className="product-price-row">
                                <p className="product-price">${product.price.toFixed(2)}</p>
                                <span>{product.serving}</span>
                            </div>

                            <div className="product-meta">
                                <div>
                                    <p>SKU</p>
                                    <strong>{product.sku}</strong>
                                </div>
                                <div>
                                    <p>Batch</p>
                                    <strong>{product.batch}</strong>
                                </div>
                                <div>
                                    <p>Availability</p>
                                    <strong>In Stock</strong>
                                </div>
                            </div>

                            <div className="product-buttons">
                                <button type="button" className="product-btn product-btn--primary">
                                    Add to Cart
                                </button>
                                <button type="button" className="product-btn product-btn--ghost">
                                    Order for Pickup
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="product-related-section">
                    <div className="product-related-header">
                        <p>You may also like</p>
                        <h2>Related Products</h2>
                    </div>
                    <div className="product-related-list">
                        {carouselProductIds.map((productId, index) => (
                            <Cart
                                key={`related-${productId}-${index}`}
                                path={`/product/${productId}`}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Product
