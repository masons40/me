import { ModeToggle } from "@/components/mode-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, MapPin } from "lucide-react";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import WMap, { Country } from "../w-map";

export const Travel = ({ className }: { className?: string }) => {
    const [content, setContent] = useState("Ireland");

    const data: Country[] = [
        { name: "Ireland", visits: -1, ISOcode: "IE" },
        { name: "United Kingdom", visits: 2, ISOcode: "GB" },
        { name: "United States of America", visits: 1, ISOcode: "US" },
        { name: "France", visits: 4, ISOcode: "FR" },
        { name: "Spain", visits: 1, ISOcode: "ES" },
        { name: "Poland", visits: 1, ISOcode: "PL" },
        { name: "Italy", visits: 1, ISOcode: "IT" },
        { name: "Hungary", visits: 1, ISOcode: "HU" },
        { name: "Switzerland", visits: 1, ISOcode: "CH" },
        { name: "Austria", visits: 1, ISOcode: "AT" },
        { name: "Denmark", visits: 1, ISOcode: "DK" },
        { name: "Belgium", visits: 1, ISOcode: "BE" },
        { name: "Singapore", visits: 2, ISOcode: "SG" },
        { name: "Vietnam", visits: 2, ISOcode: "VN" },
        { name: "Japan", visits: 2, ISOcode: "JP" },
        { name: "South Korea", visits: 1, ISOcode: "SK" },
        { name: "Cambodia", visits: 1, ISOcode: "KH" },
        { name: "Laos", visits: 1, ISOcode: "LA" },
        { name: "Thailand", visits: 1, ISOcode: "TH" },
        { name: "Indonesia", visits: 1, ISOcode: "ID" },
        { name: "Malaysia", visits: 1, ISOcode: "MY" },
        { name: "Philippines", visits: 1, ISOcode: "PH" },
        { name: "Australia", visits: 1, ISOcode: "AU" },
    ]


    return (
        <div className="w-full relative h-screen place-content-center">
            <div className="top-3 left-3 absolute flex items-center space-x-1">
                <Button variant={'outline'} size={'icon'} asChild>
                    <a href={`/`}>
                        <Home className="h-4 w-4" />
                    </a>
                </Button>
                <ModeToggle />
            </div>
            <div className={cn("grid md:grid-cols-4 md:grid-rows-2 gap-1 m-auto w-5/6 md:w-1/2", className)}>
                <WMap content={content} data={data} setTooltipContent={setContent} className="row-span-2 col-span-2 rounded-lg rounded-t-3xl md:rounded-tr-lg md:rounded-l-3xl" />
                <div className={cn("space-y-2 md:space-y-0 rounded-lg md:rounded-tr-3xl border bg-card text-card-foreground shadow-sm relative p-6 col-span-2 grid place-content-stretch h-full ", "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                    // dark styles
                    "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]")}>
                    <h1 className="text-left pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-6xl font-bold leading-none tracking-tighter text-transparent">
                        My Travels
                    </h1>
                    <p className="max-w-lg text-neutral-400 text-sm">All of the places I've been to so far. More to come soon ! Just checking out Australia for now.</p>
                    <div className="flex items-center space-x-1">
                        <Badge className="justify-center" variant={'outline'}>
                            <Home size={13} className="mr-1" /> Ireland <ReactCountryFlag countryCode="IE" className="ml-1" />
                        </Badge>
                        <Badge className="justify-center" variant={'outline'}>
                            <MapPin size={13} className="mr-1" /> Australia <ReactCountryFlag countryCode="AU" className="ml-1" />
                        </Badge>
                        <Badge className="" variant={'outline'}>{data.length}/195</Badge>
                    </div>
                </div>
                <div className={cn("relative rounded-lg rounded-b-3xl md:rounded-b-lg md:rounded-br-3xl border bg-card text-card-foreground shadow-sm p-6 col-span-2 flex gap-1 flex-wrap max-h-56 overflow-auto", "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                    // dark styles
                    "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]")}>{
                        data.map((country: Country) => <Badge variant={'outline'}><ReactCountryFlag countryCode={country.ISOcode} className="mr-1" />{country.name} {country.visits === -1 ? 'Home' : country.visits}</Badge>)
                    }
                </div>
            </div >
            {/* <CobeGlobe /> */}
        </div>
    )
}
