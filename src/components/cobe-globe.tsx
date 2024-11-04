import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useTheme } from "./theme-provider";

// https://github.com/shuding/cobe

const CobeGlobe = () => {

    const cityMarkers = [
        { location: [51.5074, -0.1278], size: 0.05 }, // London
        { location: [48.8566, 2.3522], size: 0.05 }, // Paris
        { location: [39.4699, -0.3763], size: 0.05 }, // Valencia
        { location: [41.9028, 12.4964], size: 0.05 }, // Rome
        { location: [50.0647, 19.9450], size: 0.05 }, // Krakow
        { location: [50.8503, 4.3517], size: 0.05 }, // Brussels
        { location: [48.2082, 16.3738], size: 0.05 }, // Vienna
        { location: [47.4979, 19.0402], size: 0.05 }, // Budapest
        { location: [13.7563, 100.5018], size: 0.05 }, // Bangkok
        { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
        { location: [19.8833, 102.1333], size: 0.05 }, // Luang Prabang
        { location: [21.0285, 105.8542], size: 0.05 }, // Hanoi
        { location: [37.5665, 126.9780], size: 0.05 }, // Seoul
        { location: [35.6895, 139.6917], size: 0.05 }, // Tokyo
        { location: [34.6937, 135.5023], size: 0.05 }, // Osaka
        { location: [10.3157, 123.8854], size: 0.05 }, // Cebu
        { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
        { location: [37.7749, -122.4194], size: 0.05 }, // San Francisco
        { location: [36.1699, -115.1398], size: 0.05 }, // Las Vegas
        { location: [34.0522, -118.2437], size: 0.05 }, // Los Angeles
        { location: [32.7157, -117.1611], size: 0.05 }, // San Diego
        { location: [-8.3405, 115.0920], size: 0.05 }  // Bali
    ]

    const theme = useTheme()
    const canvasRef = useRef();
    const pause = useRef(false)
    pause.current = true;

    useEffect(() => {
        const phi = 2.4;
        let r = 0;
        let width = 0;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()
        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.3,
            dark: theme.theme === 'dark' ? 1 : 0,
            diffuse: 1,
            mapSamples: 11000,
            mapBrightness: 6,
            mapBaseBrightness: theme.theme === 'dark' ? 0.1 : 0.0,
            baseColor: theme.theme === 'dark' ? [147 / 255, 51 / 255, 234 / 255] : [217 / 255, 191 / 255, 242 / 255],
            markerSize: 0.02,
            markerColor: theme.theme === 'dark' ? [
                236 / 255,
                147 / 255,
                255 / 255,
            ] : [
                190 / 255,
                65 / 255,
                248 / 255,
            ],
            glowColor: theme.theme === 'dark' ? [1, 1, 1, 1] : [1, 1, 1],
            markers: cityMarkers,
            opacity: theme.theme === 'dark' ? 0.8 : 0.98,
            onRender: (state) => {
                // This prevents rotation while dragging
                if (!pause.current) r += 0.003
                // if (!pointerInteracting.current) {
                //     // Called on every animation frame.
                //     // `state` will be an empty object, return updated params.
                //     phi += 0.003
                // }
                state.phi = phi + r
                state.width = width * 2
                state.height = width * 2
            }
        })
        setTimeout(() => canvasRef.current.style.opacity = '1')
        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        }
    }, [])

    return (
        <div style={{
            width: '100%',
            maxWidth: 600,
            aspectRatio: 1,
            margin: 'auto',
            position: 'relative',
        }} className="grayscale group-hover:grayscale-0">

            <canvas
                ref={canvasRef}
                onMouseEnter={() => {
                    pause.current = !pause.current;
                }}
                onMouseLeave={() => {
                    pause.current = !pause.current;
                }}
                onTouchMove={() => {
                    pause.current = !pause.current
                }}
                style={{
                    width: '250px',
                    height: '250px',
                    contain: 'layout paint size',
                    opacity: 0,
                    transition: 'opacity 1s ease',
                }}
            />
        </div>
    );
}


export default CobeGlobe