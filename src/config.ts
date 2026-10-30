export const siteConfig = {
  name: "Betsegaw Degefe",
  title: "Senior Software Engineer · Frontend, Backend, Integrations & Cloud",
  description:
    "Portfolio of Betsegaw Degefe, a frontend and backend engineer building integration-heavy systems in health information exchange and fintech.",
  accentColor: "#1f6f78",
  photo: "/profile.jpg",
  cv: "/Betsegaw-Degefe-CV.pdf",
  social: {
    email: "betsegawyes@gmail.com",
    linkedin: "https://linkedin.com/in/betsegaw-d-9a3a9980",
    github: "https://github.com/betsegaw-degefe",
  },
  aboutMe:
    "Frontend and backend engineer with 6+ years building integration-heavy systems in regulated domains: national health information exchange (HL7 FHIR, OpenMRS) and fintech (KYC/AML onboarding, crypto custody on AWS). I led end-to-end delivery of Ethiopia's Shared Health Record integration and engineered the Central Data Repository client that aggregates 100K+ patient records from 100+ health facilities. I work mainly in Node.js/TypeScript (NestJS) and Java (Spring), with a focus on event-driven and microservice architecture, DDD/CQRS, and CI/CD.",
  skills: [
    "TypeScript",
    "Java",
    "C#",
    "Node.js / NestJS",
    "Spring Boot",
    "HL7 FHIR",
    "AWS",
    "GCP / BigQuery",
    "Kafka",
    "PostgreSQL",
    "Docker / Kubernetes",
    "Microservices",
    "DDD / CQRS",
    "OAuth2 / mTLS",
    "GitHub Actions",
    "React",
  ],
  caseStudies: [
    {
      slug: "ethiopia-shared-health-record",
      name: "Ethiopia's Shared Health Record integration",
      org: "Palladium · Ministry of Health national EMR",
      summary:
        "Secure HL7 FHIR (IPS) patient-summary exchange between OpenMRS facilities and a central HAPI FHIR server, with identity verification and patient de-duplication.",
      skills: ["HL7 FHIR / IPS", "HAPI FHIR", "OpenMRS 3", "OpenFn", "OpenCR", "OAuth2 / mTLS", "Java"],
      problem:
        "Facilities running Ethiopia's OpenMRS-based national EMR needed a trustworthy way to share patient summaries with a central record, without sending unverified facilities, invalid Health IDs, or duplicate patients upstream.",
      approach: [
        "Designed the exchange around HL7 FHIR International Patient Summary (IPS) documents submitted to a central HAPI FHIR server.",
        "Built a secure pipeline with OAuth2 and mTLS so every submission is tied to a verified facility identity.",
        "Used OpenFn workflows to validate national Health IDs and de-duplicate patients through OpenCR before submission.",
        "Shipped OpenMRS 3 micro-frontends (React, TypeScript) for SHR administration, with i18n and unit tests.",
      ],
      role: "Led architecture and end-to-end delivery of the integration.",
      outcome:
        "Facilities on the national EMR can exchange standards-compliant FHIR patient summaries with the central Shared Health Record.",
    },
    {
      slug: "central-data-repository",
      name: "Central Data Repository client",
      org: "ICAP at Columbia University · Ethiopia HIV/EMR programme",
      summary:
        "A centrally deployed service that pulls and consolidates data from 100+ health facilities, handling 100K+ patient records for national reporting.",
      skills: ["ASP.NET", "C#", "Firely SDK", "HL7 FHIR", "MSSQL", "MongoDB"],
      problem:
        "National reporting and analytics depended on data that lived in separate EMRs at more than 100 health facilities, each uploading concurrently.",
      approach: [
        "Engineered the CDR client service that pulls and consolidates facility data into one central repository.",
        "Built FHIR/HL7 conversion with the Firely SDK so facility data could be exchanged with national systems in a standards-compliant form.",
        "Designed and tuned MSSQL and MongoDB schemas to sustain high-volume ingestion from concurrent facility uploads.",
        "Kept the ASP.NET REST services maintainable across a multi-year rollout using the Repository Pattern.",
      ],
      role: "Software developer responsible for the CDR client service, FHIR conversion and data layer.",
      outcome:
        "100K+ patient records from 100+ facilities consolidated for national reporting and analytics.",
    },
    {
      slug: "crypto-custody-on-aws",
      name: "Digital-asset operations on AWS",
      org: "Yellow Card · Pan-African crypto exchange",
      summary:
        "Serverless and Kubernetes services for token transfers, custody and blockchain monitoring across more than 5 chains.",
      skills: ["AWS Lambda", "Step Functions", "SQS", "DynamoDB", "EKS", "Fireblocks", "TypeScript", "Vue.js"],
      problem:
        "Real-time digital-asset operations (transfers, custody and on-chain monitoring) had to run reliably across multiple blockchains, with operations staff able to see transaction state.",
      approach: [
        "Architected serverless APIs and workflows with Lambda, Step Functions, SQS and DynamoDB.",
        "Deployed EKS services that broadcast and monitor on-chain token transfers.",
        "Integrated Fireblocks for secure custody and signing.",
        "Built a Vue.js admin dashboard giving operations real-time visibility into transaction state.",
      ],
      role: "Software engineer building cloud-native services and the operations dashboard.",
      outcome:
        "Token transfers, custody and monitoring running across more than 5 chains, with real-time visibility for operations.",
    },
    {
      slug: "fintech-kyc-aml-onboarding",
      name: "Fintech KYC/AML onboarding platform",
      org: "Sepa Cyber Technologies · Multi-tenant financial platform",
      summary:
        "NestJS microservices applying DDD and CQRS that automated previously manual KYC, KYB, PEP, sanctions and AML checks.",
      skills: ["Node.js", "NestJS", "DDD / CQRS", "Kafka", "gRPC", "Redis", "PostgreSQL", "Spring Boot"],
      problem:
        "Customer onboarding on a multi-tenant financial platform relied on manual compliance checks.",
      approach: [
        "Engineered onboarding and back-office microservices in Node.js/NestJS using DDD and CQRS.",
        "Integrated Uqudo (KYC), Kompany (KYB, PEP, sanctions, AML), Kraken (crypto rates) and Free Market into the onboarding flow.",
        "Designed inter-service communication with Kafka, Redis MQ and gRPC.",
        "Launched the Consumer Management service for tenant and customer administration.",
      ],
      role: "Full stack developer (contract) across the Node.js and Java Spring Boot / Quarkus services.",
      outcome:
        "Compliance checks automated in the onboarding flow; hot-path throughput improved by 25% through refactoring and query optimisation.",
    },
  ],
  experience: [
    {
      company: "Palladium Global Management LLC – Ethiopia",
      title: "Full Stack Developer",
      dateRange: "May 2026 – Present",
      bullets: [
        "Led architecture and delivery of the Shared Health Record (SHR) integration for Ethiopia's national EMR, exchanging HL7 FHIR (IPS) patient summaries with a central HAPI FHIR server.",
        "Designed the secure exchange pipeline (OAuth2, mTLS, OpenFn) that verifies facility identity, validates national Health IDs, and de-duplicates patients via OpenCR.",
        "Built multi-tenant ETL and reporting modules (Java, MySQL) that replaced paper MOH clinical registers with automated reports.",
        "Set up CI/CD from scratch (GitHub Actions, Docker, Maven), enabling same-day releases.",
      ],
    },
    {
      company: "Son Of a Coder",
      title: "Senior Software Engineer (Contract)",
      dateRange: "Dec 2025 – May 2026",
      bullets: [
        "Migrated a legacy Java data pipeline to a three-layer medallion warehouse on BigQuery with Dataform, using versioned, tested SQL/JS transformations.",
        "Designed and built an AI-assisted CRM from the ground up: data model, API layer, and LLM-driven lead enrichment and summarisation.",
      ],
    },
    {
      company: "Freelance",
      title: "Independent Consultant",
      dateRange: "Aug 2025 – Nov 2025",
      bullets: [
        "Delivered an end-to-end AI meeting-transcription SaaS: NestJS backend, Next.js frontend, PostgreSQL, Stripe subscriptions, and AssemblyAI/Deepgram speech-to-text with speaker diarisation.",
      ],
    },
    {
      company: "Yellow Card Financial Inc.",
      title: "Software Engineer",
      dateRange: "Dec 2024 – Jun 2025",
      bullets: [
        "Built cloud-native services on AWS for token transfers, custody, and blockchain monitoring across more than 5 chains.",
        "Architected serverless APIs and workflows with Lambda, Step Functions, SQS, and DynamoDB, plus EKS services for on-chain transfers.",
        "Integrated Fireblocks for custody and signing, and built a Vue.js operations dashboard.",
      ],
    },
    {
      company: "Sepa Cyber Technologies (IT RUN)",
      title: "Full Stack Developer (Contract)",
      dateRange: "Jan 2022 – Sep 2024",
      bullets: [
        "Engineered onboarding and back-office microservices in Node.js/NestJS for a multi-tenant financial platform, applying DDD and CQRS.",
        "Integrated KYC, KYB, PEP, sanctions and AML providers, automating previously manual compliance checks.",
        "Improved throughput of hot paths by 25% through refactoring and query optimisation.",
      ],
    },
    {
      company: "ICAP at Columbia University",
      title: "Software Developer",
      dateRange: "Dec 2020 – Dec 2024",
      bullets: [
        "Engineered the Central Data Repository client consolidating 100K+ patient records from 100+ health facilities.",
        "Built FHIR/HL7 conversion with the Firely SDK for exchange with national systems.",
        "Designed and tuned MSSQL and MongoDB schemas for high-volume concurrent ingestion.",
      ],
    },
    {
      company: "Orbit Health Inc",
      title: "Software Developer",
      dateRange: "Nov 2019 – Dec 2020",
      bullets: [
        "Built APIs and web services in ASP.NET/C# for EMR modules used in 5+ facilities.",
        "Refactored the finance and pharmacy modules and optimised their SQL, cutting key report and lookup times by 60%.",
      ],
    },
  ],
  education: [
    {
      school: "Microlink Information Technology College",
      degree: "B.Sc., Computer Science",
      dateRange: "2019",
      achievements: ["Graduated with Great Distinction"],
    },
  ],
};

export type CaseStudy = (typeof siteConfig.caseStudies)[number];
