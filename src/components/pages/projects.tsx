import IMAGES from "@/images/images"
import { cn } from "@/lib/utils"
import { ArrowRightIcon, Home } from "lucide-react"
import { ModeToggle } from "../mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import WordPullUp from "../ui/word-pull-up"

const Projects = ({ className }: { className?: string }) => {
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
            <div className={cn("grid md:grid-cols-2 gap-2 md:m-auto my-20 md:mt-0 w-5/6 md:w-3/5", className)}>

                <div className={cn("group relative overflow-hidden min-h-96 rounded-lg rounded-t-3xl md:rounded-tr-lg md:rounded-l-3xl",
                    "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                    // dark styles
                    "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
                    , className)}>

                    <div className="flex items-center flex-wrap gap-1 absolute -top-10 skew-y-12 -right-10 grayscale group-hover:grayscale-0 group-hover:skew-y-0 group-hover:-skew-x-0 group-hover:top-0 group-hover:-right-20 transform-gpu transition-all duration-700">
                        <img src={IMAGES.liinter} alt='Liinter Logo' width={300} height={300} />
                    </div>
                    <div className="grid grid-cols-1 content-end space-y-1 pointer-events-none z-10 h-full transform-gpu gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
                        <Avatar className="w-20 h-20 border p-2">
                            <AvatarImage src={IMAGES.liinterLogo} />
                            <AvatarFallback>Li</AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                            Liinter
                        </h3>
                        <WordPullUp
                            words="Travellers Review Journal"
                            delayMultiple={4}
                            className="text-left text-sm font-semibold [&>*:nth-child(1)]:text-[#ef4444] [&>*:nth-child(2)]:text-[#f9cb11] [&>*:nth-child(3)]:text-[#5ba4f4]"
                        />
                        <p className="max-w-lg text-neutral-400 text-sm">
                            Liinter is a review journal website dedicated to helping fellow travellers to find the right accommmodation for them.
                        </p>
                    </div>

                    <div
                        className={cn(
                            "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
                        )}
                    >
                        <Button variant="secondary" asChild size="sm" className="pointer-events-auto">
                            <a href={"https://www.liinter.com"}>
                                <span className="w-2 h-2 bg-gradient-to-r from-[#ef4444] via-[#f9cb11] to-[#5ba4f4] rounded shadow-sm border"></span>
                                Liinter
                                <ArrowRightIcon className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
                </div>

                <div className={cn("group relative overflow-hidden min-h-96 rounded-lg rounded-b-3xl md:rounded-r-3xl md:rounded-bl-lg",
                    "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                    // dark styles
                    "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
                    , className)}>

                    <div className="flex items-center flex-wrap gap-1 absolute -top-10 skew-y-12 -right-14 grayscale group-hover:grayscale-0 group-hover:skew-y-0 group-hover:-skew-x-0 group-hover:top-0 group-hover:-right-28 transform-gpu transition-all duration-700">
                        <img src={IMAGES.keyboardOnlyShowCase} alt='Keyboard Only showcase image' width={400} height={400} />
                    </div>
                    <div className="grid grid-cols-1 content-end space-y-1 pointer-events-none z-10 h-full transform-gpu gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
                        <Avatar className="w-20 h-20 border p-2  dark:hidden block">
                            <AvatarImage src={IMAGES.keyboardOnlyDarkLogo} />
                            <AvatarFallback>Li</AvatarFallback>
                        </Avatar>
                        <Avatar className="w-20 h-20 border p-2 dark:block hidden">
                            <AvatarImage src={IMAGES.keyboardOnlyLightLogo} />
                            <AvatarFallback>Li</AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                            Keyboard Only
                        </h3>
                        <p className="max-w-lg text-neutral-400 text-sm">
                            A pointless message board where anonymous users can only send realtime messages with the built in website keyboard.
                        </p>
                    </div>

                    <div
                        className={cn(
                            "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
                        )}
                    >
                        <Button variant="secondary" asChild size="sm" className="pointer-events-auto">
                            <a href={"https://www.liinter.com"}>
                                <span className="w-2 h-2 bg-[#f9cb11] rounded border-[#f9cb11] shadow-[#f9cb11] shadow-sm border"></span>
                                Keyboard Only
                                <ArrowRightIcon className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
                </div>

            </div >
        </div>
    )
}

export default Projects