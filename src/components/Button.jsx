import React from "react";

export function Button(props) {

    function checkStyle() {
        if (props.styleType === 'submit')
        return 'border-2 border-black font-medium min-w-[100px] py-1 hover:bg-black hover:text-white transition-all duration-300'
        
        if (props.styleType === 'delete')
        return 'border-2 border-red-500 font-medium px-[7px] rounded-full hover:bg-red-500 hover:text-white'
    }

    return(
        <button className={checkStyle()} onClick={props.onClick}>{ props.children }</button>
    )
}

