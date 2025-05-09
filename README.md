# Schedulo - Modern Scheduling Platform

Schedulo is a modern scheduling platform built with Next.js 14, offering a seamless experience for managing appointments and meetings. This project is a feature-rich alternative to popular scheduling tools, built with modern web technologies.

## Features

- 🔐 Secure authentication with Clerk
- 📅 Interactive calendar management
- 🎨 Modern UI with Tailwind CSS and Radix UI
- 📱 Responsive design for all devices
- 🔄 Real-time updates
- 📊 Google Calendar integration
- 🎯 Form validation with Zod
- 🎨 Beautiful animations and transitions

## Tech Stack

- **Framework:** Next.js 14
- **Authentication:** Clerk
- **Database:** Prisma with PostgreSQL
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Form Handling:** React Hook Form
- **Date Management:** date-fns
- **Validation:** Zod
- **API Integration:** Google Calendar API

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database

## Getting Started

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

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Project Structure

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
