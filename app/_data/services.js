export const SERVICES = [
  {
    id: "web-app-dev",
    name: "Web & App Development",
    shortDescription:
      "Custom websites, web apps, and mobile apps built for your business.",
    followUpQuestions: [
      {
        id: "app_type",
        label: "What type of application do you need?",
        type: "radio",
        options: ["Website", "Web App", "Mobile App"],
      },
      {
        id: "has_design_assets",
        label:
          "Do you already have design assets (logo, brand guide, mockups)?",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        id: "user_base_size",
        label: "Estimated user base size",
        type: "radio",
        options: ["Under 100", "100–1,000", "1,000–10,000", "10,000+"],
      },
    ],
  },
  {
    id: "cloud-devops",
    name: "Cloud Infrastructure & DevOps",
    shortDescription:
      "Migrate, build, and scale your infrastructure on the cloud.",
    followUpQuestions: [
      {
        id: "current_provider",
        label: "Current cloud provider (if any)",
        type: "radio",
        options: ["AWS", "Azure", "Google Cloud", "None yet"],
      },
      {
        id: "migration_or_new",
        label: "Is this a migration or a new build?",
        type: "radio",
        options: ["Migration", "New Build"],
      },
      {
        id: "expected_load",
        label: "Expected monthly traffic/load",
        type: "radio",
        options: ["Low", "Medium", "High", "Not sure yet"],
      },
    ],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity Audit & Compliance",
    shortDescription:
      "Identify vulnerabilities and meet compliance requirements.",
    followUpQuestions: [
      {
        id: "compliance_requirements",
        label: "Relevant compliance requirements",
        type: "radio",
        options: ["HIPAA", "SOC 2", "GDPR", "None"],
      },
      {
        id: "prior_audit_history",
        label: "Have you had a prior security audit?",
        type: "radio",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: "ai-automation",
    name: "AI & Automation Integration",
    shortDescription:
      "Automate processes and integrate AI into your existing systems.",
    followUpQuestions: [
      {
        id: "process_to_automate",
        label: "Which business process do you want to automate?",
        type: "text",
      },
      {
        id: "existing_systems",
        label:
          "What existing systems or data will this need to integrate with?",
        type: "text",
      },
    ],
  },
];
