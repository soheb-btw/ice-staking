import Button from "./button";
import ResourceCard from "./resource-card";

const RESOURCE = [{
    imageUrl: '/assets/resources-1.png',
    title: 'Why is everyone obsessing over Solana?',
    date: '04 NOVEMBER 2024'
},
{
    imageUrl: '/assets/resources-2.png',
    title: 'Should employers use psychometric tests in recruitment?',
    date: '11 AUGUST 2024'
},
{
    imageUrl: '/assets/resources-3.png',
    title: 'Why is everyone obsessing over Solana?',
    date: '04 NOVEMBER 2024'
},
{
    imageUrl: '/assets/resources-4.png',
    title: 'A comprehensive guide at understanding how we fund events and how to properly utilise the funds.',
    date: '05 MAY 2024',
}
]

const Resources = () => {
    const resource = RESOURCE;

    return (
        <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-10 sm-lg:flex-row justify-between items-center">
                <div className="flex flex-col gap-5 align-center justify-center">
                    <div className="text-[2.5rem] font-bold leading-10 bg-clip-text text-transparent bg-gradient-to-t from-[#25ABE2] via-[#0a2935] to-[#0A2935]">Browse through<br />the latest resources</div>
                    <div className="opacity-60 text-[#0A2935] font-medium leading-5 font-jet-brains">The thoughts, ideas and advice you need to get started with Ice Staking</div>
                    <div>
                        <Button>Read More</Button>
                    </div>
                </div>
                <ResourceCard cardData={resource[0]} />
            </div>
            <div className="flex flex-col w-full sm-lg:flex-row justify-between items-center gap-3">
                {resource.slice(1, 4).map((resource, index) => (
                    <ResourceCard key={index} cardData={resource} />
                ))}
            </div>
        </div>
    )
}

export default Resources;