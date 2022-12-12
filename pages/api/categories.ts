import type { NextApiRequest, NextApiResponse } from 'next'

const products = [
  {
    "name": "Contentful",
    "description": "Contentful is the API-first content management platform to create, manage and publish content on any digital channel.",
    "thumbnail": "./github.png",
    "tags": [
      "CRM"
    ],
    "tutorials": [
      "https://www.contentful.com/developers/docs/javascript/tutorials/getting-started-with-react-and-contentful/"
    ]
  },
  {
    "name": "Memberful",
    "category": "Payments",
    "description": "Everything you need to run a membership program, so you can get started quickly and start earning.",
    "link": ""
  },
  {
    "name": "Github Actions",
    "category": "CI/CD",
    "description": "GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. ",
    "link": "https://github.com/features/actions"
  },
  {
    "name": "Circle.so",
    "category": "Community",
    "description": "The all-in-one community platform for creators & brands",
    "link": ""
  },
  {
    "name": "Tribe.so",
    "category": "Community",
    "description": "A customizable community platform for businesses",
    "link": ""
  },
  {
    "name": "Notion",
    "category": "Knowledge Base",
    "description": "Notion is a project management and note-taking software.",
    "link": ""
  },
  {
    "name": "ilo.so",
    "category": "Twitter",
    "description": "Comprehensive Twitter Analytics",
    "link": ""
  },
  {
    "name": "getform.io",
    "category": "Forms",
    "description": "Smart form endpoints for developers.",
    "link": ""
  },
  {
    "name": "Stripe",
    "category": "Payments",
    "description": "",
    "link": ""
  },
  {
    "name": "Heroku",
    "category": "Hosting",
    "description": "",
    "link": ""
  },
  {
    "name": "Cloudflare",
    "category": "",
    "description": "",
    "link": ""
  },
  {
    "name": "OneSignal",
    "category": "Notifications",
    "description": "The market leading self-serve customer engagement solution for Push Notifications, Email, SMS & In-App.",
    "link": ""
  },
  {
    "name": "Auth0",
    "category": "Authentication",
    "description": "Auth0 is an easy to implement, adaptable authentication and authorization platform.",
    "link": ""
  },
  {
    "name": "Passport.js",
    "category": "Authentication",
    "description": "",
    "link": ""
  },
  {
    "name": "Firebase",
    "category": "Authentication",
    "description": "",
    "link": ""
  },
  {
    "name": "Super",
    "category": "Landing Pages",
    "description": "",
    "link": ""
  },
  {
    "name": "Scraping Bee",
    "category": "Scraping",
    "description": "ScrapingBee API handles headless browsers and rotates proxies for you so you scrape the web.",
    "link": ""
  },
  {
    "name": "Passbase",
    "category": "KYC",
    "description": "Passbase securely verify your customers’ identities through documents, selfies, and government databases",
    "link": ""
  },
  {
    "name": "Sentry",
    "category": "Logging",
    "description": "With Sentry’s performance monitoring you can trace performance issues to poor-performing api calls and slow database queries.",
    "link": ""
  },
  {
    "name": "Posthog",
    "category": "Analytics",
    "description": "The product analytics suite you can host yourself",
    "link": ""
  },
  {
    "name": "Mixpanel",
    "category": "Analytics",
    "description": "Unlock valuable customer insights to better convert, engage, and retain users with Mixpanel's powerful, self-serve product analytics.",
    "link": ""
  },
  {
    "name": "drip.io",
    "category": "",
    "description": "",
    "link": ""
  },
  {
    "name": "customer.io",
    "category": "",
    "description": "",
    "link": ""
  },
  {
    "name": "",
    "category": "Customer Experience",
    "description": "",
    "link": ""
  },
  {
    "name": "Mux",
    "category": "Video",
    "description": "Mux Video is an API that enables developers to build unique live and on-demand video experiences.",
    "link": ""
  },
  {
    "name": "Clerk",
    "description": "Clerk",
    "thumbnail": "./github.png",
    "tags": [
      "Authentication",
    ],
    "tutorials": [
      "https://auth.com",
      "https://github.com"
    ]
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const filtered = getAllProducts()
  res.status(200).json(filtered)

}

export const getAllProducts = () => {
  return products
}

export const getProduct = (product: string) => {
  return products.find(p => p.name.toLowerCase() === product)
}

export const getAllTags = () => {
  const allTags: string[] = []

  products.map((product: any) => { if (product.tags) allTags.push(product.tags) })

  let unique: any = [...new Set(allTags)];
  return unique;
}