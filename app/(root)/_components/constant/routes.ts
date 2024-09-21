"use client";
import { BriefcaseBusiness, Mail, User } from 'lucide-react';

export const routes = [
    {
        label: "About me",
        href: "/",
        icon: User,
    },
    {
        label: "My Projects",
        href: "/projects",
        icon: BriefcaseBusiness,
    },
    {
        label: "Contact me",
        href: "/contact",
        icon: Mail,
    },
]