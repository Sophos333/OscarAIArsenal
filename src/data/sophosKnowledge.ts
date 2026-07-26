import type {
  SophosActionMap,
  SophosIntent,
  SophosSuggestionMap
} from '../types/sophos';

export const blockedTopicAnswer =
  'I can help with AI Arsenal Enterprise, Oscar, our systems, responsible-AI practices, demonstrations, and contact options. I do not have an approved answer for that topic.';

export const unknownQuestionAnswer =
  'I can help with AI Arsenal Enterprise, Oscar, our systems, responsible-AI practices, demonstrations, and contact options. I do not have an approved answer for that question yet. You can call (407) 853-9365 or use the website contact form.';

export const blockedTopics: string[] = [
  'recipe', 'food', 'pancake', 'malware', 'hack', 'exploit',
  'password', 'politics', 'gambling', 'crypto advice', 'casino',
  'weapon', 'illegal', 'adult', 'weather', 'movie', 'game cheat'
];



export const suggestions: SophosSuggestionMap = {
  overview: ['Who is Oscar?', 'What systems has AI Arsenal built?', 'Which demo should I watch first?'],
  founder: ['What systems has Oscar built?', 'Why should someone hire Oscar?', 'How can I contact AI Arsenal?'],
  systems: ['What is AI Contract Reviewer?', 'What is Warhorn?', 'What is Aegis?'],
  contract: ['Does this replace a lawyer?', 'How does this work under the hood?', 'Which demo should I watch first?'],
  warhorn: ['How will Warhorn handle missed calls?', 'How can I contact AI Arsenal?', 'What systems has AI Arsenal built?'],
  aegis: ['What business problem does Aegis solve?', 'What is responsible AI?', 'What systems has AI Arsenal built?'],
  cerebro: ['What business problem does Cerebro solve?', 'What is responsible AI?', 'What systems has AI Arsenal built?'],
  excel: ['How does this work under the hood?', 'What business problem does it solve?', 'How is this different from ChatGPT?'],
  readmit: ['How does ReadmitGuard predict risk?', 'What business problem does it solve?', 'Which demo should I watch first?'],
  technical: ['What tools were used?', 'How is this different from ChatGPT?', 'What systems has AI Arsenal built?'],
  business: ['Why should someone hire Oscar?', 'How can I contact AI Arsenal?', 'Which demo should I watch first?'],
  hiring: ['How can I contact AI Arsenal?', 'What systems has Oscar built?', 'What AI engineering skills does Oscar show?'],
  chatgpt: ['How does this work under the hood?', 'What business problem does it solve?', 'What systems has AI Arsenal built?'],
  demo: ['What is AI Contract Reviewer?', 'What systems has AI Arsenal built?', 'How can I contact AI Arsenal?'],
  responsible: ['Does this replace human review?', 'How does AI Arsenal handle privacy?', 'What systems has AI Arsenal built?'],
  boundaries: ['What is AI Contract Reviewer?', 'What is responsible AI?', 'How can I contact AI Arsenal?'],
  contact: ['Who is Oscar?', 'What systems has AI Arsenal built?', 'Which demo should I watch first?']
};


export const intents: SophosIntent[] = [
  {
    name: 'overview',
    label: 'AI Arsenal Enterprise',
    keywords: ['hi', 'hello', 'hey', 'ai arsenal', 'ai arsenal enterprise', 'what is this', 'what do you do', 'what is this site', 'what am i looking at', 'company', 'help'],
    answers: [
      'AI Arsenal Enterprise is a human-led applied AI company building governed systems for contract review, customer communications, analytics, knowledge retrieval, automation, and decision support. The goal is to reduce manual work, surface useful evidence, and keep people in control of important decisions.'
    ]
  },
  {
    name: 'founder',
    label: 'Oscar Holguin Silva',
    keywords: ['who is oscar', 'about oscar', 'oscar holguin', 'founder', 'owner', 'oscars background', 'former soldier'],
    answers: [
      'Oscar Holguin Silva is the founder and principal builder behind AI Arsenal Enterprise. He is a former U.S. Army soldier and an applied AI, data, automation, and web professional who builds human-led systems for operational clarity, responsible decision support, and reduced manual work.'
    ]
  },
  {
    name: 'systems',
    label: 'AI Arsenal systems',
    keywords: ['projects', 'systems', 'what has oscar built', 'what systems has oscar built', 'what systems has ai arsenal built', 'portfolio', 'tools', 'products', 'demos'],
    answers: [
      'AI Arsenal’s system family includes AI Contract Reviewer, Warhorn, Aegis, Cerebro, Excel Whisperer, and ReadmitGuard. They address contract review, customer communications, governed data access, knowledge retrieval, spreadsheet intelligence, and predictive analytics. Some are demonstrated on this site while others are still being developed and tested.'
    ]
  },
  {
    name: 'contract',
    label: 'AI Contract Reviewer',
    keywords: ['contract', 'reviewer', 'risk analysis', 'agreement', 'clause', 'aicr'],
    answers: [
      'AI Contract Reviewer provides a structured first pass over agreements. It surfaces risk signals, extracts important terms, supports source-aware review, and produces evidence-backed summaries for human evaluation.'
    ]
  },
  {
    name: 'warhorn',
    label: 'Warhorn',
    keywords: ['warhorn', 'incoming calls', 'missed calls', 'caller', 'phone assistant', 'lead capture'],
    answers: [
      'Warhorn is an AI Arsenal communications and intake application being developed to capture incoming inquiries, organize caller information, support approved AI-assisted conversations, and create reliable follow-up records. Telephony and n8n integrations are still being built and tested.'
    ]
  },
  {
    name: 'aegis',
    label: 'Aegis',
    keywords: ['aegis', 'what business problem does aegis solve', 'governed data', 'read only sql', 'safe data access'],
    answers: [
      'Aegis is a governed data-access and decision-support system designed around safe, read-only workflows, explicit authority boundaries, and auditable outputs.'
    ]
  },
  {
    name: 'cerebro',
    label: 'Cerebro',
    keywords: ['cerebro', 'what business problem does cerebro solve', 'knowledge assistant', 'knowledge retrieval', 'local knowledge'],
    answers: [
      'Cerebro is AI Arsenal’s privacy-conscious knowledge assistant for working with approved information and helping users retrieve useful answers from controlled sources. Its broader productization is still in progress.'
    ]
  },
  {
    name: 'excel',
    label: 'Excel Whisperer',
    keywords: ['excel', 'whisperer', 'spreadsheet', 'reporting', 'manual reporting'],
    answers: [
      'Excel Whisperer focuses on spreadsheet intelligence, data analysis, and insight generation using Python-driven workflows. It is designed to reduce repetitive spreadsheet work and help users reach useful findings faster.'
    ]
  },
  {
    name: 'readmit',
    label: 'ReadmitGuard',
    keywords: ['readmit', 'readmission', 'healthcare', 'patient', 'prediction', 'csv'],
    answers: [
      'ReadmitGuard demonstrates predictive healthcare analytics through patient readmission-risk estimation, including individual scoring and CSV batch-processing workflows. Its outputs are decision support and do not replace clinical judgment.'
    ]
  },
  {
    name: 'technical',
    label: 'technical architecture',
    keywords: ['under the hood', 'how does this work', 'tech stack', 'python', 'sql', 'machine learning', 'ai model', 'architecture', 'tools were used'],
    answers: [
      'AI Arsenal systems commonly combine structured intake, validation, analysis logic, evidence or traceability, controlled outputs, and a user-facing workflow. The broader stack includes Python, SQL, Streamlit, FastAPI, analytics, automation, machine learning, and governed review patterns.'
    ]
  },
  {
    name: 'business',
    label: 'business value',
    keywords: ['business', 'help my business', 'problems', 'solve', 'manual work', 'time save', 'replace manual', 'value'],
    answers: [
      'AI Arsenal systems are designed to reduce manual work, improve visibility, surface important risks or patterns, and help teams make clearer decisions without surrendering human authority.'
    ]
  },
  {
    name: 'hiring',
    label: 'working with Oscar',
    keywords: ['hire', 'available', 'recruiter', 'job', 'remote', 'work with', 'roles', 'why hire', 'engineering skills'],
    answers: [
      'Oscar’s strongest fit is applied AI engineering, data analytics, workflow automation, and governed decision-support work. He combines technical delivery with process improvement, stakeholder communication, and a human-in-the-loop approach.'
    ]
  },
  {
    name: 'chatgpt',
    label: 'AI system comparison',
    keywords: ['chatgpt', 'different from chatgpt', 'why not chatgpt', 'real ai'],
    answers: [
      'ChatGPT is a general-purpose conversational system. AI Arsenal products are bounded workflows built around specific data, approved capabilities, repeatable outputs, review steps, and operational needs.'
    ]
  },
  {
    name: 'demo',
    label: 'recommended demonstration',
    keywords: ['which demo', 'demo should i watch', 'watch first', 'first demo', 'best demo'],
    answers: [
      'Start with AI Contract Reviewer for the clearest example of AI Arsenal’s evidence-backed, human-reviewed approach to decision support. Then explore Aegis or Cerebro if your interest is governed data access or knowledge workflows.'
    ]
  },
  {
    name: 'responsible',
    label: 'responsible AI',
    keywords: ['responsible ai', 'how does ai arsenal handle privacy', 'human led', 'human in the loop', 'privacy', 'governance', 'evidence', 'oversight', 'human review'],
    answers: [
      'AI Arsenal’s approach is human-led, evidence-backed, privacy-conscious, and governance-first. Systems should disclose their limits, preserve human authority, support traceability, and fail safely when confidence or integrations are insufficient.'
    ]
  },
  {
    name: 'boundaries',
    label: 'AI Contract Reviewer boundaries',
    keywords: ['legal advice', 'replace a lawyer', 'does this replace a lawyer', 'safe to sign', 'ai decide', 'replace human review'],
    answers: [
      'AI Contract Reviewer provides structured decision support and does not replace legal counsel, decide whether a contract is safe to sign, or remove the need for qualified human review.'
    ]
  },
  {
    name: 'contact',
    label: 'contact AI Arsenal',
    keywords: ['contact', 'phone number', 'call', 'linkedin', 'email', 'connect', 'reach', 'how can i contact'],
    answers: [
      'You can contact AI Arsenal Enterprise by calling (407) 853-9365, using the website contact form, emailing AI.Arsenalenterprise@gmail.com, or connecting with Oscar on LinkedIn.'
    ]
  }
];


export const createIntentActions = (baseUrl: string): SophosActionMap => ({
  overview: [
    {
      label: 'Explore systems',
      href: `${baseUrl}#systems`,
      closePanel: true
    },
    {
      label: 'Contact AI Arsenal',
      href: `${baseUrl}#contact`,
      closePanel: true
    }
  ],
  founder: [
    {
      label: 'Contact Oscar',
      href: `${baseUrl}#contact`,
      closePanel: true
    },
    {
      label: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/yashuasspear-oscar-holguin-silva/',
      external: true
    }
  ],
  systems: [
    {
      label: 'Explore systems and demos',
      href: `${baseUrl}#systems`,
      closePanel: true
    }
  ],
  contract: [
    {
      label: 'View AI Contract Reviewer',
      href: `${baseUrl}projects/aicr/`
    },
    {
      label: 'Discuss AICR',
      href: `${baseUrl}#contact`,
      closePanel: true
    }
  ],
  warhorn: [
    {
      label: 'Discuss Warhorn',
      href: `${baseUrl}#contact`,
      closePanel: true
    },
    {
      label: 'Call AI Arsenal',
      href: 'tel:+14078539365'
    }
  ],
  aegis: [
    {
      label: 'View Aegis',
      href: `${baseUrl}projects/aegis/`
    },
    {
      label: 'Discuss Aegis',
      href: `${baseUrl}#contact`,
      closePanel: true
    }
  ],
  cerebro: [
    {
      label: 'View Cerebro',
      href: `${baseUrl}projects/cerebro/`
    },
    {
      label: 'Discuss Cerebro',
      href: `${baseUrl}#contact`,
      closePanel: true
    }
  ],
  excel: [
    {
      label: 'View systems and demos',
      href: `${baseUrl}#systems`,
      closePanel: true
    }
  ],
  readmit: [
    {
      label: 'View systems and demos',
      href: `${baseUrl}#systems`,
      closePanel: true
    }
  ],
  hiring: [
    {
      label: 'Contact Oscar',
      href: `${baseUrl}#contact`,
      closePanel: true
    },
    {
      label: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/yashuasspear-oscar-holguin-silva/',
      external: true
    }
  ],
  demo: [
    {
      label: 'View systems and demos',
      href: `${baseUrl}#systems`,
      closePanel: true
    }
  ],
  boundaries: [
    {
      label: 'View AI Contract Reviewer',
      href: `${baseUrl}projects/aicr/`
    },
    {
      label: 'Contact AI Arsenal',
      href: `${baseUrl}#contact`,
      closePanel: true
    }
  ],
  contact: [
    {
      label: 'Call (407) 853-9365',
      href: 'tel:+14078539365'
    },
    {
      label: 'Open contact form',
      href: `${baseUrl}#contact`,
      closePanel: true
    },
    {
      label: 'Email AI Arsenal',
      href: 'mailto:AI.Arsenalenterprise@gmail.com'
    },
    {
      label: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/yashuasspear-oscar-holguin-silva/',
      external: true
    }
  ]
});
