import { motion } from "framer-motion";


export default function NewsCategory({ type, title, image, date, timeRead, author, header, text }){
    if(type==title){
        return(
            <>
                <motion.div
                    initial={{ opacity: 0, x: "-100px", y: "0px" }}
                    animate={{ opacity: 1, x: "0", y: "0px" }}
                    exit={{ opacity: 1, x: "0px", y: "0px" }}
                    transition={{ duration: 0.5 }}
                >
                    <section className="flex flex-col gap-8">
                        <div className="text-main-primary border-l-2 border-[#0E72E8] px-4 text-subtitle-2">{title}</div>
                        <div className="flex flex-col gap-6 md:flex-row">
                            <img src={image}/>
                            <div className="py-1">
                                <div className="flex flex-col md:flex-row gap-10 text-body-regular text-dark-gray">
                                    <div>{date} / {timeRead}</div>
                                    <div>{author}</div>
                                </div>
                                <div className="text-subtitle-2 mt-6">{header}</div>
                                <div className="text-body-regular text-[#404040] mt-4">{text}</div>
                                <button className="text-main-primary mt-10 flex items-center gap-1">
                                    <div className="text-txt-bold">Read more</div>
                                    <div>
                                        <img src="/svg/Icons/rightArrow.svg" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </section>
                </motion.div>
            </>
        )
    }
}