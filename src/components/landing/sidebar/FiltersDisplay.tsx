"use client"

import FilterDisplay from './FilterDisplay';
import './FiltersDisplay.css';

interface FiltersDisplayProps {
    filters: string[],
    setFilters: Function,
}

export default function FiltersDisplay(props: FiltersDisplayProps) {
    return (
        <div>
            <div className={`filters-display-container`}>
                <h3 className="filters-display-heading border-dark dark:border_light">Filters</h3>
                <ul className="filters-display-list">
                    {props.filters.length > 0 ? (
                        props.filters.map((filter, index) => (
                            // <li key={index} className="filters-display-item">{filter}</li>
                            <FilterDisplay key={index} name={filter} filters={props.filters} setFilters={props.setFilters} />
                        ))
                    ) : (
                        <span className="filters-display-placeholder text-light_secondary dark:text-dark_secondary">No filters applied</span>
                    )}
                </ul>
            </div>
        </div>
    )
}
