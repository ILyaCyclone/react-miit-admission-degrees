import React from "react";

export default function Filters({availableFilters, filter, onYearChange, onLevelChange}) {
    return (
        <>
            <select value={filter.year} onChange={onYearChange}>
                {availableFilters.years.map(year => 
                    (<option key={year} value={year}>{year}</option>)
                    )}
            </select>
            <select value={filter.level} onChange={onLevelChange}>
            {availableFilters.levels.map(level => 
                    (<option key={level.value} value={level.value}>{level.display}</option>)
                    )}
            </select>
         </>
    )
}