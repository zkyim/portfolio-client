"use client";
import { cn } from '@/lib/utils';
import i18n from "../(languages)/index"
import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie"
import { useDirection } from '@/stroe/use-dirction';
import Navbar from './_components/navbar/Navbar';
import { Sidebar } from './_components/sidebar/Sidebar';
import ScrollToTop from './_components/ScrollToTop';

const LayoutRoot = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { isDirectionLtr, onLTR, onRTL } = useDirection();
    const [isClient, setIsClient] = useState(false);
    const lng = Cookies.get("i18next") || "en";
    useEffect(() => {
        window.document.dir = i18n.dir();
        if (lng == "ar") {
            window.document.body.classList.add("RTL");
            onRTL();
        }else {
            window.document.body.classList.add("LTR");
            onLTR();
        }
    }, [isDirectionLtr, lng, onLTR, onRTL])

    useEffect(() => {
      setIsClient(true)
    }, []);

    if (!isClient) return null;

    return (
        <div className="w-full h-full">
            <div className="w-full h-full">
                <div className={cn("hidden lg:block border-muted-foreground/20 border-r w-[260px] fixed top-0 h-full", isDirectionLtr ? "left-0" : "right-0")}>
                    <Sidebar />
                </div>
                <div className={cn("min-h-[calc(100vh - 70px)]", isDirectionLtr ? "lg:pl-[260px]" : "lg:pr-[260px]")}>
                    <Navbar />
                    <div className="p-8 h-full">
                        {children}
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
    )
}

export default LayoutRoot
