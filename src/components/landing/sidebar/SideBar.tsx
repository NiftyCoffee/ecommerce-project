import FiltersDisplay from "./FiltersDisplay";

interface SideBarProps {
    filters: string[],
    setFilters: Function,
}

export default function SideBar(props: SideBarProps) {
    return (
        <aside className="w-1/5 mr-8">
            <FiltersDisplay filters={props.filters} setFilters={props.setFilters} />
        </aside>
    )
}
