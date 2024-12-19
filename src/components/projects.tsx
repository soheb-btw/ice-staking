import Button from "./button";
import ProjectCard from "./project-card";

const Project = [{
  name: "Orca",
  detail: "DeFi for people, not programs",
  description: "Trade, farm, and build on Solana’s most user-friendly concentrated liquidity AMM.",
  logo: "/assets/orca-logo.svg",  
}, 
{
  name: "Jupiter Aggregator",
  detail: "Built for smart traders who like money",
  description: "Jupiter offers a wide range of tokens in the Solana ecosystem.",
  logo: "/assets/jupiter-logo.svg",  
},
{
  name: "Orca",
  detail: "The bank of the future, for everyone.",
  description: "Trade, farm, and build on Solana’s most user-friendly concentrated liquidity AMM.",
  logo: "/assets/solend.svg",
}, 
{
  name: "Orca",
  detail: "The bank of the future, for everyone.",
  description: "All your assets cross-margined and a lightning fast experience.",
  logo: "/assets/drift-protocol-logo.svg",
}]

const Projects = () => {
  const project = Project;

  return (
    <div className="flex flex-col gap-y-5 py-5">
      <div className="flex justify-between items-center">
        <div className="text-[2.5rem] font-bold leading-10 bg-clip-text text-transparent bg-gradient-to-t from-[#25ABE2] via-[#0A2935] to-[#0A2935]">Top open souce <br /> projects under Ice Staking</div>
        <Button>Explore All</Button>
      </div>
      <div className="gap-10 flex flex-col sm-lg:grid grid-cols-2 gap-y-3 gap-x-3">
       {project.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects;