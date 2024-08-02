import './FilterDisplay.css';
import crossLight from '../../../../public/assets/icons/cross-light.svg';
import crossDark from '../../../../public/assets/icons/cross-dark.svg';
import Image from 'next/image';
import { ImageResponse } from 'next/server';

interface FilterDisplayProps {
    name: string,
    filters: string[],
    setFilters: Function,
}

export default function FilterDisplay(props: FilterDisplayProps) {

    function onClickCrossIcon(filter: string) {
        props.setFilters((prevFilters: string[]) => {
            return prevFilters.filter(f => f !== filter);
        });
    }
    
    return (
        <li className="filter-display">
            {props.name}
            <Image
            src={crossDark}
            alt="Cross Icon Dark"
            className="filter-cross-icon dark:hidden"
            onClick={() => onClickCrossIcon(props.name)}
            />
            <Image
            src={crossLight}
            alt="Cross Icon Light"
            className="filter-cross-icon hidden dark:block"
            onClick={() => onClickCrossIcon(props.name)}
            />
        </li>
    )
}
