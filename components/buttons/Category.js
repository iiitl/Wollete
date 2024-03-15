import { useEffect } from "react";

export default function Category(props){
    return(
        <>
            <button className={`${props.clicked == "true" ? "bg-accent-warning" : "bg-white hover:bg-slate-50"} p-4 px-5 shadow-xl text-dark-gray rounded-lg  transition-all`}>
                {props.text}
            </button>
        </>
    )
}