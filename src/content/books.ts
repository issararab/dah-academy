import biPlatformsCoverWebp from "../assets/books/bi-platforms.jpg?w=600&format=webp";
import biPlatformsCoverJpg from "../assets/books/bi-platforms.jpg?w=600&format=jpg";
import dataModellingCoverWebp from "../assets/books/enterprise-data-modelling.jpg?w=600&format=webp";
import dataModellingCoverJpg from "../assets/books/enterprise-data-modelling.jpg?w=600&format=jpg";
import aiAgentsCoverWebp from "../assets/books/ai-agents.jpg?w=600&format=webp";
import aiAgentsCoverJpg from "../assets/books/ai-agents.jpg?w=600&format=jpg";
import dataStrategyCoverWebp from "../assets/books/data-strategy-imperative.jpg?w=600&format=webp";
import dataStrategyCoverJpg from "../assets/books/data-strategy-imperative.jpg?w=600&format=jpg";
import forecastingCoverWebp from "../assets/books/forecasting.jpg?w=600&format=webp";
import forecastingCoverJpg from "../assets/books/forecasting.jpg?w=600&format=jpg";

export interface Book {
  slug: string;
  title: string;
  price: number;
  currency: string;
  description: string;
  coverWebp: string;
  coverJpg: string;
  buyUrl: string;
}

export const BOOKS: Book[] = [
  {
    slug: "bi-platforms",
    title:
      "Business Intelligence Platforms: A Technology-Leadership Guide to Evaluating Twelve Enterprise BI Tools",
    price: 29.99,
    currency: "USD",
    description:
      "A structured, evidence-based comparison of twelve leading BI platforms across ten evaluation dimensions: usability, integration, governance, cost, and total cost of ownership.",
    coverWebp: biPlatformsCoverWebp,
    coverJpg: biPlatformsCoverJpg,
    buyUrl: "https://payhip.com/b/XJAvP",
  },
  {
    slug: "enterprise-data-modelling",
    title: "The Enterprise Data Modelling Playbook",
    price: 24.99,
    currency: "USD",
    description:
      "An architecture-focused guide comparing Inmon, Kimball, and Data Vault methodologies, with a benchmark analysis to help you pick the approach that fits your organization's constraints.",
    coverWebp: dataModellingCoverWebp,
    coverJpg: dataModellingCoverJpg,
    buyUrl: "https://payhip.com/b/6XDTj",
  },
  {
    slug: "building-enterprise-ai-agents",
    title:
      "Building Enterprise AI Agents: From Prototype to Production-Grade LLM Systems",
    price: 49.99,
    currency: "USD",
    description:
      "A technical guide to moving AI prototypes into production: retrieval-augmented generation, agent orchestration, governance, and deployment with MLflow.",
    coverWebp: aiAgentsCoverWebp,
    coverJpg: aiAgentsCoverJpg,
    buyUrl: "https://payhip.com/b/WyVOt",
  },
  {
    slug: "data-strategy-imperative",
    title:
      "The Data Strategy Imperative: A Board-Level Framework for Evaluating and Selecting Modern Data & AI Platforms",
    price: 29.99,
    currency: "USD",
    description:
      "An executive-level framework for evaluating cloud data platforms: Databricks, Snowflake, Microsoft Fabric, and AWS, for architectural fit, AI readiness, and long-term TCO.",
    coverWebp: dataStrategyCoverWebp,
    coverJpg: dataStrategyCoverJpg,
    buyUrl: "https://payhip.com/b/sEqI6",
  },
  {
    slug: "forecasting-at-scale",
    title: "Your Ultimate Guide to Build Forecasting Solutions at Scale",
    price: 14.99,
    currency: "USD",
    description:
      "A practical manual for building high-performance time-series forecasting systems at scale, covering classical statistics, ML meta-models, deep learning, and a PySpark-Pandas hybrid architecture.",
    coverWebp: forecastingCoverWebp,
    coverJpg: forecastingCoverJpg,
    buyUrl: "https://payhip.com/b/CrisW",
  },
];
