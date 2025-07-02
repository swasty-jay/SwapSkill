import * as React from "react";
import {
  BookOpen,
  Bot,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Jombotey",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "SwapSkill",
      logo: GalleryVerticalEnd,
      plan: "Teach,Learn,Grow Together",
    },
  ],
  navMain: [
    {
      title: "Design and editting",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Graphic design",
          url: "#",
        },
        {
          title: "Video Editing",
          url: "#",
        },
        {
          title: "Canva Design",
          url: "#",
        },
        {
          title: "Photo Editing",
          url: "#",
        },
        {
          title: "Youtube Thumbmail Designing",
        },
      ],
    },
    {
      title: "Programming",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Web Development",
          url: "#",
        },
        {
          title: "Data Analysis",
          url: "#",
        },
        {
          title: "UI/UX Design",
          url: "#",
        },
        {
          title: "Cyber Sercurity",
          url: "#",
        },
        {
          title: "Wordpress",
          url: "#",
        },
      ],
    },
    {
      title: "Content Creation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Tiktok ",
          url: "#",
        },
        {
          title: "Facebooks ads",
          url: "#",
        },
        {
          title: "Youtube Chanel creation",
          url: "#",
        },
      ],
    },
    {
      title: "Crafts",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Make-up",
          url: "#",
        },
        {
          title: "Barbering",
          url: "#",
        },
        {
          title: "Nail Tech",
          url: "#",
        },
        {
          title: "Soap Making",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
