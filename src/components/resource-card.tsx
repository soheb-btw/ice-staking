import Image from "next/image";

interface CardData {
    imageUrl: string;
    title: string;
    date: string;
}
const ResourceCard = ({ cardData }: { cardData: CardData }) => {
    return (
        <div className="w-[272px] bg-white rounded-2xl flex flex-col">
            <Image className="rounded-tl-2xl rounded-tr-2xl" src={cardData.imageUrl} width={272} height={279} alt={'resource card image'} />
            <div className="flex flex-col gap-3 p-6">
                <div className="text-[#25abe2] text-sm font-bold">{cardData.date}</div>
                <div className="text-[#092835] text-xl leading-6 font-bold overflow-hidden text-ellipsis whitespace-break-spaces line-clamp-2">{cardData.title}</div>
            </div>
        </div>
    )
}

export default ResourceCard;