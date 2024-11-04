import CobeGlobe from "@/components/cobe-globe"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRightIcon } from "lucide-react"


const TravelCard = ({ className }: { className?: string }) => {
    return (
        <div className={cn("group relative overflow-hidden",
            "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            // dark styles
            "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            , className)}>

            <div className="flex items-center flex-wrap gap-1 absolute -top-20 -right-20 group-hover:skew-y-0 group-hover:-skew-x-0 group-hover:-top-12 transform-gpu transition-all duration-700">
                <CobeGlobe />
            </div>

            <div className="pointer-events-none z-10 flex mt-36 transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                    Travel
                </h3>
                <p className="max-w-lg text-neutral-400 text-sm">Places I've been to so far. Plenty more to add!</p>
            </div>

            <div
                className={cn(
                    "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
                )}
            >
                <Button variant="secondary" asChild size="sm" className="pointer-events-auto">
                    <a href={"/me/travel"}>
                        <span className="w-2 h-2 bg-purple-600 rounded shadow-sm border border-purple-600 shadow-purple-400"></span>
                        Travel
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
        </div >
    )
}

export default TravelCard