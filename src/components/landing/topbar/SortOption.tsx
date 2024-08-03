interface SortOptionProps {
    name: string,
    selectedSortOption: string,
    selectSortOption: Function,
}

export default function SortOption(props: SortOptionProps) {
    return (
        <li 
        className={`text-lg py-2 px-4 border-b border-dark dark:border-light cursor-pointer ${props.selectedSortOption === props.name ? 'bg-light_accent dark:bg-dark_accent' : ''}`}
        onClick={() => props.selectSortOption(props.name)}>
            {props.name}
        </li>
    )
}
