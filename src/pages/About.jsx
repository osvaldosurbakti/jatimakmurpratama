import React from "react";
import HeroSection from "../components/about/HeroSection";
import CompanyOverview from "../components/about/CompanyOverview";
import HistoryTimeline from "../components/about/HistoryTimeline";
import VisiMisi from "../components/about/VisiMisi";
import TeamSection from "../components/about/TeamSection";
import ProductionFacility from "../components/about/ProductionFacility";

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Banner */}
      <HeroSection 
        title="About Us" 
        subtitle="Crafting Quality Since 2023"
        bgImage="/assets/gambar2.png"
      />
      
      {/* Company Overview */}
      <CompanyOverview 
        title="PT. Jati Makmur Pratama"
        description={[
          "Established since November 10, 2023, we are a specialist in high-quality teak wood processing for flooring, decking, and custom products.",
          "Officially registered with the Ministry of Law and Human Rights NO. AHU-076640.AH.01.30 with Business Identification Number 1011230068133."
        ]}
        stats={[
          { label: "Established", value: "Nov 2023" },
          { label: "Legal Status", value: "AHU-076640.AH.01.30" },
          { label: "Specialization", value: "Teak Wood" },
          { label: "Export", value: "Malaysia" }
        ]}
        image="/workshop-overview.jpg"
      />
      
      {/* History Timeline */}
      <HistoryTimeline 
        title="Our Journey"
        milestones={[
          {
            year: "2023",
            title: "Humble Beginnings",
            description: "Started as subcontractor for wood products"
          },
          {
            year: "Nov 2023",
            title: "Official Establishment",
            description: "PT. Jati Makmur Pratama legally registered"
          },
          {
            year: "2024",
            title: "First Export",
            description: "Successfully exported to Malaysian market"
          },
          {
            year: "Present",
            title: "Expansion",
            description: "Targeting Southeast Asian market expansion"
          }
        ]}
      />
      
      {/* Vision & Mission */}
      <VisiMisi 
        vision="To become the most trusted teak wood supplier with export quality and sustainable management in Southeast Asia."
        missions={[
          "Produce high-quality wood products meeting international standards",
          "Implement environmentally friendly wood processing practices",
          "Build long-term relationships with both local and international buyers",
          "Optimize local wood potential for maximum added value"
        ]}
      />
      
      {/* Team Section */}
      <TeamSection 
        title="Our Core Team"
        teamMembers={[
          {
            name: "Sidik Pramono",
            position: "Director",
            bio: "Over 10 years experience in wood processing industry",
            image: "/team-director.jpg"
          },
          {
            name: "Budi Santoso",
            position: "Production Head",
            bio: "Specialist in wood drying and molding processes",
            image: "/team-production.jpg"
          }
        ]}
      />
      
      {/* Production Facility */}
      <ProductionFacility 
        title="Production Facility"
        description="We operate a 2000m² workshop in Surabaya with modern equipment to ensure product quality."
        features={[
          "12-day drying process",
          "Precision molding machines",
          "Strict quality control",
          "Export packaging area"
        ]}
        images={[
          "/facility-drying.jpg",
          "/facility-molding.jpg",
          "/facility-qc.jpg"
        ]}
      />
    </div>
  );
};

export default AboutPage;