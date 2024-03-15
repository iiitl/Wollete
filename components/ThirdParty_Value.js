export default function Value({title, content}){
    return(
        <div className="md:basis-1/2">
            <div className="border-l-2 border-[#ffae00ab] px-4 text-subtitle-2 text-light-white">{title}</div>
            <div className="px-4 text-[#F3F3F3] mt-6">{content}</div>
        </div>
    )
}