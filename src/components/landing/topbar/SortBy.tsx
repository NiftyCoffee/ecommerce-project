"use client"

import sortbyDark from '../../../../public/assets/icons/sortby-dark.svg';
import sortbyLight from '../../../../public/assets/icons/sortby-light.svg';
import Image from 'next/image';
import { useState } from 'react';
import SortOption from './SortOption';

export default function SortBy() {

    const sortOptions = ["Popularity", "Price (Ascending)", "Price (Descending)"];
    const [selectedSortOption, setSelectedSortOption] = useState("Popularity");
    const [showDropdown, setShowDropdown] = useState(false);

    function selectSortOption(option: string) {
        console.log("run")
        console.log(option)
        console.log(selectedSortOption);
        setSelectedSortOption(option);
    }

    function toggleSortOptionDropdown() {
        setShowDropdown(!showDropdown);
    }

    return (
        <div className="sortby-container w-fit mx-8">
            <h3 className="font-bold">Sort By</h3>
            <div 
            className="flex items-center justify-between w-60 mt-2 py-2 px-4 border border-solid border-dark dark:border-light rounded-md cursor-pointer"
            onClick={toggleSortOptionDropdown}>
                <span className="text-lg">{selectedSortOption}</span>
                <Image
                src={sortbyDark}
                alt="Sort Icon Dark"
                className="sortby-icon dark:hidden w-8 h-8"
                />
                <Image
                src={sortbyLight}
                alt="Sort Icon Light"
                className="sortby-icon hidden dark:block w-8 h-8"
                />
            </div>
            <ul className={`sort-option-list border-x border-dark dark:border-light rounded-md ${showDropdown ? '' : 'hidden'}`}>
                {sortOptions.map((option, index) => (
                    <SortOption key={index} name={option} selectedSortOption={selectedSortOption} selectSortOption={selectSortOption} />
                ))}
            </ul>
        </div>
    )
}
