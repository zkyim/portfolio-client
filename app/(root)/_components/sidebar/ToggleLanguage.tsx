"use client";
import React, { useEffect } from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from '@/lib/utils'

import i18n from "@/app/(languages)/index"
import { useTranslation } from 'react-i18next';
import { useDirection } from '@/stroe/use-dirction';

const ToggleLanguage = () => {
  const { isDirectionLtr, onLTR, onRTL } = useDirection();
  const { t } = useTranslation();
  
  const handleLanguageEnglish = () => {
    i18n.changeLanguage("en");
    onLTR();
  }
  const handleLanguageArabic = () => {
    i18n.changeLanguage("ar");
    onRTL();
  }

  return (
    <Tabs>
        <TabsList  className='w-full rounded-full bg-muted-foreground/10 dark:bg-muted-foreground/5 shadow-lg shadow-primary/5'>
        <TabsTrigger className={cn('w-1/2 rounded-full rounded-r-none ', isDirectionLtr && "bg-background")} value="password" onClick={handleLanguageEnglish}>{t("English")}</TabsTrigger>
        <TabsTrigger className={cn('w-1/2 rounded-full rounded-l-none ', !isDirectionLtr && "bg-background")} value="account" onClick={handleLanguageArabic}>{t("Arabic")}</TabsTrigger>
        </TabsList>
    </Tabs>
  )
}

export default ToggleLanguage
