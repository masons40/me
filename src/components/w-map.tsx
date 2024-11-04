'use client'

import { cn } from "@/lib/utils";
import { scaleQuantile } from "d3-scale";
import { Minus, Plus } from "lucide-react";
import { memo, SetStateAction, useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { useTheme } from "./theme-provider";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

export interface Country {
    name: string;
    visits: number;
    ISOcode: string
}
const Wmap = ({ content, setTooltipContent, className, data }: { content: string; setTooltipContent: React.Dispatch<React.SetStateAction<string>>; className?: string, data: Country[] }) => {


    const [position, setPosition] = useState({ coordinates: [25.2744, 133.7751], zoom: 2 });
    const theme = useTheme()

    function handleZoomIn() {
        if (position.zoom >= 4) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
    }

    function handleZoomOut() {
        if (position.zoom <= 1) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
    }

    function handleMoveEnd(position: SetStateAction<{ coordinates: number[]; zoom: number; }>) {
        setPosition(position);
    }

    const colorScale = scaleQuantile()
        .domain(data.map((country: Country) => country.visits))
        .range([
            "#fbf2ff",
            "#eabbff",
            "#d06aff",
            "#b000ff",
            "#7300a7"
        ]);

    const getColor = (value: number) => {
        if (value === -1) return '#4ade80'
        if (value > 0) {
            return colorScale(value)
        }
        return theme.theme === "dark" ? "rgb(55, 55, 55)" : "#F5F4F6"
    }


    return (
        <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm relative overflow-hidden", "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            // dark styles
            "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]", className)}>
            <ComposableMap className="h-full">
                <ZoomableGroup zoom={position.zoom}
                    center={position.coordinates}
                    onMoveEnd={handleMoveEnd}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const d = data.find((country: Country) => country.name === geo.properties.name as string)
                                return <Geography key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        setTooltipContent(`${geo.properties.name}`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent(`Ireland`);
                                    }}
                                    fill={getColor(d?.visits)}
                                    style={{
                                        hover: {
                                            fill: "#222224",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: "#222224",
                                            outline: "none"
                                        }
                                    }} />

                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <div className="flex items-center space-x-1 m-1 absolute bottom-2 left-2">
                <Button onClick={handleZoomIn} variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                </Button>
                <Button onClick={handleZoomOut} variant="outline" size="icon">
                    <Minus className="h-4 w-4" />
                </Button>
            </div>
            <Badge className="absolute top-2 right-2"><span className="w-2 h-2 rounded-full bg-green-400 mr-1"></span>Home</Badge>
            <Badge className="absolute top-2 left-2">{content}</Badge>
        </div>
    );
}

export default memo(Wmap);