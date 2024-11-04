import IMAGES from "@/images/images"
import { cn } from "@/lib/utils"
import { ArrowRightIcon, MapPin } from "lucide-react"
import ReactCountryFlag from "react-country-flag"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"

const ProfileCard = ({ className }: { className?: string }) => {
    const year: number = new Date().getFullYear()
    return (
        <div className={cn("group relative overflow-hidden",
            "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            // dark styles
            "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            , className)}>

            {/* <img src={IMAGES.image1} alt='first image' width={100} height={100}/> */}
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
                <Avatar className="w-20 h-20">
                    <AvatarImage src={IMAGES.image1} />
                    <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mt-6">
                    Hi, I'm Mason
                </h3>
                <div className="text-xs flex items-center space-x-1 mb-1 text-muted-foreground" >
                    <MapPin size={14} />
                    <h1>Sydney, Australia</h1>
                    <ReactCountryFlag countryCode="AU" />
                </div>
                <p className="max-w-lg text-neutral-400 text-sm">Sofware engineer for the last {year - 2020} years. I like building fun projects so check out my portfolio.</p>
            </div>

            <div
                className={cn(
                    "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
                )}
            >
                <Button variant="secondary" asChild size="sm" className="pointer-events-auto">
                    <a href={"mailto:masonsmith40@hotmail.co.uk"}>
                        <span className="w-2 h-2 bg-orange-500 rounded shadow-sm border border-orange-500 shadow-orange-400"></span>
                        Contact
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
            <Badge className="absolute top-3 right-1 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border-green-400 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300" >Open to work</Badge>
        </div>
    )
}

export default ProfileCard