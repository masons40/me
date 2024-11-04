
import WelcomeCard from "../components/welcome-card"
import ProfileCard from "./profile-card"
import ProjectsCard from "./projects-card"
import SkillsCard from "./skills-card"
import TravelCard from "./travel-card"

function Home() {
  return (
    <div className="mt-10 md:mt-0 w-5/6 grid gap-2 md:grid-cols-3 place-content-center md:w-4/6 mx-auto md:h-screen">
      <WelcomeCard className="relative lg:col-span-2 rounded-lg md:rounded-tl-3xl rounded-t-lg" />
      <ProfileCard className="lg:col-span-1 relative rounded-lg md:rounded-tr-3xl" />
      <ProjectsCard className="rounded-lg md:rounded-bl-3xl" />
      <TravelCard className="rounded-lg" />
      <SkillsCard className="rounded-lg md:rounded-br-3xl rounded-b-3xl md:rounded-bl-lg" />
    </div>
  )
}

export default Home
