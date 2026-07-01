# Zuno - Video Conferencing SaaS App

A modern **video conferencing SaaS application** built with **Next.js**, **TypeScript**, **Clerk Authentication**, **Stream Video SDK**, and **Tailwind CSS**.

Zuno allows users to create instant meetings, schedule future meetings, join meetings using links, manage previous and upcoming calls, access recordings, and use a personal meeting room.

## Overview

Zuno is a Zoom-style video conferencing platform designed to demonstrate real-world SaaS application development using modern frontend and backend technologies.

The application includes secure authentication, protected routes, real-time video calls, meeting scheduling, meeting history, recordings, and personal meeting rooms. It uses **Clerk** for user authentication and **Stream Video SDK** for video call functionality.

## Features

* User authentication with Clerk
* Protected dashboard routes
* Create instant meetings
* Schedule future meetings
* Join meetings using meeting links
* Personal meeting room for each user
* View upcoming meetings
* View previous meetings
* View meeting recordings
* Copy meeting invitation links
* Camera and microphone setup before joining
* Join with mic and camera turned off
* Multiple meeting layouts
* Participant list
* Call controls
* End call functionality
* Responsive sidebar and mobile navigation
* Modern dashboard UI
* Toast notifications
* TypeScript-based codebase
* Tailwind CSS styling

## Tech Stack

* Next.js 14
* React 18
* TypeScript
* Tailwind CSS
* Clerk Authentication
* Stream Video React SDK
* Stream Node SDK
* Radix UI
* Lucide React
* React Datepicker
* Date-fns
* UUID
* ESLint
* Prettier
* Vercel

## Live Demo

[View Live Application](https://zuno-video-conferencing-saas-app.vercel.app)

## Project Structure

```bash
zuno-video-conferencing-saas-app/
├── actions/
│   └── stream.actions.ts
│
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   │
│   ├── (root)/
│   │   ├── (home)/
│   │   │   ├── personal-room/
│   │   │   ├── previous/
│   │   │   ├── recordings/
│   │   │   ├── upcoming/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── meeting/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   └── layout.tsx
│   │
│   ├── globals.css
│   └── layout.tsx
│
├── components/
│   ├── ui/
│   ├── CallList.tsx
│   ├── EndCallButton.tsx
│   ├── Footer.tsx
│   ├── HomeCard.tsx
│   ├── Loader.tsx
│   ├── MeetingCard.tsx
│   ├── MeetingModal.tsx
│   ├── MeetingRoom.tsx
│   ├── MeetingSetup.tsx
│   ├── MeetingTypeList.tsx
│   ├── MobileNav.tsx
│   ├── Navbar.tsx
│   └── Sidebar.tsx
│
├── constants/
│   └── index.ts
│
├── hooks/
│   ├── useGetCallbyId.ts
│   └── useGetCalls.ts
│
├── lib/
│   └── utils.ts
│
├── providers/
│   └── StreamClientProvider.tsx
│
├── public/
├── middleware.ts
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Main Pages

### Home Dashboard

The home dashboard displays the current time, date, and meeting action cards.

Users can:

* Start an instant meeting
* Schedule a meeting
* Join a meeting
* View recordings

### Upcoming Meetings

Displays all scheduled future meetings for the logged-in user.

### Previous Meetings

Displays completed or past meetings.

### Recordings

Displays available meeting recordings.

### Personal Room

Each user has a personal meeting room. Users can start their personal meeting or copy the invitation link.

### Meeting Room

The meeting room supports real-time video calls, call controls, participant list, layout switching, and meeting setup before joining.

## Core Functionality

### Authentication

Authentication is handled using Clerk. The application includes sign-in and sign-up routes and protects dashboard and meeting pages using middleware.

Protected routes include:

```txt
/
 /upcoming
 /previous
 /recordings
 /personal-room
 /meeting/:id
```

### Stream Video Integration

Stream Video SDK is used to handle video conferencing features.

Main Stream features used:

* Create calls
* Join calls
* Query calls
* Query recordings
* Generate Stream user tokens
* Manage call state
* Display call participants
* Display call controls
* Switch video layouts

### Meeting Scheduling

Users can schedule meetings by selecting a date and time using the date picker. A unique meeting ID is generated and a meeting link is created.

### Instant Meetings

Users can create and start instant meetings immediately.

### Personal Meeting Room

Each authenticated user gets a personal room based on their user ID. The personal room link can be copied and shared.

### Recordings

The app can query call recordings from Stream and display them in the recordings section.

## Environment Variables

Create a `.env.local` file in the root directory and add the following values:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
NEXT_PUBLIC_STREAM_SECRET_KEY=your_stream_secret_key

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

For production, update `NEXT_PUBLIC_BASE_URL` with your deployed application URL.

Example:

```env
NEXT_PUBLIC_BASE_URL=https://your-app-name.vercel.app
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/DANUCKSAN/zuno-video-conferencing-saas-app.git
```

### 2. Navigate to the project folder

```bash
cd zuno-video-conferencing-saas-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create environment variables

Create a `.env.local` file and add your Clerk and Stream credentials.

### 5. Run the development server

```bash
npm run dev
```

The application will run locally at:

```txt
http://localhost:3000
```

## Available Scripts

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm run start
```

### Run linting

```bash
npm run lint
```

## Main Components

### MeetingTypeList

Handles the main meeting actions:

* New meeting
* Join meeting
* Schedule meeting
* View recordings

### MeetingModal

Reusable modal component for creating, joining, and scheduling meetings.

### MeetingSetup

Allows users to preview their video and configure camera/microphone settings before joining a meeting.

### MeetingRoom

Handles the live meeting experience, including video layouts, call controls, participants, and call ending.

### CallList

Displays upcoming meetings, previous meetings, and recordings.

### MeetingCard

Displays individual meeting details with buttons for joining meetings or copying links.

### Sidebar

Displays dashboard navigation links.

### StreamClientProvider

Initializes the Stream Video client for authenticated users.

## Navigation

The sidebar includes the following routes:

| Route            | Description           |
| ---------------- | --------------------- |
| `/`              | Home dashboard        |
| `/upcoming`      | Upcoming meetings     |
| `/previous`      | Previous meetings     |
| `/recordings`    | Meeting recordings    |
| `/personal-room` | Personal meeting room |
| `/meeting/[id]`  | Dynamic meeting room  |

## Deployment

This project can be deployed on Vercel.

### Build command

```bash
npm run build
```

### Output

Next.js handles the production output automatically.

Before deploying, add all required environment variables in your Vercel project settings.

## Future Improvements

* Add meeting chat
* Add screen sharing instructions
* Add meeting password protection
* Add calendar integration
* Add user profile settings
* Add meeting invite emails
* Add admin dashboard
* Add team/workspace support
* Add subscription plans
* Add custom branding for SaaS users
* Improve SEO metadata
* Add automated testing
* Add CI/CD workflow using GitHub Actions

## Repository Description

A modern video conferencing SaaS app built with Next.js, TypeScript, Clerk Auth, Stream Video SDK, Tailwind CSS, and real-time meeting features.

## Topics

```txt
nextjs
nextjs14
typescript
react
tailwindcss
clerk-auth
stream-video
video-conferencing
zoom-clone
saas
meeting-app
real-time-video
web-rtc
frontend
fullstack
radix-ui
shadcn-ui
responsive-design
vercel
portfolio-project
```

## Author

**Danucksan Sathiyaraj**

GitHub: [DANUCKSAN](https://github.com/DANUCKSAN)

## License

This project is open-source and available for learning, portfolio, and demonstration purposes.
