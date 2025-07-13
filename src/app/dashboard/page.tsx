import SignOut from "@/components/signout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs/server";
import {
  Building2,
  DollarSign,
  Home,
  Key,
  Plus,
  TrendingUp,
  Users,
  MapPin,
  Calendar,
  Bell,
} from "lucide-react";
import Link from "next/link";

const DashboardPage = async () => {
  const user = await currentUser();

  const stats = [
    {
      title: "Total Properties",
      value: "24",
      change: "+12%",
      icon: Building2,
      color: "text-blue-600",
    },
    {
      title: "Monthly Revenue",
      value: "$45,231",
      change: "+8.2%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Active Tenants",
      value: "18",
      change: "+3",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Available Units",
      value: "6",
      change: "-2",
      icon: Key,
      color: "text-orange-600",
    },
  ];

  const recentActivity = [
    {
      action: "New tenant application",
      property: "Sunset Apartments #204",
      time: "2 hours ago",
      icon: Users,
    },
    {
      action: "Rent payment received",
      property: "Downtown Loft #12",
      time: "4 hours ago",
      icon: DollarSign,
    },
    {
      action: "Maintenance request",
      property: "Oak Street House",
      time: "1 day ago",
      icon: Home,
    },
    {
      action: "Property viewing scheduled",
      property: "Modern Villa #3",
      time: "2 days ago",
      icon: Calendar,
    },
  ];

  const quickActions = [
    {
      title: "Add Property",
      description: "List a new property",
      icon: Plus,
      href: "/dashboard/properties/add",
    },
    {
      title: "View Analytics",
      description: "Check performance metrics",
      icon: TrendingUp,
      href: "/dashboard/analytics",
    },
    {
      title: "Manage Tenants",
      description: "Handle tenant relations",
      icon: Users,
      href: "/dashboard/tenants",
    },
    {
      title: "Property Map",
      description: "View property locations",
      icon: MapPin,
      href: "/dashboard/map",
    },
  ];

  return (
    <div className="min-h-screen bg-[#101010] text-foreground">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#101010]">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">PropEase Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Welcome back, {user?.firstName || user?.fullName}!
              </span>
              <SignOut />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span
                    className={
                      stat.change.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {stat.change}
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
              <CardDescription className="text-gray-400">
                Latest updates from your properties
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <activity.icon className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white">
                      {activity.action}
                    </p>
                    <p className="text-sm text-gray-400">{activity.property}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
              <CardDescription className="text-gray-400">
                Common tasks and shortcuts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action, index) => (
                <Link key={index} href={action.href}>
                  <div className="flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
                    <action.icon className="h-5 w-5 text-blue-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {action.title}
                      </p>
                      <p className="text-xs text-gray-400">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Navigation */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Navigation</CardTitle>
            <CardDescription className="text-gray-400">
              Access main sections of your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/">
                <Button variant="outline" className="w-full justify-start">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button variant="outline" className="w-full justify-start">
                <Building2 className="h-4 w-4 mr-2" />
                Properties
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Tenants
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="h-4 w-4 mr-2" />
                Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DashboardPage;
