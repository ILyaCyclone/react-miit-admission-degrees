import React, {Select} from "react";

export default function Filters({availableFilters, filters}) {
    return (
        <>
            <Select value={filters.year}>
                {availableFilters.years.map(filterYear => (
                    <option key={filterYear} value={filterYear}>{filterYear}</option>
                ))}
            </Select>
         </>
    )
}