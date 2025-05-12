# 🗓️ Schedulo

<div align="center">

![Schedulo Banner](https://img.shields.io/badge/Schedulo-Smart_Scheduling_Platform-2D3748?style=for-the-badge&logo=calendar)

[![Next.js](https://img.shields.io/badge/Next.js-14.2.7-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.7-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

> A modern scheduling platform that helps professionals manage their time effectively and streamline meeting bookings.

[![Features](https://img.shields.io/badge/Features-✨-yellow)](https://github.com/AradhyaTiwari10/Schedulo#-features)
[![Tech Stack](https://img.shields.io/badge/Tech_Stack-🛠️-orange)](https://github.com/AradhyaTiwari10/Schedulo#-tech-stack)
[![Getting Started](https://img.shields.io/badge/Getting_Started-🚀-green)](https://github.com/AradhyaTiwari10/Schedulo#-getting-started)
[![Project Structure](https://img.shields.io/badge/Project_Structure-📁-blue)](https://github.com/AradhyaTiwari10/Schedulo#-project-structure)
[![Environment Variables](https://img.shields.io/badge/Environment_Variables-🔑-purple)](https://github.com/AradhyaTiwari10/Schedulo#-environment-variables)
[![API Routes](https://img.shields.io/badge/API_Routes-📝-red)](https://github.com/AradhyaTiwari10/Schedulo#-api-routes)

</div>

## ✨ Features

<details>
<summary><b>🔐 Authentication & Authorization</b></summary>

- Secure user authentication with Clerk
- Role-based access control
- Protected routes and API endpoints
</details>

<details>
<summary><b>📅 Event Management</b></summary>

- Create and customize event types
- Set duration and availability
- Private/public event visibility
- Google Calendar integration
</details>

<details>
<summary><b>🕒 Availability Management</b></summary>

- Set weekly availability
- Custom time slots
- Buffer time between meetings
- Timezone support
</details>

<details>
<summary><b>📱 Booking System</b></summary>

- Custom booking links
- Automated scheduling
- Email notifications
- Google Meet integration
</details>

<details>
<summary><b>📊 Dashboard</b></summary>

- Overview of upcoming meetings
- Meeting history
- Analytics and insights
- Quick actions
</details>

## 🛠️ Tech Stack

### Frontend
| Category | Technologies |
|----------|--------------|
| Framework | Next.js 14 (App Router) |
| UI Library | React 18 |
| Language | JavaScript (ES6+) |
| Styling | Tailwind CSS |
| Components | Radix UI, Shadcn/ui |
| State Management | React Hooks |
| Form Handling | React Hook Form + Zod |
| Icons | Lucide Icons |

### Backend
| Category | Technologies |
|----------|--------------|
| Runtime | Node.js |
| Database | PostgreSQL |
| ORM | Prisma 6.7 |
| Authentication | Clerk |
| API Routes | Next.js API Routes |
| Calendar Integration | Google Calendar API |

### Development Tools
| Category | Tools |
|----------|-------|
| Package Manager | npm |
| Code Quality | ESLint |
| Version Control | Git |
| Deployment | Netlify |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Clerk account
- Google Cloud Platform account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AradhyaTiwari10/Schedulo.git
   cd Schedulo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your environment variables (see [Environment Variables](#-environment-variables))

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
Schedulo/
├── app/                    # Next.js app directory
│   ├── (main)/            # Main application routes
│   ├── api/               # API routes
│   └── layout.js          # Root layout
├── components/            # React components
│   ├── ui/               # UI components
│   └── shared/           # Shared components
├── lib/                  # Utility functions
├── hooks/               # Custom React hooks
├── actions/            # Server actions
├── prisma/             # Database schema and migrations
├── public/             # Static assets
└── styles/             # Global styles
```

## 🔑 Environment Variables

```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...

# Other
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

## 📝 API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/events` | Create new event |
| GET | `/api/events` | List user's events |
| POST | `/api/bookings` | Create booking |
| GET | `/api/bookings` | List user's bookings |
| PUT | `/api/availability` | Update availability |





