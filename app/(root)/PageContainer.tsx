import React from 'react'
import { getEducation } from "@/actions/get-education";
import { getSkills } from "@/actions/get-skills";
import { getProjects } from "@/actions/get-projects";
import Definition from './_components/Definition';
import AboutMe from './_components/AboutMe';
import Education from './_components/Education';
import Skills from './_components/Skills';

const PageContainer = async () => {
    const projects = await getProjects({});
    const education = await getEducation();
    const skills = await getSkills();
  return (
    <>
      <Definition />
      <AboutMe projectCount={projects.length}/>
      <Education education={education}/>
      <Skills skills={skills} />
    </>
  )
}

export default PageContainer
