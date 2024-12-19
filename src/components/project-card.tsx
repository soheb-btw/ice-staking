import Image from "next/image";

interface Project {
    name: string;
    detail: string;
    description: string;
    logo: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="flex p-6 bg-white rounded-2xl flex-col justify-start items-start gap-10">
            <div className="flex flex-col justify-start items-start gap-5">
                <div className="flex gap-4">
                    <Image src={project.logo} width={52} height={52} alt="logo" />
                    <div className="flex flex-col gap-2">
                        <div className="self-stretch text-[#092835] text-xl font-bold font-['TASA Orbiter Display']">{project.name}</div>
                        <div className="self-stretch opacity-60 text-[#092835] text-base font-semibold font-['TASA Orbiter Display']">{project.detail}</div>
                    </div>
                </div>
                <div className="opacity-50 self-stretch border border-dashed border-[#0A2935]"></div>
                <div className="self-stretch text-[#092835] text-base font-medium font-jet-brains leading-[21px]">{project.description}</div>
            </div>
            <div className="flex gap-3">
                <Image src={'/assets/ellipse.svg'} width={32} height={32} alt={'globe logo'} />
                <Image src={'/assets/github.svg'} width={32} height={32} alt={'github logo'} />
            </div>
        </div>
    )
}

export default ProjectCard;