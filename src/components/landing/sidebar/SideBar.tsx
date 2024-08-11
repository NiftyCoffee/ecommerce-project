import FiltersDisplay from "./FiltersDisplay";

interface SideBarProps {
    filters: string[],
    setFilters: Function,
}

export default function SideBar(props: SideBarProps) {
    return (
        <aside className="w-64 mr-8 fixed bg-light dark:bg-dark z-10 top-28">
            <FiltersDisplay filters={props.filters} setFilters={props.setFilters} />
        </aside>
    )
}
