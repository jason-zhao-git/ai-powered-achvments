import {
  Calendar,
  CalendarDays,
  Grid2X2,
  Inbox,
  Book,
  Bot,
  Code,
  Music,
  Dumbbell,
  BookOpen,
  CodeXml,
} from "lucide-react";

export const primaryNavItems = [
  {
    name: "Tutorial",
    link: "./tutorial",
    icon: <Book className="w-4 h-4" />,
  },
  {
    id: "primary",
    name: "Main",
    link: "/loggedin",
    icon: <Inbox className="w-4 h-4" />,
  },
  {
    name: "Today",
    link: "/loggedin/today",
    icon: <Calendar className="w-4 h-4" />,
  },
  {
    name: "Upcoming",
    link: "/loggedin/upcoming",
    icon: <CalendarDays className="w-4 h-4" />,
  },
  {
    id: "filters",
    name: "Filters & Labels",
    link: "/loggedin/filter-labels",
    icon: <Grid2X2 className="w-4 h-4" />,
  },
  {
    id: "primary",
    name: "Inbox",
    link: "/loggedin",
    icon: <Inbox className="w-4 h-4" />,
  },
  {
    name: "Today",
    link: "/loggedin/today",
    icon: <Calendar className="w-4 h-4" />,
  },
  {
    name: "Upcoming",
    link: "/loggedin/upcoming",
    icon: <CalendarDays className="w-4 h-4" />,
  },
  {
    id: "filters",
    name: "Filters & Labels",
    link: "/loggedin/filter-labels",
    icon: <Grid2X2 className="w-4 h-4" />,
  },
  {
    id: "primary",
    name: "Inbox",
    link: "/loggedin",
    icon: <Inbox className="w-4 h-4" />,
  },
  {
    name: "Today",
    link: "/loggedin/today",
    icon: <Calendar className="w-4 h-4" />,
  },
  {
    name: "Upcoming",
    link: "/loggedin/upcoming",
    icon: <CalendarDays className="w-4 h-4" />,
  },
  {
    id: "filters",
    name: "Filters & Labels",
    link: "/loggedin/filter-labels",
    icon: <Grid2X2 className="w-4 h-4" />,
  },
  {
    id: "primary",
    name: "Inbox",
    link: "/loggedin",
    icon: <Inbox className="w-4 h-4" />,
  },
  {
    name: "Today",
    link: "/loggedin/today",
    icon: <Calendar className="w-4 h-4" />,
  },
  {
    name: "Upcoming",
    link: "/loggedin/upcoming",
    icon: <CalendarDays className="w-4 h-4" />,
  },
  {
    id: "filters",
    name: "Filters & Labels",
    link: "/loggedin/filter-labels",
    icon: <Grid2X2 className="w-4 h-4" />,
  },
];

export const demoNavItems = [
  {
    name: "Tutorial",
    link: "/demo/tutorial",
    icon: <Book className="w-4 h-4" />,
  },
  {
    id: "primary",
    name: "Main",
    link: "/demo",
    icon: <Bot className="w-4 h-4" />,
  },
];

export const questItems = [
  {
    name: "Code Crusader",
    icon: <CodeXml className="w-4 h-4" />,
    link: "/quests/code-crusader",
  },
  {
    name: "Voice Virtuoso",
    icon: <Music className="w-4 h-4" />,
    link: "/quests/voice-virtuoso",
  },
  {
    name: "Fit Friends Frenzy",
    icon: <Dumbbell className="w-4 h-4" />,
    link: "/quests/fit-friends-frenzy",
  },
  {
    name: "Bookworm Badges",
    icon: <BookOpen className="w-4 h-4" />,
    link: "/quests/bookworm-badges",
  },
];
