import { Statistic } from "@/types";
import { BriefcaseBusiness, Medal, Headphones } from "lucide-react";

export const statistics: Statistic[] = [
    {
        title: "Experience",
        label: "Years",
        value: new Date().getFullYear() - 2023,
        icon: BriefcaseBusiness,
    },
    {
        title: "Completed",
        label: "Projects",
        value: 0,
        icon: Medal,
    },
    {
        title: "Support",
        label: "Online",
        value: "24/7",
        icon: Headphones,
    },
];
