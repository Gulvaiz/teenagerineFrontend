"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import SaleCarousel from "@/components/SaleCarousel";
import QuickViewModal from "@/components/QuickViewModal";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Truck, ShieldCheck, Tag, RotateCcw } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";

interface HomeClientProps {
  newArrivals: any[];
  saleProducts: any[];
}

export default function HomeClient({ newArrivals, saleProducts }: HomeClientProps) {
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [activeDept, setActiveDept] = useState<"women" | "men" | "kids">("women");
  const [influencerIndex, setInfluencerIndex] = useState(0);

  const brandsTrackRef = useRef<HTMLDivElement | null>(null);
  const influencersTrackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setInfluencerIndex((prev) => (prev + 1) % 5); // 5 influencers hardcoded below
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (influencersTrackRef.current) {
      const track = influencersTrackRef.current;
      const cardWidth = 240; // Approx card width + gap reduced for center calc
      const gap = 24;
      const totalCardWidth = cardWidth + gap;
      const containerWidth = track.offsetWidth;

      // Calculate position to center the current item
      // Center of container = containerWidth / 2
      // Center of item i = i * totalCardWidth + cardWidth / 2
      // ScrollLeft = (Center of item i) - (Center of container)

      const scrollPos = (influencerIndex * totalCardWidth + cardWidth / 2) - (containerWidth / 2);

      track.scrollTo({
        left: scrollPos,
        behavior: 'smooth'
      });
    }
  }, [influencerIndex]);

  const handleQuickView = (product: any) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setTimeout(() => setQuickViewProduct(null), 300);
  };

  const handleAddToWishlist = (productId: string) => {
    // Add to wishlist logic here
    console.log("Added to wishlist:", productId);
  };

  const scrollTrack = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (!ref.current) return;
    const amount = direction === "left" ? -320 : 320;
    ref.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const deptCollections: Record<"women" | "men" | "kids", { title: string; image: string; href: string }[]> = {
    women: [
      {
        title: "Bags",
        image: "/SELL WITH US.jpeg",
        href: "/women/bags"
      },
      {
        title: "Clothing",
        image: "CLOTHING.jfif",
        href: "/women/clothing"
      },
      {
        title: "Footwear",
        image: "FOOTWEAR.jfif",
        href: "/women/footwear"
      },
      {
        title: "Accessories",
        image: "ACCESSORIES.jfif",
        href: "/women/accessories"
      }
    ],
    men: [
      {
        title: "Bags",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=900&fit=crop&q=80",
        href: "/men/bags"
      },
      {
        title: "Clothing",
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&h=900&fit=crop&q=80",
        href: "/men/clothing"
      },
      {
        title: "Footwear",
        image: "https://images.unsplash.com/photo-1507238795180-2c02b0eb3f2d?w=800&h=900&fit=crop&q=80",
        href: "/men/footwear"
      },
      {
        title: "Accessories",
        image: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&h=900&fit=crop&q=80",
        href: "/men/accessories"
      }
    ],
    kids: [
      {
        title: "Bags",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=900&fit=crop&q=80",
        href: "/kids/bags"
      },
      {
        title: "Clothing",
        image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800&h=900&fit=crop&q=80",
        href: "/kids/clothing"
      },
      {
        title: "Footwear",
        image: "https://images.unsplash.com/photo-1526413232641-2c726c4b2a48?w=800&h=900&fit=crop&q=80",
        href: "/kids/footwear"
      },
      {
        title: "Accessories",
        image: "https://images.unsplash.com/photo-1514986888952-8cd320577b68?w=800&h=900&fit=crop&q=80",
        href: "/kids/accessories"
      }
    ]
  };

  const brands = [
    { name: "Just Cavalli", image: "/brandsLogo/just-cavalli-logo-BEEC205E42-seeklogo.com.png" },
    { name: "Moschino", image: "/brandsLogo/moschino-logo-png_seeklogo-289345.png" },
    { name: "Salvatore Ferragamo", image: "/brandsLogo/sa3605feb3-salvatore-ferragamo-logo-ferragamo-symbol-svg-download-ferragamo-symbol-vector-file.png" },
    { name: "Tiffany & Co", image: "/brandsLogo/tiffany-co-logo-png-transparent.png" },
    { name: "Tods", image: "/brandsLogo/tods-logo-png_seeklogo-357522.png" },
    { name: "Tom Ford", image: "/brandsLogo/tom-ford-logo-png_seeklogo-383930.png" },
    // Reusing some for demo if needed to fill space, or just rely on duplication loop
  ];

  const influencers = [
    {
      image: "/influencers/img1-f229cc41.jpg",
      url: "https://www.instagram.com/tangerineluxury"
    },
    {
      image: "/influencers/img2-17de399e.jpg",
      url: "https://www.instagram.com/tangerineluxury"
    },
    {
      image: "/influencers/img3-572a1817.jpg",
      url: "https://www.instagram.com/tangerineluxury"
    },
    {
      image: "/influencers/img4-4578214a.jpg",
      url: "https://www.instagram.com/tangerineluxury"
    },
    {
      image: "/influencers/img5-e2841ec6.jpg",
      url: "https://www.instagram.com/tangerineluxury"
    }
  ];

  // Duplicate for loop effect logic if needed, but for now simple array
  // We use the same array but ensure we handle index well.

  return (
    <>
      <Header />

      <main>
        {/* HERO CAROUSEL */}
        <HeroCarousel />

        {/* SALE IS LIVE SECTION */}
        {saleProducts.length > 0 && (
          <section className={styles.saleSection}>
            <SaleCarousel products={saleProducts} onQuickView={handleQuickView} />
            <div className={styles.showMoreContainer}>
              <Link href="/sale" className={styles.showMoreButton}>
                Show more <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        )}

        {/* SHOP BY CATEGORY (Women / Men / Kids) */}
        <section className={styles.shopByCategorySection}>
          <div className="container">
            <h2 className={styles.shopByCategoryTitle}>SHOP BY CATEGORY</h2>
            <p className={styles.shopByCategorySubtitle}>
              Discover our carefully curated collections designed for every style and age.
            </p>
            <div className={styles.shopByCategoryGrid}>
              <Link href="/women" className={styles.shopByCategoryCard}>
                <div
                  className={styles.shopByCategoryImage}
                  style={{
                    backgroundImage:
                      "url(/prestig-2.jpg)"
                  }}
                />
                <div className={styles.shopByCategoryLabel}>WOMEN</div>
              </Link>
              <Link href="/men" className={styles.shopByCategoryCard}>
                <div
                  className={styles.shopByCategoryImage}
                  style={{
                    backgroundImage:
                      'url(/MEN.jpeg)'
                  }}
                />
                <div className={styles.shopByCategoryLabel}>MEN</div>
              </Link>
              <Link href="/kids" className={styles.shopByCategoryCard}>
                <div
                  className={styles.shopByCategoryImage}
                  style={{
                    backgroundImage:
                      'url(/KIDS.jpg)'
                  }}
                />
                <div className={styles.shopByCategoryLabel}>KIDS</div>
              </Link>
            </div>
          </div>
        </section>

        {/* WOMEN / MEN / KIDS COLLECTION GRID */}
        <section className={styles.deptCollectionsSection}>
          <div className="container">
            <div className={styles.deptTabs}>
              {(["women", "men", "kids"] as const).map((dept) => (
                <button
                  key={dept}
                  className={`${styles.deptTab} ${activeDept === dept ? styles.deptTabActive : ""}`}
                  onClick={() => setActiveDept(dept)}
                >
                  {dept.toUpperCase()}
                </button>
              ))}
            </div>
            <div className={styles.deptCardsRow}>
              {deptCollections[activeDept].map((item) => (
                <Link href={item.href} key={item.title} className={styles.deptCard}>
                  <div
                    className={styles.deptCardImage}
                    style={{ backgroundImage: `url("${item.image}")` }}
                  />
                  <div className={styles.deptCardOverlay}>
                    <div className={styles.deptCardTitle}>{item.title}</div>
                    <div className={styles.deptCardCta}>SHOP NOW</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* NEW ARRIVALS (small strip using API data) */}
        {newArrivals.length > 0 && (
          <section className={styles.featuredSection}>
            <div className="container">
              <h2 className="section-title">New Arrivals</h2>
              <div className={styles.productsGrid}>
                {newArrivals.slice(0, 4).map((p) => (
                  <ProductCard key={p.id} {...p} onQuickView={handleQuickView} />
                ))}
              </div>
              <div className={styles.viewAllContainer}>
                <Link href="/new-arrivals" className="btn btn-outline">
                  View All <ArrowRight size={16} style={{ marginLeft: 8 }} />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* SHOP BY BRANDS */}
        <section className={styles.brandsSection}>
          <div className="container">
            <h2 className={styles.brandsTitle}>SHOP BY BRANDS</h2>
            <div className={styles.brandsMarquee}>
              <div className={styles.brandsTrack}>
                {[...brands, ...brands].map((brand, index) => (
                  <div key={`${brand.name}-${index}`} className={styles.brandLogoCard}>
                    <div
                      className={styles.brandLogoImage}
                      style={{ backgroundImage: `url("${brand.image}")` }}
                      title={brand.name}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.brandsExploreWrapper}>
              <Link href="/brands" className={styles.brandsExploreButton}>
                Explore All Brands
              </Link>
            </div>
          </div>
        </section>

        {/* SELL WITH US */}
        <section className={styles.sellWithUsSection}>
          <div className="container">
            {/* MAIN TITLE */}
            <h2 className={styles.sellWithUsTitle}>SELL WITH US</h2>

            <div className={styles.sellWithUsGrid}>
              {/* LEFT SIDE */}
              <div>
                {/* INTRO TEXT (NEW) */}
                <h3 className={styles.sellWithUsIntroTitle}>
                  From Closet to Cash –
                </h3>
                <p className={styles.sellWithUsIntroSubtitle}>
                  Give Your Luxury a Second Life
                </p>

                {/* STEPS */}
                <div className={styles.sellWithUsSteps}>
                  <div className={styles.sellStep}>
                    <span className={styles.sellStepIcon}>🖼️</span>
                    SHARE IMAGE<br />OF YOUR PRODUCTS
                  </div>

                  <div className={styles.sellStep}>
                    <span className={styles.sellStepIcon}>🚚</span>
                    FREE PAN-INDIA PICK-UP<br />NATIONWIDE SERVICE
                  </div>

                  <div className={styles.sellStep}>
                    <span className={styles.sellStepIcon}>✔️</span>
                    AUTHENTICATION<br />&amp; LISTING
                  </div>

                  <div className={styles.sellStep}>
                    <span className={styles.sellStepIcon}>📄</span>
                    DIGITAL CONTRACT<br />ASSURANCE CERTIFICATE
                  </div>

                  <div className={styles.sellStep}>
                    <span className={styles.sellStepIcon}>💰</span>
                    PAYMENT IN 24 HOURS<br />NO PAYMENT DELAYS
                  </div>

                  <div className={styles.sellStep}>
                    <span className={styles.sellStepIcon}>📞</span>
                    CONTACT US<br />704 203 9009
                  </div>
                </div>

              </div>

              {/* RIGHT SIDE IMAGE */}
              <div className={styles.sellWithUsImageWrapper}>
                <div
                  className={styles.sellWithUsImage}
                  style={{
                    backgroundImage:
                      'url("/SELL WITH US.jpeg")',
                  }}
                />
              </div>
            </div>

            {/* READY TO SELL (NEW) */}
            <div className={styles.readyToSellSection}>
              <h3 className={styles.readyToSellTitle}>
                Ready to Start Selling?
              </h3>

              <p className={styles.readyToSellSubtitle}>
                Join thousands of successful sellers on our platform and turn your luxury
                items into profit. We're here to help you every step of the way.
              </p>

              <Link href="/sell-with-us" className={styles.readyToSellButton}>
                Create Seller Account
              </Link>
            </div>
          </div>
        </section>

        {/* OUR SERVICES */}
        <section className={styles.servicesSection}>
          <div className="container">
            <h2 className={styles.servicesTitle}>OUR SERVICES</h2>
            <div className={styles.servicesGrid}>
              <Link href="/services/bio-cleaning" className={styles.serviceCard}>
                <div className={styles.serviceImageWrapper}>
                  <div
                    className={styles.serviceImage}
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=600&fit=crop&q=80")'
                    }}
                  />
                </div>
                <div className={styles.serviceLabel}>BIO CLEANING</div>
              </Link>
              <Link href="/services/authentication" className={styles.serviceCard}>
                <div className={styles.serviceImageWrapper}>
                  <div
                    className={styles.serviceImage}
                    style={{
                      backgroundImage:
                        'url("/AUTHENTICATION.jpeg")'
                    }}
                  />
                </div>
                <div className={styles.serviceLabel}>AUTHENTICATION</div>
              </Link>
              <Link href="/services/private-viewing" className={styles.serviceCard}>
                <div className={styles.serviceImageWrapper}>
                  <div
                    className={styles.serviceImage}
                    style={{
                      backgroundImage:
                        'url("/PRIVATE VIEW.jpg")'
                    }}
                  />
                </div>
                <div className={styles.serviceLabel}>PRIVATE VIEWING</div>
              </Link>
              <Link href="/services/request-product" className={styles.serviceCard}>
                <div className={styles.serviceImageWrapper}>
                  <div
                    className={styles.serviceImage}
                    style={{
                      backgroundImage:
                        'url("/REQUEST A PRODUCT.jpg")'
                    }}
                  />
                </div>
                <div className={styles.serviceLabel}>REQUEST A PRODUCT</div>
              </Link>
            </div>
          </div>
        </section>

        {/* INFLUENCER STYLE GUIDES */}
        <section className={styles.influencerSection}>
          <div className="container">
            <h2 className={styles.influencerTitle}>INFLUENCER STYLE GUIDES</h2>
            <p className={styles.influencerSubtitle}>
              Get inspired by our fashion influencers as they showcase the latest trends and styling tips
              from Tangerine Luxury.
            </p>
            <div className={styles.influencerCarouselWrapper}>
              <button
                className={styles.influencerNavButton}
                onClick={() => scrollTrack(influencersTrackRef, "left")}
                aria-label="Previous reels"
              >
                ‹
              </button>
              <div className={styles.influencerTrack} ref={influencersTrackRef}>
                {influencers.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.influencerCard} ${index === influencerIndex ? styles.influencerCardActive : ''}`}
                  >
                    <div
                      className={styles.influencerImage}
                      style={{ backgroundImage: `url("${item.image}")` }}
                    />
                  </a>
                ))}
              </div>
              <button
                className={styles.influencerNavButton}
                onClick={() => scrollTrack(influencersTrackRef, "right")}
                aria-label="Next reels"
              >
                ›
              </button>
            </div>
          </div>
        </section>

        {/* MIX, MATCH & SHOP THE COMBO */}
        <section className={styles.comboSection}>
          <div className="container">
            <div className={styles.comboGridExact}>

              {/* LEFT — SHOP THE LOOK CARDS */}
              <div className={styles.comboImagesExact}>
                <div
                  className={styles.comboImageMain}
                  style={{
                   backgroundImage: 'url("/prestig-1.jpg")'
                  }}
                >
                  <span className={styles.comboOverlayText}>SHOP</span>
                </div>

                <div className={styles.comboImageRow}>
                  <div
                    className={styles.comboImageSmallExact}
                    style={{
                     backgroundImage: 'url("/prestig-2.jpg")'
                    }}
                  >
                    <span className={styles.comboOverlayText}>THE</span>
                  </div>

                  <div
                    className={styles.comboImageSmallExact}
                    style={{
                     backgroundImage: 'url("/prestig-3.jpg")'
                    }}
                  >
                    <span className={styles.comboOverlayText}>LOOK</span>
                  </div>
                </div>
              </div>

              {/* RIGHT — CONTENT */}
              <div className={styles.comboContentExact}>
                <h2 className={styles.comboTitle}>
                  MIX, MATCH & SHOP THE COMBO
                </h2>

                <p className={styles.comboDescription}>
                  Enteger neque felis, egestas a euismod in, pulvinar et nisl. Aliquam ullam.
                  Nulla tincidunt convallis bibendum. Duis sed risus suscipit justo maximus pulvinar.
                </p>

                <div className={styles.comboProducts}>
                  <div className={styles.comboProduct}>
                    <div
                      className={styles.comboProductImage}
                      style={{
                        backgroundImage:
                          'url("/img-box01-1.jpg")'
                      }}
                    />
                    <div>
                      <div className={styles.comboProductName}>Women Casual Sweater</div>
                      <div className={styles.comboProductPrice}>₹800</div>
                    </div>
                  </div>

                  <div className={styles.comboProduct}>
                    <div
                      className={styles.comboProductImage}
                      style={{
                        backgroundImage:
                          'url("/img-box02-1.jpg")'
                      }}
                    />
                    <div>
                      <div className={styles.comboProductName}>White Shorts</div>
                      <div className={styles.comboProductPrice}>₹20</div>
                    </div>
                  </div>

                  <div className={styles.comboProduct}>
                    <div
                      className={styles.comboProductImage}
                      style={{
                        backgroundImage:
                          'url("/img-box03-1.jpg")'
                      }}
                    />
                    <div>
                      <div className={styles.comboProductName}>Sneakers</div>
                      <div className={styles.comboProductPrice}>₹120</div>
                    </div>
                  </div>
                </div>

                <Link href="/collections" className={styles.comboButton}>
                  Shop Collection →
                </Link>
              </div>

            </div>
          </div>
        </section>

       
      {/* BRAND STORY / USP STRIP */}
<section className={styles.brandStorySection}>
  <div className={styles.brandStoryContainer}>

    {/* LOGO (instead of heading text) */}
    <div className={styles.brandStoryLogo}>
      <Image
        src="/Tangerine-Logo-200px.png"
        alt="Tangerine Luxury"
        width={280}
        height={120}
        priority
      />
    </div>

    <p className={styles.brandStoryText}>
      An online marketplace like &quot;Tangerine Luxury&quot; allows users to buy and sell pre-loved women&apos;s,
      men&apos;s, and children&apos;s clothing and accessories.
    </p>

    <p className={styles.brandStoryText}>
      Every single item in our collection was carefully chosen. You won&apos;t need to worry about anything
      when you shop with us because each and every product meets the highest standards for both quality and
      style.
    </p>

    <div className={styles.brandUspRow}>
      <div className={styles.brandUspItem}>
        <RotateCcw size={28} strokeWidth={1.5} />
        <span>HASSLE FREE RETURNS</span>
      </div>

      <div className={styles.brandUspItem}>
        <Tag size={28} strokeWidth={1.5} />
        <span>AFFORDABLE LUXURY</span>
      </div>

      <div className={styles.brandUspItem}>
        <ShieldCheck size={28} strokeWidth={1.5} />
        <span>100% GUARANTEED AUTHENTIC</span>
      </div>

      <div className={styles.brandUspItem}>
        <Truck size={28} strokeWidth={1.5} />
        <span>WORLDWIDE SHIPPING</span>
      </div>
    </div>

  </div>
</section>

      </main>

      <Footer />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
        onAddToWishlist={handleAddToWishlist}
      />
    </>
  );
}
