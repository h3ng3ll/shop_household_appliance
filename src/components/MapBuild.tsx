

export interface MapBuild { name: string, value: string , isActive?: boolean }

export function buildTags(values: MapBuild[] , onClick : (argument : string ) => void) {
    return values.map((value: MapBuild) => {
        return (
            <button
                style={{ display: "block", marginBottom: "5px" }}
                className={"icon_btn " +( value.isActive ? "orange" : "")}
                onClick={() => onClick(value.value)}
                id={value.value}>
                {value.name}
            </button>
        )
    })
}