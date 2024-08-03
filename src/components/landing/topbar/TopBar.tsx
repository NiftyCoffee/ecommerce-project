import SearchBar from "./SearchBar";
import SortBy from "./SortBy";

interface TopBarProps {
    filters: string[],
    setFilters: Function,
}

export default function TopBar(props: TopBarProps) {
    return (
        <section className="topbar-container flex justify-center items-start">
            <SearchBar filters={props.filters} setFilters={props.setFilters} />
            <SortBy />
        </section>
    )
}