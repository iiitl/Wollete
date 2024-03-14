export default function QnA({ title, text }){
    return(
        <>
            <div className="border-l-2 border-[#0E72E8] px-4 text-subtitle-2 text-main-primary">{title}</div>
            <div className="text-[#404040] text-body-regular mt-10 mb-16">{text}</div>
        </>
    )
}