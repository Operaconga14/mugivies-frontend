export const navigation = [
  { id: "/", name: "Home", icon: "🏠" },
  { id: "/dashboard/overview", name: "Overview", icon: "📊" },
  { id: "/dashboard/gigs", name: "Find Gigs", icon: "🎤" },
  { id: "/dashboard/musicians", name: "Find Musicians", icon: "🤝" },
  { id: "/dashboard/events", name: "Events", icon: "📅" },
  { id: "/dashboard/messages", name: "Messages", icon: "💬", badge: 3 },
  { id: "/dashboard/profile", name: "My Profile", icon: "👤" },
  { id: "music", name: "My Music", icon: "🎵" },
  { id: "settings", name: "Settings", icon: "⚙️" },
  { id: "support", name: "Support", icon: "📞" },
];

export const stats = [
  {
    label: "Gig Applications",
    value: "12",
    change: "+3 this week",
    color: "purple",
  },
  {
    label: "Profile Views",
    value: "247",
    change: "+15% this month",
    color: "pink",
  },
  { label: "Connections", value: "89", change: "+8 new", color: "blue" },
  {
    label: "Upcoming Events",
    value: "5",
    change: "Next: Tomorrow",
    color: "green",
  },
];

export const recentGigs = [
  {
    title: "Jazz Night @ Blue Note",
    location: "New York, NY",
    date: "Dec 15, 2024",
    pay: "$200",
    status: "pending",
  },
  {
    title: "Rock Festival 2024",
    location: "Austin, TX",
    date: "Dec 20, 2024",
    pay: "$500",
    status: "accepted",
  },
  {
    title: "Acoustic Open Mic",
    location: "Boston, MA",
    date: "Dec 12, 2024",
    pay: "$50",
    status: "applied",
  },
];

export const upcomingEvents = [
  {
    name: "Local Band Meetup",
    date: "Dec 8",
    time: "7:00 PM",
    location: "Downtown Music Hall",
  },
  {
    name: "Jazz Workshop",
    date: "Dec 10",
    time: "2:00 PM",
    location: "Music Academy",
  },
  {
    name: "Open Stage Night",
    date: "Dec 12",
    time: "8:00 PM",
    location: "The Live Venue",
  },
];
