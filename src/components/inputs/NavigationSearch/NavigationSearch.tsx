import React, {useEffect, useRef, useState} from 'react';
import {ReactComponent as SearchIcon} from '../../../assets/icons/SearchIcon.svg'
import './style.css'
import useOutsideAlerter from "../../../hooks/useClickOutsideCallback";

const NavigationSearch = () => {

    const searchWrapperRef = useRef(null);
    const inputRef = useRef(null);
    const [inputQuery, setQuery] = useState("");
    const [isSearchActive, setSearchActive] = useState(false);

    useOutsideAlerter(() => toggleSearchArea(false), searchWrapperRef);

    useEffect(() => {
        if (inputQuery && inputQuery.length !== 0) {
            toggleSearchArea(true)
        } else {
            toggleSearchArea(false)
        }
    }, [inputQuery])


    const handleClickInputFocus = (ref: any) => {
        ref.current.focus();
        if (inputQuery && inputQuery.length !== 0) {
            setSearchActive(true);
        }
    }

    const handleSearchInput = (event: any) => {
        setQuery(event.target.value);
    }


    const toggleSearchArea = (isUnwrapped: boolean) => {
        setSearchActive(isUnwrapped);
    }


    return (
        <div ref={searchWrapperRef} onClick={() => handleClickInputFocus(inputRef)}
             className={`navigation-search ${isSearchActive ? 'active' : null}`}>
            <div className={'navigation-search__icon'}><SearchIcon/></div>
            <input onChange={handleSearchInput}
                   value={inputQuery} ref={inputRef} type="text"
                   placeholder={'Search...'}/>
        </div>
    );
};

export default NavigationSearch;