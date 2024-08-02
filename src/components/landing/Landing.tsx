"use client"

import './Landing.css';
import SearchBar from "./searchbar/SearchBar";
import { useState } from "react";
import SideBar from "./sidebar/SideBar";

export default function Landing() {

    const [filters, setFilters] = useState<string[]>([]);

    return (
        <main className="landing-container flex justify-even items-start">
            <SideBar filters={filters} setFilters={setFilters} />
            <SearchBar filters={filters} setFilters={setFilters} />
        </main>
    )
}
