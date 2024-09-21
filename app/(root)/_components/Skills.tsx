"use client";
import { AppWindow, PencilRuler, TerminalSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronRight } from 'lucide-react';
import React from 'react'
import SkillContainer from './SkillContainer';
import { Skill, TabItem } from "@/types";
import TitleElement from "./TitleElement";

interface SkillsProps {
    skills: Skill[];
}

const Skills = ({
    skills
}: SkillsProps) => {
    const frontend = skills.filter(skill => String(skill.category) == "FRONTEND");
    const backend = skills.filter(skill => String(skill.category) == "BACKEND");
    const tools = skills.filter(skill => String(skill.category) == "TOOL");
    const tabItem: TabItem[] = [
        {
            title: "FRONTEND",
            value: "More than "+(new Date().getFullYear() - 2022)+" years",
            icon: AppWindow,
            label: "Frontend",
        },
        {
            title: "BACKEND",
            value: "More than "+(new Date().getFullYear() - 2022)+" years",
            icon: TerminalSquare,
            label: "Backend",
        },
        {
            title: "TOOLS",
            value: "More than "+(new Date().getFullYear() - 2022)+" years",
            icon: PencilRuler,
            label: "Tools",
        },
    ]
  return (
    <section className="relative parent-observe">
      <TitleElement
        title='Education'
      />
      <Tabs defaultValue={tabItem[0].title}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
          <TabsList className="md:col-span-2 gap-2 w-full h-fit grid grid-cols-3 md:grid-cols-1 py-2">
            {tabItem.map((item,index)=> {
              const {title,value, label, icon: Icon} = item;
              return (
                <TabsTrigger key={index} value={title} className="border border-muted-foreground/40 flex items-center justify-between md:p-6 p-2 font-bold md:text-lg w-full gap-2 shadow-md shadow-primary/5 show-observe">
                  <div className="flex flex-row gap-3 items-center">
                    <Icon className="md:size-12 size-4" />
                    <span className="capitalize flex items-start flex-col">
                      <span>{label}</span>
                      <span className="hidden md:block text-muted-foreground text-[10px] -mt-2">{value}</span>
                    </span>
                  </div>
                  <ChevronRight className="hidden md:block"/>
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="md:col-span-3 show-observe">
            <TabsContent value="FRONTEND"><SkillContainer data={frontend} label="forntend"/></TabsContent>
            <TabsContent value="BACKEND"><SkillContainer data={backend} label="backend"/></TabsContent>
            <TabsContent value="TOOLS"><SkillContainer data={tools} label="tools"/></TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  )
}

export default Skills
