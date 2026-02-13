import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/services/ServiceDetail";

// Service data - in a real app, this would come from a CMS or database
const services = {
  "smart-monitoring": {
    title: "Smart Lawn Monitoring",
    description: "AI-powered sensors track soil health, moisture levels, and growth patterns for optimal care.",
    longDescription: "Our smart monitoring system uses advanced sensors and AI technology to continuously track your lawn's health. Get real-time data on soil moisture, temperature, nutrient levels, and growth patterns. Receive automated alerts and recommendations to keep your lawn in perfect condition year-round.",
    price: "Starting at $49/month",
    features: [
      "Real-time soil moisture monitoring",
      "Automated watering recommendations",
      "Growth pattern analysis",
      "Mobile app access",
      "Weather-based alerts",
      "Historical data tracking"
    ],
    benefits: [
      "Save water with precise irrigation",
      "Prevent lawn diseases early",
      "Optimize fertilizer application",
      "Reduce maintenance costs",
      "Achieve perfect lawn health"
    ],
    process: [
      "Sensor installation and setup",
      "Mobile app configuration",
      "Initial baseline assessment",
      "Ongoing monitoring and alerts",
      "Monthly reports and recommendations"
    ]
  },
  "organic-fertilization": {
    title: "Organic Fertilization",
    description: "Eco-friendly nutrients that promote healthy root growth and vibrant green color.",
    longDescription: "Our organic fertilization program uses only the finest natural ingredients to nourish your lawn. Unlike chemical fertilizers, our organic blends promote deep root growth, improve soil health, and create a lush, vibrant lawn that's safe for children, pets, and the environment.",
    price: "Starting at $89",
    features: [
      "100% organic ingredients",
      "Slow-release nutrients",
      "Soil health improvement",
      "Environmentally safe",
      "Pet and child safe",
      "Seasonal formulations"
    ],
    benefits: [
      "Deeper root growth",
      "Improved soil structure",
      "Natural pest resistance",
      "Safe for families and pets",
      "Long-term lawn health",
      "Environmental sustainability"
    ],
    process: [
      "Soil analysis and testing",
      "Custom blend formulation",
      "Seasonal application schedule",
      "Application and monitoring",
      "Results assessment"
    ]
  },
  "precision-mowing": {
    title: "Precision Mowing",
    description: "Expert mowing with specialized equipment for the perfect cut every time.",
    longDescription: "Our precision mowing service uses professional-grade equipment and techniques to deliver the perfect cut every time. We adjust blade heights seasonally, ensure clean edges, and use sharp blades to prevent lawn stress. Our experienced team knows exactly how to mow different grass types for optimal health and appearance.",
    price: "Starting at $65",
    features: [
      "Professional-grade equipment",
      "Seasonal height adjustments",
      "Sharp blade maintenance",
      "Clean edge definition",
      "Grass type expertise",
      "Stress-free cutting techniques"
    ],
    benefits: [
      "Perfect lawn appearance",
      "Reduced grass stress",
      "Healthier turf growth",
      "Professional finish",
      "Time savings",
      "Consistent results"
    ],
    process: [
      "Lawn assessment and planning",
      "Equipment preparation",
      "Precision mowing execution",
      "Edge cleanup and detailing",
      "Final inspection"
    ]
  },
  "landscape-design": {
    title: "Landscape Design",
    description: "Custom landscape design services to enhance your property's beauty and value.",
    longDescription: "Transform your outdoor space with our comprehensive landscape design services. Our certified designers create custom plans that enhance your property's beauty, functionality, and value. From concept to completion, we handle everything from initial consultation through installation and maintenance.",
    price: "Starting at $299",
    features: [
      "Custom design consultation",
      "3D visualization",
      "Plant and material selection",
      "Hardscaping integration",
      "Lighting design",
      "Maintenance planning"
    ],
    benefits: [
      "Increased property value",
      "Enhanced curb appeal",
      "Functional outdoor spaces",
      "Year-round beauty",
      "Personalized design",
      "Professional expertise"
    ],
    process: [
      "Initial consultation and assessment",
      "Design concept development",
      "3D visualization and presentation",
      "Material and plant selection",
      "Installation planning",
      "Project execution and completion"
    ]
  },
  "snow-removal": {
    title: "24/7 Snow Removal",
    description: "Emergency snow removal services available around the clock.",
    longDescription: "Don't let snow disrupt your life. Our 24/7 snow removal service ensures your property stays clear and safe during winter storms. With advanced equipment and experienced operators, we provide fast, efficient snow removal for driveways, walkways, and parking areas.",
    price: "Starting at $149",
    features: [
      "24/7 emergency service",
      "Advanced snow removal equipment",
      "De-icing treatments",
      "Salting and sanding",
      "Priority response",
      "Weather monitoring"
    ],
    benefits: [
      "Safe access year-round",
      "Prevent accidents and injuries",
      "Protect property from damage",
      "Peace of mind",
      "Quick response times",
      "Professional equipment"
    ],
    process: [
      "Service area monitoring",
      "Storm prediction and preparation",
      "Immediate response to snowfall",
      "Efficient snow removal",
      "De-icing application",
      "Ongoing monitoring and touch-ups"
    ]
  },
  "equipment-service": {
    title: "Equipment Service",
    description: "Professional maintenance and repair of your lawn care equipment.",
    longDescription: "Keep your lawn care equipment running at peak performance with our comprehensive maintenance and repair services. Our certified technicians service all major brands and types of equipment, from lawn mowers to irrigation systems. Regular maintenance extends equipment life and ensures reliable operation.",
    price: "Starting at $75",
    features: [
      "All major brands serviced",
      "Certified technicians",
      "Preventive maintenance",
      "Emergency repairs",
      "Parts replacement",
      "Performance optimization"
    ],
    benefits: [
      "Extended equipment life",
      "Reliable operation",
      "Cost savings on repairs",
      "Improved performance",
      "Safety assurance",
      "Peace of mind"
    ],
    process: [
      "Equipment inspection and diagnosis",
      "Maintenance scheduling",
      "Parts procurement",
      "Professional servicing",
      "Performance testing",
      "Maintenance recommendations"
    ]
  }
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    return {
      title: "Service Not Found | GreenScape Pro"
    };
  }

  return {
    title: `${service.title} | GreenScape Pro`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}