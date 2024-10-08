"use client"

import './Landing.css';
import { useState } from "react";
import SideBar from "./sidebar/SideBar";
import TopBar from './topbar/TopBar';
import ProductCatalog from './product_catalog/ProductCatalog';

export default function Landing() {

    const [filters, setFilters] = useState<string[]>([]);

    return (
        <section className="landing-container flex justify-between items-start">
            <SideBar filters={filters} setFilters={setFilters} />
            <section className="landing-body">
                <TopBar filters={filters} setFilters={setFilters} />
                <ProductCatalog />
            </section>
        </section>
    )
}
