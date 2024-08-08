"use client"

import './SearchBar.css';
import dropdownLight from '../../../../public/assets/icons/dropdown-light.svg';
import dropdownDark from '../../../../public/assets/icons/dropdown-dark.svg';
import Image from 'next/image';
import { useState } from 'react';
import AestheticListItem from './AestheticListItem';

interface SearchBarProps {
    filters: string[],
    setFilters: Function,
}

export default function SearchBar(props: SearchBarProps) {

    /* Dropdown Logic */

    const [dropdownToggled, setDropdownToggled] = useState(false);

    function toggleDropdown() {
        if (dropdownToggled) {
            document.getElementById("aesthetics-list")?.classList.add("hidden");
            setDropdownToggled(false);
        } else {
            document.getElementById("aesthetics-list")?.classList.remove("hidden");
            setDropdownToggled(true);
        }
    }

    return (
        <div className="search-container">
            <div className="aesthetic-filter">
                <span>
                    Choose your aesthetics
                    <Image
                        src={dropdownDark}
                        alt="Dropdown Light Icon"
                        className="dropdown-icon dark:hidden cursor-pointer"
                        onClick={toggleDropdown}
                    />
                    <Image
                        src={dropdownLight}
                        alt="Dropdown Light Icon"
                        className="dropdown-icon hidden dark:block cursor-pointer"
                        onClick={toggleDropdown}
                    />
                </span>
                <ul id="aesthetics-list" className="aesthetics-list bg-light dark:bg-dark z-10 absolute hidden">
                    <AestheticListItem name="Coquette" filters={props.filters} setFilters={props.setFilters} />
                    <AestheticListItem name="Y2K" filters={props.filters} setFilters={props.setFilters} />
                    <AestheticListItem name="Old Money" filters={props.filters} setFilters={props.setFilters} />
                    <AestheticListItem name="Cottagecore" filters={props.filters} setFilters={props.setFilters} />
                    <AestheticListItem name="Grunge" filters={props.filters} setFilters={props.setFilters} />
                </ul>
            </div>
            <span className="search-divider bg-gray-400"></span>
            <div className="search-box">
                Search
            </div>
        </div>
    )
}
