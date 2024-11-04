'use client'

import { cn } from "@/lib/utils"
import { Home } from "lucide-react"
import { useState } from "react"
import Box from "../box"
import { ModeToggle } from "../mode-toggle"
import { skills } from "../skills/skills-list"
import { Skill } from "../types/types"
import { Button } from "../ui/button"

const Skills = ({ className }: { className?: string }) => {

    const [selectedSkill, setselectedSkill] = useState<Skill>(skills[0])
    const setSkill = (skill: Skill) => {
        setselectedSkill(skill)
    }
    return (
        <div className="w-full relative h-screen place-content-center">
            <div className="top-3 left-3 absolute flex items-center space-x-1">
                <Button variant={'outline'} size={'icon'} asChild>
                    <a href={`/me/`}>
                        <Home className="h-4 w-4" />
                    </a>
                </Button>
                <ModeToggle />
            </div>
            <div className={cn("grid md:grid-cols-2 gap-2 m-auto w-5/6 md:w-1/2", className)}>
                <div className={cn("flex flex-wrap gap-4 w-full justify-start border rounded-lg rounded-t-3xl md:rounded-l-3xl md:rounded-tr-lg bg-card text-card-foreground shadow-sm relative p-6 h-full md:min-h-96",
                    "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                    // dark styles
                    "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]")}>
                    {
                        skills.map((skill: Skill) => <div onClick={() => setSkill(skill)}><SkillShell skill={skill} selected={skill.name === selectedSkill.name} /></div>)
                    }
                </div>
                <div className={cn("w-full grid place-items-stretch border rounded-lg rounded-b-3xl md:rounded-r-3xl md:rounded-bl-lg bg-card text-card-foreground shadow-sm relative p-6 min-h-96", "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                    // dark styles
                    "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]")}>
                    <div className="space-y-1 h-full">
                        <div className="flex items-center">
                            {
                                selectedSkill.logo
                            }
                            <h1 className="ml-2 text-lg">{selectedSkill.name}</h1>
                        </div>
                        <div className="flex items-center space-x-1 text-sm">
                            <h1>Website:</h1>
                            <a href={selectedSkill.websiteUrl} className="text-blue-300">{selectedSkill.websiteUrl}</a>
                        </div>
                    </div>
                    <h1 className="bg-input p-2 rounded-lg text-sm text-muted-foreground h-36 overflow-auto">{selectedSkill.description}</h1>
                </div>
            </div >
        </div>
    )
}

export default Skills

const SkillShell = ({ skill, selected = false }: { skill: Skill; selected: boolean }) => {
    return (<div className="group w-10 h-10 cursor-pointer">
        {/* <ShineBorderBox
            color={colors}
            className="hidden group-hover:block"
        >
            <Box className="opacity-60 group-hover:opacity-90 group-hover:bg-transparent transform-gpu transition-all duration-700">
                {skill.logo}
            </Box>
        </ShineBorderBox> */}
        <Box className={`${selected ? 'grayscale-0' : 'grayscale'} group-hover:grayscale-0 transform-gpu transition-all duration-300`}>
            {skill.logo}
        </Box>
    </div>)
}