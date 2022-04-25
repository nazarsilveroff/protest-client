import {useEffect, useState} from "react";

function useResizeWindow() {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResizeWindow = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return width
}

export default useResizeWindow;