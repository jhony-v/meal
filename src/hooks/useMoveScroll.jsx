import { useState } from "react"

var e = "list";

const useMoveScroll = (listElementScrollable) => {
    const listElement = listElementScrollable;
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    
    const events = {};

    return {
        events
    }
}