"use client"

import FilterDisplay from './FilterDisplay';
import './FiltersDisplay.css';

interface FiltersDisplayProps {
    filters: string[],
    setFilters: Function,
}

export default function FiltersDisplay(props: FiltersDisplayProps) {
    return (
        <section>
            <div className={`filters-display-container`}>
                <h3 className="filters-display-heading border-dark dark:border_light">Filters</h3>
                <ul className="filters-display-list max-height">
                    {props.filters.length > 0 ? (
                        props.filters.map((filter, index) => (
                            // <li key={index} className="filters-display-item">{filter}</li>
                            <FilterDisplay key={index} name={filter} filters={props.filters} setFilters={props.setFilters} />
                        ))
                    ) : (
                        <span className="filters-display-placeholder text-gray-500">No filters applied</span>
                    )}
                </ul>
            </div>
        </section>
    )
}
