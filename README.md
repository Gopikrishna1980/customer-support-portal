# Customer Support Portal

Modern React + TypeScript customer portal for intelligent support platform with real-time chat, ticket management, and AI-powered assistance.

## Features

- 🔐 **Authentication** - JWT-based login/registration
- 🎫 **Ticket Management** - Create, view, and track support tickets
- 💬 **Real-time Chat** - WebSocket-based live chat with support agents
- 📊 **Dashboard** - View ticket statistics and activity
- 🎨 **Modern UI** - Responsive design with Tailwind CSS
- 🔄 **State Management** - Zustand for efficient state handling
- 📱 **Mobile Friendly** - Fully responsive across all devices

## Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: Zustand
- **API Client**: Axios with interceptors
- **Data Fetching**: TanStack Query (React Query)
- **Form Validation**: React Hook Form + Zod

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Update API URL in .env
VITE_API_URL=http://localhost:4000
```

### Development

```bash
# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
src/
├── api/            # API client and services
│   ├── client.ts   # Axios instance with interceptors
│   └── auth.ts     # Authentication API calls
├── components/     # Reusable components
│   └── Navbar.tsx  # Navigation component
├── pages/          # Page components
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── DashboardPage.tsx
│   ├── TicketsPage.tsx
│   └── ChatPage.tsx
├── store/          # State management
│   └── authStore.ts
├── App.tsx         # Main app component with routes
└── main.tsx        # Entry point
```

## Environment Variables

```env
VITE_API_URL=http://localhost:4000  # API Gateway URL
```

## API Endpoints

The portal connects to the API Gateway which routes requests to:
- `/api/auth/*` - User Service (login, register, profile)
- `/api/tickets/*` - Ticket Service (CRUD operations)
- `/api/ai/*` - AI Service (suggestions, sentiment analysis)

## Docker Deployment

```bash
# Build image
docker build -t customer-portal .

# Run container
docker run -p 80:80 -e API_URL=http://api-gateway:4000 customer-portal
```

## Features in Detail

### Authentication
- Secure JWT-based authentication
- Token stored in Zustand with persistence
- Automatic token refresh via Axios interceptors
- Protected routes with authentication guards

### Ticket Management
- Create new support tickets
- View all tickets with filtering
- Track ticket status (Open, In Progress, Resolved)
- Priority levels (Low, Medium, High, Critical)
- Category selection

### Real-time Chat
- WebSocket connection for instant messaging
- Typing indicators
- Online/offline status
- Message history
- File attachments (future)

### Dashboard
- Ticket statistics overview
- Recent activity feed
- Quick actions
- Response time metrics

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

MIT License - see LICENSE file for details

## Related Projects

- [Intelligent Customer Support Platform](https://github.com/Gopikrishna1980/intelligent-customer-support-platform) - Main monorepo with all microservices

## Author

**Gopikrishna** - Full Stack Developer @ Verizon

---

Built with ❤️ using React + TypeScript + Tailwind CSS