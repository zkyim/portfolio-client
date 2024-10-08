"use client";
import { cn } from '@/lib/utils';
import i18n from "../(languages)/index"
import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie"
import { useDirection } from '@/stroe/use-dirction';
import Navbar from './_components/navbar/Navbar';
import ScrollToTop from './_components/ScrollToTop';
import RoutesSidebarCont from './_components/sidebar/RoutesSidebarCont';
import { Routes } from './_components/sidebar/Routes';

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
                    <RoutesSidebarCont>
                        <Routes />
                    </RoutesSidebarCont>
                </div>
                <div className={cn("min-h-[calc(100vh - 70px)]", isDirectionLtr ? "lg:pl-[260px]" : "lg:pr-[260px]")}>
                    <Navbar />
                    <div className="px-4 md:px-8 py-10 h-full">
                        {children}
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
    )
}

export default LayoutRoot
