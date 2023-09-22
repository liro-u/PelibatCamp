import React, { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";

const OpacityAnimation = ({
    delay = 0,
    time = 1,
    opacityStart = 0,
    opacityEnd = 1,
    //children
    children,
    //style
    style,
}) => {
    const ref = useRef(null)
    const isVisible = useOnScreen(ref)

    return (
        <div 
            className="opacityAnimation"
            ref={ref} 
            style={{
                ...style,
                opacity: isVisible ? opacityEnd : opacityStart,
                transition: "all " + time + "s",
                transitionDelay: delay + "ms" 
            }}
        >
            {children}
        </div>
    )
}

export default OpacityAnimation;