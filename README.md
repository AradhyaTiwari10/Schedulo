# Schedulo - Modern Scheduling Platform

<div align="center">
  
  ![Schedulo](https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=40&pause=1000&color=2E7D32&center=true&vCenter=true&width=600&height=100&lines=Welcome+to+Schedulo!;Your+Modern+Scheduling+Solution)
  
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=25&pause=1000&color=2E7D32&center=true&vCenter=true&width=600&height=50&lines=Schedule+with+Ease+%7C+Meet+with+Confidence" alt="Schedulo Tagline">
  
</div>

Schedulo is a modern scheduling platform built with Next.js 14, offering a seamless experience for managing appointments and meetings. This project is a feature-rich alternative to popular scheduling tools, built with modern web technologies.

## ✨ Features

<div align="center">
  
  | Feature | Description |
  |---------|-------------|
  | 🔐 **Authentication** | Secure authentication with Clerk |
  | 📅 **Calendar** | Interactive calendar management |
  | 🎨 **UI/UX** | Modern UI with Tailwind CSS and Radix UI |
  | 📱 **Responsive** | Works on all devices |
  | 🔄 **Real-time** | Live updates and notifications |
  | 📊 **Integration** | Google Calendar integration |
  | 🎯 **Validation** | Form validation with Zod |
  | ✨ **Animations** | Beautiful transitions and effects |
  
</div>

## 🛠️ Tech Stack

<div align="center">
  
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/Clerk-Auth-blue?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk">
  <img src="https://img.shields.io/badge/Prisma-DB-purple?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma">
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
  
</div>

- **Framework:** Next.js 14
- **Authentication:** Clerk
- **Database:** Prisma with PostgreSQL
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Form Handling:** React Hook Form
- **Date Management:** date-fns
- **Validation:** Zod
- **API Integration:** Google Calendar API

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/schedulo.git
cd schedulo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up your environment variables:
Create a `.env` file in the root directory and add the following:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_database_url
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📜 Available Scripts

<div align="center">
  
  | Command | Description |
  |---------|-------------|
  | `npm run dev` | Start development server |
  | `npm run build` | Build for production |
  | `npm run start` | Start production server |
  | `npm run lint` | Run ESLint |
  
</div>

## 📁 Project Structure

```
schedulo/
├── app/              # Next.js app directory
├── components/       # Reusable UI components
├── lib/             # Utility functions and configurations
├── actions/         # Server actions
├── hooks/           # Custom React hooks
├── public/          # Static assets
└── prisma/          # Database schema and migrations
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

<div align="center">
  
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=20&pause=1000&color=2E7D32&center=true&vCenter=true&width=600&height=50&lines=Made+with+%E2%9D%A4%EF%B8%8F+by+Your+Team" alt="Made with love">
  
  <br>
  
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
  
</div>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
