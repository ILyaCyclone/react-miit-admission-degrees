import React from "react";

export default function ProgramList({list}) {
    return (
        <>
        {list.length > 0
            ? <>
                <h2>Programs</h2>
                {list.map((item, i) => (
                    <div key={i}>
                        <h2>{item.institute}</h2>
                        {item.specialities.map((spec, specIndex) => (
                            <div key={specIndex}>{spec.specDisplayName} ({spec.klfName})</div>
                        ))}
                    </div>
                ))}
            </>
            : <p>No programs</p> }
         </>
    )
}