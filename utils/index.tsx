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
  PencilRuler,
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
    name: "To Be A Programmer",
    icon: <CodeXml className="w-4 h-4" />,
    link: "/demo/quests/to-be-a-coder",
  },
  {
    name: "Vocal War Crimes",
    icon: <Music className="w-4 h-4" />,
    link: "/demo/quests/voice",
  },
  {
    name: "Need Them Gains",
    icon: <Dumbbell className="w-4 h-4" />,
    link: "/demo/quests/fitness",
  },
  {
    name: "Playground",
    icon: <PencilRuler className="w-4 h-4" />,
    link: "/demo/quests/playground",
  },
];
