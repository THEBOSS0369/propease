# PropEase - Real Estate Management Platform

## 🏡 Overview

PropEase is a modern, full-featured real estate management platform that simplifies property listing, tenant management, and real estate operations. Built with cutting-edge technologies, it provides a seamless experience for real estate professionals, property managers, and investors.

## 🔗 Live Demo

Check out the live demo: [PropEase App]()

## ✨ Features

### 🏢 **Property Management**

- **Property Listings**: Create, edit, and manage unlimited property listings
- **Virtual Tours**: Interactive 3D property viewing experiences
- **Property Analytics**: Track performance metrics and market trends
- **Document Management**: Secure storage for contracts and property documents

### 👥 **User Management**

- **Secure Authentication**: Powered by Clerk for robust user management
- **Role-Based Access**: Different permissions for agents, managers, and admins
- **User Profiles**: Comprehensive user profiles with preferences

### 📊 **Dashboard & Analytics**

- **Real-Time Dashboard**: Live metrics and property performance
- **Financial Tracking**: Revenue, expenses, and profit analytics
- **Tenant Management**: Track tenant applications and rental history
- **Activity Timeline**: Real-time updates on property activities

### 🎨 **Modern UI/UX**

- **Responsive Design**: Works perfectly on all devices
- **Dark Theme**: Elegant dark mode interface
- **Smooth Animations**: Powered by Framer Motion
- **Accessibility**: Built with accessibility best practices

### 🔧 **Advanced Features**

- **AI-Powered Valuation**: Smart property pricing recommendations
- **Automated Workflows**: Streamlined property management processes
- **Integration Ready**: API access for third-party integrations
- **Multi-Language Support**: Internationalization ready

## 🛠️ Tech Stack

### **Frontend**

- **[Next.js 15](https://nextjs.org/)** - React framework for production
- **[React 19](https://react.dev/)** - Latest React with modern features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Beautiful and accessible components

### **Authentication & Security**

- **[Clerk](https://clerk.com/)** - Complete authentication solution
- **Secure Sessions** - JWT-based session management
- **Role-Based Access** - Granular permission control

### **UI & Animations**

- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Number Flow](https://number-flow.brenelz.com/)** - Animated number counters

### **Forms & Validation**

- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[Zod](https://zod.dev/)** - Schema validation
- **[Hookform Resolvers](https://github.com/react-hook-form/resolvers)** - Form validation

### **Development Tools**

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[TypeScript](https://www.typescriptlang.org/)** - Type checking

## 🚀 Quick Start

### Prerequisites

- **Node.js 18.0** or higher
- **npm**, **yarn**, or **pnpm**
- **Clerk account** for authentication

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Shreyas-29/propease.git
cd propease
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

4. **Configure environment variables**

```env
# Application
NEXT_PUBLIC_APP_NAME=PropEase

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/signin
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_URL=/
```

5. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Authentication Setup

### Getting Clerk API Keys

1. **Create a Clerk account** at [clerk.com](https://clerk.com)
2. **Create a new application** in your Clerk dashboard
3. **Copy your API keys**:
   - **Publishable Key**: Found in "API Keys" (starts with `pk_`)
   - **Secret Key**: Found in "API Keys" (starts with `sk_`)
4. **Add keys to your `.env.local` file**

### Authentication Features

- **Email/Password** authentication
- **Social logins** (Google, GitHub, etc.)
- **Multi-factor authentication**
- **Session management**
- **User profiles**

## 📁 Project Structure

```
propease/
├── public/                 # Static assets
│   ├── images/            # Images and graphics
│   └── icons/             # SVG icons
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── (auth)/        # Authentication pages
│   │   ├── (marketing)/   # Marketing pages
│   │   ├── dashboard/     # Dashboard pages
│   │   └── layout.tsx     # Root layout
│   ├── components/        # Reusable components
│   │   ├── global/        # Global components
│   │   └── ui/            # UI components
│   ├── constants/         # Application constants
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── styles/            # Global styles
│   └── utils/             # Helper utilities
├── .env.example          # Environment variables template
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.ts        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 🎯 Usage

### **For Real Estate Agents**

- Create and manage property listings
- Track leads and client interactions
- Generate property reports
- Schedule viewings and appointments

### **For Property Managers**

- Manage multiple properties
- Track tenant applications
- Monitor rental payments
- Handle maintenance requests

### **For Investors**

- Analyze property performance
- Track portfolio metrics
- Monitor market trends
- Calculate ROI and profits

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

[![Deploy with Vercel](https://vercel.com/button)]

### Deploy on Netlify

1. **Connect your repository** to Netlify
2. **Set build command**: `npm run build`
3. **Set publish directory**: `.next`
4. **Add environment variables**

### Deploy on Railway

1. **Connect your repository** to Railway
2. **Add environment variables**
3. **Deploy** automatically

## 📖 API Reference

### Authentication Endpoints

- `POST /api/auth/signin` - User sign in
- `POST /api/auth/signup` - User sign up
- `POST /api/auth/signout` - User sign out

### Property Endpoints

- `GET /api/properties` - Get all properties
- `POST /api/properties` - Create new property
- `PUT /api/properties/:id` - Update property
- `DELETE /api/properties/:id` - Delete property

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**

```bash
git checkout -b feature/amazing-feature
```

3. **Commit your changes**

```bash
git commit -m 'Add amazing feature'
```

4. **Push to the branch**

```bash
git push origin feature/amazing-feature
```

5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation when needed
- Test your changes thoroughly

## 🐛 Bug Reports

If you find a bug, please create an issue with:

- **Bug description**
- **Steps to reproduce**
- **Expected behavior**
- **Screenshots** (if applicable)
- **Environment details**

## 💡 Feature Requests

We're always looking to improve! Submit feature requests with:

- **Clear description** of the feature
- **Use case** and benefits
- **Any relevant mockups** or examples

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Next.js](https://nextjs.org/)** for the amazing React framework
- **[Clerk](https://clerk.com/)** for authentication solutions
- **[Tailwind CSS](https://tailwindcss.com/)** for styling
- **[Shadcn/ui](https://ui.shadcn.com/)** for beautiful components
- **[Framer Motion](https://www.framer.com/motion/)** for animations

## 📞 Support

- **Email**: anujkumsharma9876@gmail.com

---

<div align="center">
  <strong>Built with ❤️ by the PropEase team</strong>
</div>
