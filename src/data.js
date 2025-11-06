export const profile = {
  name: "Ganesh Kathiresan",
  title: "Senior Software Engineer",
  bio: "",
  // email: "ganesh3597@gmail.com",
  linkedin: "ganesh-kathiresan",
  github: "ganesh-k13",
  twitter: "ganesh_ka13",
  medium: "ganeshkathiresan",
  scholar: "qqj1AtEAAAAJ"
}

export const experience = [
  {
    company: "Amazon | Whole Foods Market",
    role: "Senior Software Engineer (L6)",
    period: "April 2024 - Present",
    location: "Bangalore, KA",
    achievements: [
      "Led automation of WAN circuit management processes, previously handled by third-party vendors, resulting in annual cost savings of approximately $3 million for Whole Foods Market.",
      "Designed and implemented a secure, scalable integration between the Amazon Corporate Network Fabric and the Whole Foods Network Fabric, eliminating the need for multiple VPN tunnels and reducing operational complexity."
    ]
  },
  {
    company: "Amazon Web Services",
    role: "Software Development Engineer 2 (L5)",
    period: "December 2021 - March 2024",
    location: "Bangalore, KA",
    achievements: [
      "Designed and developed a Zero-Touch network configuration deployment system for every Amazon and third-party physical store across the globe, eliminating manual effort of about 1700 engineering hours per AWS Region per month.",
      "Built a generic Flask-based micro-service template package to bring up a Fargate-managed ECS service through CDK effortlessly, saving about one month of engineering time to bring up a new service in Python.",
      "Wrote various automation scripts including a configuration diff/drift detection tool that creates an inventory of 1000+ devices and computes the presence of dangerous drifts."
    ]
  },
  {
    company: "Citrix Systems",
    role: "Software Engineer",
    period: "July 2019 - December 2021",
    location: "Bangalore, KA",
    achievements: [
      "Designed and developed Citrix WAF Recommendation Engine (CWRE) that detects technologies and vulnerabilities in the backend service to recommend Security configurations and Signatures for protection against known CVEs.",
      "Built a framework in Citrix Ingress Controller (CIC) to configure NetScaler WAF in a Kubernetes deployment.",
      "Built a pipeline to automate the process of producing new weekly signatures for Citrix WAF which saves about 4 hours of engineering time per release."
    ]
  }
]

export const openSource = [
  {
    name: "NumPy",
    role: "Core Developer and Maintainer",
    contributions: [
      "bit_count (popcount) to optimally count the number of 1-bits in an integer",
      "Developed dispatch logic for integer division using Universal SIMD Intrinsic to improve efficiency by over 90%",
      "Author of show_runtime and show_config to help users provide meaningful system information when filing bugs",
      "Revamped the NumPy build system with various contributions to Meson migration",
      "hex and fromhex implementation for all floating-point types"
    ],
    links: {
      team: "https://numpy.org/teams",
      contributions: "https://github.com/numpy/numpy/pulls?q=is%3Apr+author%3Aganesh-k13"
    }
  },
  {
    name: "OpenCV",
    role: "Contributor",
    contributions: [
      "Added support for determining the number of CPUs in the host machine more accurately for various platforms",
      "Added greyscale flags and JPEG resize support for imdecode",
      "Fixed crash grade issues and added UT for image codecs and Calib3d modules"
    ],
    links: {
      contributions: "https://github.com/opencv/opencv/pulls?q=is%3Apr+author%3Aganesh-k13"
    }
  },
  {
    name: "Python/CPython",
    role: "Contributor",
    contributions: [
      "Redefined PY_SSIZE_T_MAX and PY_SSIZE_T_MIN to make it usable in preprocessor conditionals"
    ],
    links: {
      contributions: "https://github.com/python/cpython/pulls?q=is%3Apr+author%3Aganesh-k13"
    }
  }
]

export const skills = {
  languages: ["C", "C++", "Python", "Java", "TypeScript"],
  technologies: ["AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "DynamoDB", "Git", "ECS", "Fargate", "Redis", "EC2", "SNS", "SQS", "S3", "Route53"]
}

export const education = {
  degree: "B.Tech. in Computer Science",
  institution: "PES University",
  gpa: "9.20",
  period: "2015 - 2019"
}

export const publications = {
  scholarProfile: "https://scholar.google.co.in/citations?user=qqj1AtEAAAAJ&hl=en",
  citations: 33
}

export const awards = [
  "Received Citrix Quality Award Q3 2019 for developing WAF Signature Auto Update Tool",
  "Received Spot Bonus in Q3 2020 for performance",
  "Won the Citrix Graduate Induction 2019 Tech Project for developing Mock API as a Service",
  "Received PESU's Dr. CNR Rao Merit Award scholarship for being in the top 20% of CS department",
  "Finalist (top 10) in Hackerrank's #UnitedByHCL International Hackathon-2017 out of 14000+ participants globally",
  "Received National Talent Search Examination (NTSE) Scholarship by the Govt. Of Karnataka (rank 29)"
]

export const projects = [
  "Online Judge Platform (Final year B.Tech Project)",
  "DDOS analysis",
  "Multi-Channel Image Steganography",
  "Predictive Text (Autocomplete with Markov chains)",
  "Music Modifier (Auto MP3 metadata modifier)"
]
