import { cn } from "@/lib/utils"
import { Mail } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import WordPullUp from "./ui/word-pull-up"

const WelcomeCard = ({ className }: { className?: string }) => {
    return (
        <div className={cn("bg-green-400 relative ",
            "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            , className)}>
            <ModeToggle className="absolute top-2 right-2" />
            <div className="grid place-content-stretch p-6 pb-0 ">
                <WordPullUp words={"Welcome"} className="text-left pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent" />
                <p className="max-w-lg text-neutral-400 text-sm mt-3">Thanks for checking out my website. Like what you see? Reach out to me to see what we can collaborate on</p>
                <div
                    className={cn(
                        "pointer-events-none w-full flex-row items-center ",
                    )}
                >

                </div>
            </div>
            <div className="flex items-center space-x-1 p-6">
                <Button asChild variant={'outline'} size={'icon'}>
                    <a href="https://github.com/masons40" target="_blank" rel="noopener noreferrer">
                        <svg role="img" viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-black dark:fill-white" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                    </a>
                </Button>

                <Button asChild variant={'outline'} size={'icon'}>
                    <a href="https://www.linkedin.com/in/mason-smith-376838138/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                            <path className="fill-black dark:fill-white" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                        </svg>
                    </a>
                </Button>
                <Button asChild variant={'outline'} size={'icon'}>
                    <a href="mailto:masonsmith40@hotmail.co.uk" target="_blank">
                        <Mail size={20} className="text-black dark:text-white" />
                    </a>
                </Button>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
        </div>
    )
}

export default WelcomeCard