export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const heroData = {
  eyebrow: "AWS CLOUD ENGINEER & DEVOPS SPECIALIST",
  name: "Irfan Pasha",
  roles: ["AWS", "DevOps", "Cloud Engineer"],
  summary:
    "Results-driven IT professional with 9+ years of experience in enterprise support, Microsoft 365, Active Directory, Windows support, incident handling, queue management, and SLA-driven operations. Actively transitioning into AWS & DevOps with hands-on implementation of VPC, EC2, ALB, Auto Scaling, Lambda, S3, CloudWatch, CloudTrail, CloudFront, RDS, DynamoDB, NAT Gateway, and Bastion Host architecture.",
  socialLinks: [
    {
      label: "IN",
      url: "https://www.linkedin.com/in/irfan-pasha-8b8091100/",
      title: "LinkedIn",
    },
    {
      label: "GH",
      url: "https://github.com/IrfanPasha05",
      title: "GitHub",
    },
    {
      label: "DV",
      url: "https://dev.to/irfanpasha",
      title: "Dev Community",
    },
    {
      label: "@",
      url: "mailto:ip.irfanpasha5@gmail.com",
      title: "Email",
    },
  ],
};

export const stats = [
  { value: "9+", label: "Years Experience", badge: "EX" },
  { value: "148", label: "Countries Supported", badge: "GL" },
  { value: "99.8%", label: "SLA Improvement", badge: "SL" },
  { value: "6+", label: "Cloud Projects", badge: "CP" },
];

export const techStack = [
  {
    name: "AWS",
    short: "AWS",
    icon: "https://cdn.simpleicons.org/amazonaws/FF9900",
  },
  {
    name: "Git",
    short: "GT",
    icon: "https://cdn.simpleicons.org/git/F05032",
  },
  {
    name: "GitHub",
    short: "GH",
    icon: "https://cdn.simpleicons.org/github/FFFFFF",
  },
  {
    name: "Jenkins",
    short: "JK",
    icon: "https://cdn.simpleicons.org/jenkins/D24939",
  },
  {
    name: "GitHub Actions",
    short: "GA",
    icon: "https://cdn.simpleicons.org/githubactions/2088FF",
  },
  {
    name: "CodePipeline",
    short: "CP",
    icon: "https://cdn.simpleicons.org/amazonaws/FF9900",
  },
  {
    name: "Docker",
    short: "DK",
    icon: "https://cdn.simpleicons.org/docker/2496ED",
  },
  {
    name: "Kubernetes",
    short: "K8",
    icon: "https://cdn.simpleicons.org/kubernetes/326CE5",
  },
  {
    name: "Terraform",
    short: "TF",
    icon: "https://cdn.simpleicons.org/terraform/844FBA",
  },
  {
    name: "CloudFormation",
    short: "CF",
    icon: "https://cdn.simpleicons.org/amazonaws/FF9900",
  },
  {
    name: "Ansible",
    short: "AN",
    icon: "https://cdn.simpleicons.org/ansible/EE0000",
  },
  {
    name: "Prometheus",
    short: "PR",
    icon: "https://cdn.simpleicons.org/prometheus/E6522C",
  },
  {
    name: "Grafana",
    short: "GF",
    icon: "https://cdn.simpleicons.org/grafana/F46800",
  },
  {
    name: "CloudWatch",
    short: "CW",
    icon: "https://cdn.simpleicons.org/amazonaws/FF9900",
  },
  {
    name: "Bash",
    short: "SH",
    icon: "https://cdn.simpleicons.org/gnubash/4EAA25",
  },
];

export const aboutData = {
  paragraphs: [
    "Experienced L2 Remote Support Engineer and Queue Manager with strong expertise in incident management, SLA governance, queue management, Windows OS support, Microsoft 365, Active Directory, ServiceNow, and enterprise IT operations.",
    "Recognized for operational excellence through Kaizen process improvement, improving a 3-hour SLA from 83% to 99.8%, and supporting global users under strict SLA commitments.",
  ],
  meta: [
    "Bangalore, Karnataka, India",
    "ip.irfanpasha5@gmail.com",
    "+91 8951936502",
  ],
};

export const skills = [
  {
    title: "AWS Cloud",
    items: [
      "EC2",
      "S3",
      "IAM",
      "VPC",
      "Route 53",
      "CloudFront",
      "RDS",
      "Lambda",
      "CloudWatch",
    ],
  },
  {
    title: "Version Control & CI/CD",
    items: [
      "Git",
      "GitHub",
      "Jenkins",
      "GitHub Actions",
      "AWS CodePipeline",
    ],
  },
  {
    title: "Containers & Orchestration",
    items: ["Docker", "Kubernetes (K8s)"],
  },
  {
    title: "Infrastructure as Code",
    items: ["Terraform", "AWS CloudFormation"],
  },
  {
    title: "Automation & Configuration",
    items: ["Ansible", "Shell Scripting (Bash)"],
  },
  {
    title: "Monitoring & Observability",
    items: ["Prometheus", "Grafana", "AWS CloudWatch"],
  },
];

export const cloudProjects = [
  {
    title: "Highly Available Web Application on AWS",
    subtitle: "ALB & Auto Scaling",
    github: "https://github.com/IrfanPasha05",
    live: "#",
    points: [
      "Designed a production-style high availability architecture.",
      "Used VPC, public/private subnets, ALB, EC2 Auto Scaling Group and NAT Gateway.",
      "Implemented multi-AZ availability.",
      "Ensured secure outbound access for private instances.",
    ],
  },
  {
    title: "AWS ALB Auto Scaling with CloudWatch",
    subtitle: "Real-World Architecture",
    github: "https://github.com/IrfanPasha05",
    live: "#",
    points: [
      "Built auto-scaling architecture using ALB & ASG.",
      "Distributed traffic across EC2 instances.",
      "Configured monitoring using CloudWatch metrics and alarms.",
    ],
  },
  {
    title: "AWS Lambda S3 File Upload Logger",
    subtitle: "Python Serverless Project",
    github: "https://github.com/IrfanPasha05",
    live: "#",
    points: [
      "Developed AWS Lambda using Python.",
      "Triggered function on S3 file upload events.",
      "Logged file details automatically.",
      "Demonstrated event-driven serverless architecture.",
    ],
  },
  {
    title: "AWS VPC Project",
    subtitle: "Public & Private EC2 Website Hosting",
    github: "https://github.com/IrfanPasha05",
    live: "#",
    points: [
      "Created custom VPC from scratch.",
      "Designed public and private subnets.",
      "Hosted website on public Ubuntu EC2.",
      "Secured backend using private EC2 + Bastion Host.",
      "Configured Internet Gateway & NAT Gateway.",
      "Implemented route tables & security groups.",
    ],
  },
  {
    title: "Static Website Hosting on Amazon S3",
    subtitle: "S3 + Bucket Policy + IAM",
    github: "https://github.com/IrfanPasha05",
    live: "#",
    points: [
      "Hosted a static website using S3.",
      "Configured bucket policy and public access.",
      "Managed IAM permissions.",
    ],
  },
  {
    title: "Portfolio Website on AWS EC2",
    subtitle: "NGINX + Ubuntu + GitHub",
    github: "https://github.com/IrfanPasha05",
    live: "#",
    points: [
      "Deployed NGINX on Ubuntu EC2.",
      "Managed code using GitHub.",
      "Configured security groups.",
    ],
  },
];

export const majorProjects = [
  {
    title: "Kaizen Project – SLA Improvement",
    company: "DXC Technologies – Bangalore",
    points: [
      "Led Kaizen initiative for queue optimization.",
      "Improved 3-hour SLA from 83% to 99.8%.",
      "Implemented process governance & tracking.",
    ],
  },
  {
    title: "Enterprise Migration – Microsoft 365 & Windows 10",
    company: "TCS Client – Bangalore",
    points: [
      "Migrated 3,000+ users from MS Office 2007 to Microsoft 365.",
      "Upgraded systems from Windows 8 to Windows 10 using SCCM.",
      "Supported pilot batch deployment.",
      "Reduced backlog from 600 tickets to 50 tickets in 2 weeks.",
    ],
  },
  {
    title: "Desktop Hardware & OS Migration",
    company: "Wipro Client – Bangalore",
    points: [
      "Migrated 600 desktops from Pentium systems to Intel i5 systems.",
      "Installed OS, Outlook and business applications.",
      "Performed user data backup & restoration.",
    ],
  },
];

export const experience = [
  {
    company: "DXC Technologies",
    role: "L2 Remote Support Engineer & Queue Manager",
    duration: "Dec 2019 – Present",
    points: [
      "Managed L2 & onsite queues ensuring SLA compliance.",
      "Monitored ticket ageing, backlog and breach risks.",
      "Handled major L2 escalations.",
      "Acted as primary client contact during outages.",
      "Prepared daily, hourly, SLA & break reports.",
      "Performed ServiceNow ticket scrubbing & quality audits.",
      "Assigned tickets and managed workload.",
      "Coordinated with resolver & offshore teams.",
      "Conducted team huddles & process updates.",
      "Onboarded and trained new joiners.",
      "Provided Windows OS & Microsoft 365 support.",
      "Handled Active Directory password reset & unlock.",
    ],
  },
  {
    company: "TeamLease Digital (Client: TCS)",
    role: "Desktop Support Engineer",
    duration: "Nov 2017 – May 2019",
    points: [
      "Provided Level 1 support via tickets, calls, emails and remote tools.",
      "Supported Office 365 & Windows 10 migration.",
      "Performed OS imaging for Windows 7 / 8 / 8.1 / 10.",
      "Troubleshot Outlook, Office 365 & Lotus Notes.",
      "Installed printers, scanners and monitors.",
      "Handled virus removal & data backup.",
      "Performed drive mapping and folder permission tasks.",
      "Managed shared mailboxes & distribution lists.",
      "Troubleshot Skype for Business.",
    ],
  },
  {
    company: "Primus Global Technologies (Client: HPE)",
    role: "Desktop Support Engineer",
    duration: "Oct 2015 – Apr 2017",
    points: [
      "Provided global IT support for 148 countries.",
      "Handled remote desktop troubleshooting.",
      "Supported end-user hardware & applications.",
      "Installed Windows and Office.",
      "Logged helpdesk tickets.",
      "Handled URL & application troubleshooting.",
      "Performed network drive mapping.",
      "Delivered SLA-based resolution.",
      "Supported Active Directory tasks.",
    ],
  },
  {
    company: "Skypro Technologies (Client: Wipro)",
    role: "Desktop Support Engineer",
    duration: "May 2014 – Jul 2015",
    points: [
      "Maintained 300–500 workstations.",
      "Performed OS installation & uninstallation.",
      "Installed software as per standards.",
      "Configured printer & scanner networks.",
      "Troubleshot Lotus Notes email issues.",
      "Installed monitors, scanners and other hardware.",
      "Performed basic networking tasks.",
      "Coordinated with vendors.",
      "Managed AD & Exchange user permissions.",
    ],
  },
];

export const certifications = [
  "AWS Certified Solutions Architect – Associate",
  "Microsoft MS-900 (Microsoft 365 Fundamentals)",
  "Six Sigma Yellow Belt",
  "Certified Network Administrator (CAN)",
  "Office Expert & Tally",
  "Kaizen Champion",
  "AI & Automation in Excel",
  "Basic Power BI",
  "AI Tools Workshop",
];

export const achievements = [
  "Quarterly Champs Award – Q3 FY21 (DXC)",
  "Champion Award – Top Performer",
  "Kaizen Project Completion – 2024",
];

export const education = [
  "Bachelor of Computer Applications (BCA) – Pursuing (Part-Time)",
  "Mangalayatan University",
  "Diploma in Electronics & Communication Engineering",
];

export const contactData = {
  intro:
    "I am open to AWS Cloud, DevOps, System Administration, IT Support, Queue Management, and cloud deployment opportunities.",
  email: "ip.irfanpasha5@gmail.com",
  phone: "+91 8951936502",
  phoneLink: "tel:+918951936502",
  linkedin: "https://www.linkedin.com/in/irfan-pasha-8b8091100/",
  github: "https://github.com/IrfanPasha05",
  devto: "https://dev.to/irfanpasha",
  location: "Bangalore, Karnataka, India",
  languages: ["English", "Tamil", "Kannada"],
  resumePath: "/resume.pdf",
};