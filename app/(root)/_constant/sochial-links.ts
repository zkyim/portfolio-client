import { SocialLink } from "@/types";
import { Facebook, Github, Linkedin, Phone } from "lucide-react";

export const  socialLinks: SocialLink[] = [
    {
        href: "http://facebook.com",
        icon: Facebook,
        color: "text-blue-700",
    },
    {
        href: "https://github.com/zkyim",
        icon: Github,
        color: "text-slate-700",
    },
    {
        href: "tellto://+2001030269257",
        icon: Linkedin,
        color: "text-sky-600",
    },
    {
        href: "tellto://+2001030269257",
        icon: Phone,
        color: "text-emerald-700",
    },
];