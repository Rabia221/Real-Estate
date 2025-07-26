import { ReactElement } from "react";
import { FaChartBar, FaCheckCircle, FaComments, FaEnvelope, FaPhone, FaTimesCircle, FaVideo } from "react-icons/fa";

export interface Logo {
  id: number;
  src: string;
  alt: string;
}

export interface ContactItem {
  id: number;
  title: string;
  number: string;
  action: string;
  icon: ReactElement;
}

export interface NavLink {
  id: number;
  to: string;
  label: string;
}

export interface AccordionItem {
  id: number;
  title: string;
  content: string;
  icon: ReactElement;  // Changed from JSX.Element to ReactElement
}

  export interface Property {
    id: number;
    image: string;
    price: number;
    title: string;
    address: string;
  }


export const logos: Logo[] = [
  {
    id: 1,
    src: "https://real-estate-web.pages.dev/prologis.png",
    alt: "Prologis",
  },
  {
    id: 2,
    src: "https://real-estate-web.pages.dev/equinix.png",
    alt: "Equinix",
  },
  { id: 3, src: "https://real-estate-web.pages.dev/tower.png", alt: "Tower" },
  {
    id: 4,
    src: "https://real-estate-web.pages.dev/realty.png",
    alt: "Realty",
  },
];

export const contactData: ContactItem[] = [
  {
    id: 1,
    title: "Call",
    number: "021 123 145 14",
    action: "Call now",
    icon: <FaPhone size={24} />,
  },
  {
    id: 2,
    title: "Chat",
    number: "021 123 145 14",
    action: "Chat now",
    icon: <FaComments size={24} />,
  },
  {
    id: 3,
    title: "Video Call",
    number: "021 123 145 14",
    action: "Video Call now",
    icon: <FaVideo size={24} />,
  },
  {
    id: 4,
    title: "Message",
    number: "021 123 145 14",
    action: "Message now",
    icon: <FaEnvelope size={24} />,
  },
];

export  const navLinks: NavLink[] = [
    { id: 1, to: "residencies", label: "Residencies" },
    { id: 2, to: "our-value", label: "Our Value" },
    { id: 3, to: "contact", label: "Contact Us" },
    { id: 4, to: "start", label: "Get Started" },
  ];

  export  const accordionItems: AccordionItem[] = [
    {
      id: 1,
      title: "Best interest rates on the market",
      content:
        "We offer competitive interest rates that beat market averages, ensuring you get the best value for your investment.",
      icon: <FaCheckCircle className="text-blue-700 text-xl" />,
    },
    {
      id: 2,
      title: "Prevent unstable prices",
      content:
        "Our price lock guarantee protects you from market fluctuations during your purchase process.",
      icon: <FaTimesCircle className="text-blue-700 text-xl" />,
    },
    {
      id: 3,
      title: "Best price on the market",
      content:
        "Our negotiation experts work to secure you the absolute best price for your dream property.",
      icon: <FaChartBar className="text-blue-700 text-xl" />,
    },
  ];



  
 export const properties: Property[] = [
    {
      id: 1,
      image: "https://real-estate-web.pages.dev/r1.png",
      price: 35853,
      title: "Citralan Puri",
      address:
        "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    },
    {
      id: 2,
      image: "https://real-estate-web.pages.dev/r2.png",
      price: 42500,
      title: "Alamanda Puri",
      address: "Puri Indah Residence Block B2, Ciracas, Serang, Banten",
    },
    {
      id: 3,
      image: "https://real-estate-web.pages.dev/r3.png",
      price: 38900,
      title: "Bougenville Puri",
      address: "Puri Indah Residence Block C5, Cirac Ciracas, Serang, Banten",
    },
    {
      id: 4,
      image: "https://real-estate-web.pages.dev/r1.png",
      price: 41200,
      title: "Dahlia",
      address: "Puri Indah Residence Block D1, Ciracas, Serang, Banten",
    },
    {
      id: 5,
      image: "https://real-estate-web.pages.dev/r2.png",
      price: 36700,
      title: "Edelweiss",
      address: "Puri Indah Residence Block E3, Ciracas, Serang, Banten",
    },
    {
      id: 6,
      image: "https://real-estate-web.pages.dev/r3.png",
      price: 49300,
      title: "Flamboyan",
      address: "Puri Indah Residence Block F6, Ciracas, Serang, Banten",
    },
  ];
  