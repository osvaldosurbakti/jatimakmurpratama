import React from "react";
import HeroSection from "../components/products/HeroSection";
import ProductCategories from "../components/products/ProductCategories";
import FeaturedProducts from "../components/products/FeaturedProducts";
import ProductDetails from "../components/products/ProductDetails";
import CustomSolutions from "../components/products/CustomSolutions";
import MaterialQuality from "../components/products/MaterialQuality";
import CTASection from "../components/CTASection";

const ProductsPage = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Banner */}
      <HeroSection 
        title="Produk Kami" 
        subtitle="Kualitas Kayu Terbaik untuk Kebutuhan Anda"
        bgImage="/assets/gambarflooring.png"
      />
      
      {/* Product Categories */}
      <ProductCategories 
        title="Jenis Produk"
        categories={[
          {
            name: "Flooring",
            description: "Lantai kayu berkualitas dengan ketebalan 1.8cm",
            icon: "🪵",
            image: "/assets/gambarflooring.png"
          },
          {
            name: "Decking",
            description: "Deck outdoor tahan cuaca lebar 9cm & 14cm",
            icon: "🌳",
            image: "/assets/gambardecking.png"
          },
          {
            name: "Custom",
            description: "Produk khusus sesuai kebutuhan proyek Anda",
            icon: "✂️",
            image: "/assets/gambarcustom.png"
          }
        ]}
      />
      
      {/* Featured Products */}
      <FeaturedProducts 
        title="Produk Unggulan"
        products={[
          {
            name: "Teak Flooring Premium",
            description: "Ketebalan 1.8cm, panjang 100-200cm",
            specs: ["Grade A", "KD 12%", "FSC Certified"],
            image: "/teak-flooring-premium.jpg"
          },
          {
            name: "Teak Decking Standard",
            description: "Lebar 14cm, ketebalan 2.5cm",
            specs: ["Grade AB", "Anti-slip", "UV Resistant"],
            image: "/teak-decking-standard.jpg"
          }
        ]}
      />
      
      {/* Product Details */}
      <ProductDetails 
        title="Spesifikasi Teknis"
        details={[
          {
            title: "Flooring",
            items: [
              { name: "Material", value: "Kayu Jati TPK" },
              { name: "Ketebalan", value: "18mm" },
              { name: "Lebar", value: "90/120/140mm" },
              { name: "Pengeringan", value: "12 hari" }
            ],
            image: "/flooring-details.jpg"
          },
          {
            title: "Decking",
            items: [
              { name: "Material", value: "Kayu Jati/Kamper" },
              { name: "Ketebalan", value: "25mm" },
              { name: "Lebar", value: "90/140mm" },
              { name: "Perawatan", value: "Anti jamur & rayap" }
            ],
            image: "/decking-details.jpg"
          }
        ]}
      />
      
      {/* Custom Solutions */}
      <CustomSolutions 
        title="Solusi Kustom"
        description="Kami menerima pesanan khusus untuk proyek unik Anda"
        examples={[
          "Papan Trap Tangga Jati",
          "Hand Rail & Railing",
          "Door Frame Kayu",
          "Lamella Kayu untuk Interior"
        ]}
        image="/custom-workshop.jpg"
      />
      
      {/* Material Quality */}
      <MaterialQuality 
        title="Kualitas Bahan Baku"
        features={[
          "Kayu berasal dari sumber berkelanjutan",
          "Proses pengeringan 12 hari",
          "Seleksi ketat material Grade A",
          "Bebas bahan kimia berbahaya"
        ]}
        images={[
          "/wood-selection.jpg",
          "/drying-process.jpg",
          "/quality-check.jpg"
        ]}
      />
      
      {/* CTA Section */}
      <CTASection 
        title="Butuh Penawaran Khusus?"
        subtitle="Konsultasikan kebutuhan kayu Anda dengan tim ahli kami"
        primaryButton="Request Quotation"
        secondaryButton="+62 812-5958-3942"
      />
    </div>
  );
};

export default ProductsPage;