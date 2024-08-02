interface AestheticListItemProps {
    name: string,
    filters: string[],
    setFilters: Function,
}

export default function AestheticListItem(props: AestheticListItemProps) {

    function addOrRemoveFilter(filter: string) {
        props.setFilters((prevFilters: string[]) => {
            if (prevFilters.includes(filter)) {
                return prevFilters.filter(f => f !== filter);
            } else {
                return [...prevFilters, filter];
            }
        });
    }

    return (
        <li 
        className="p-4 border-b border-solid cursor-pointer hover:bg-light_accent dark:hover:bg-dark_accent"
        onClick={() => addOrRemoveFilter(props.name)}>
            {props.name}
        </li>
    )
}
