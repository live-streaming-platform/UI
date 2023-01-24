import {useEffect} from "react";

const useOutsideAlerter = (clickOutsideCallback: any, ref: any) => {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                clickOutsideCallback();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [clickOutsideCallback, ref]);
}

export default useOutsideAlerter;