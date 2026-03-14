"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const productCategories = [
  { name: "Shorts", href: "/products/shorts" },
  { name: "Shirts", href: "/products/shirts" },
  { name: "Sweatshirts", href: "/products/sweatshirts" },
  { name: "Jackets", href: "/products/jackets" },
  { name: "Ladies", href: "/products/ladies" },
  { name: "Hats", href: "/products/hats" },
  { name: "Pants", href: "/products/pants" },
  { name: "Rod Covers", href: "/products/rod-covers" },
  { name: "Accessories", href: "/products/accessories" },
  { name: "Bags", href: "/products/bags" },
];

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Dealers", href: "/dealers" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-navy/95 backdrop-blur-md shadow-lg border-b border-white/5">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-brand-gold focus:text-brand-navy focus:px-4 focus:py-2 focus:rounded focus:z-50"
      >
        Skip to content
      </a>
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo-light.png"
              alt="BOOYAA Fishing Wear"
              width={960}
              height={540}
              className="h-8 md:h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            <Link
              href="/"
              className="px-3 py-2 text-[13px] font-semibold uppercase tracking-wider text-white/90 hover:text-brand-gold transition-colors"
            >
              Home
            </Link>

            {/* Shop dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <Link
                href="/products"
                className="px-3 py-2 text-[13px] font-semibold uppercase tracking-wider text-white/90 hover:text-brand-gold transition-colors flex items-center gap-1"
              >
                Shop
                <svg className={`w-3.5 h-3.5 transition-transform ${shopOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {shopOpen && (
                <div className="absolute top-full left-0 w-52 bg-white rounded-lg shadow-2xl py-2 border border-gray-100 mt-0">
                  <Link
                    href="/products"
                    className="block px-4 py-2.5 text-sm text-brand-navy hover:bg-brand-gold/10 hover:text-brand-navy font-semibold border-b border-gray-100"
                  >
                    All Products
                  </Link>
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="block px-4 py-2 text-sm text-brand-charcoal/80 hover:bg-brand-gold/10 hover:text-brand-navy transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[13px] font-semibold uppercase tracking-wider text-white/90 hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-white/80 hover:text-brand-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 pb-6 pt-2">
            <Link
              href="/"
              className="block px-4 py-2.5 text-white hover:text-brand-gold transition-colors font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <div className="px-4 py-2.5">
              <Link
                href="/products"
                className="text-brand-gold font-semibold text-sm uppercase tracking-wider"
                onClick={() => setMobileOpen(false)}
              >
                Shop All
              </Link>
              <div className="mt-2 ml-3 space-y-1 border-l border-white/10 pl-3">
                {productCategories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="block py-1.5 text-sm text-white/70 hover:text-brand-gold transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5 text-white hover:text-brand-gold transition-colors font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
