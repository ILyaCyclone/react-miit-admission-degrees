import React, {useState, useEffect} from "react";
import ProgramList from "./ProgramList";
import Filters from "./Filters";

export default function Programs() {
  const [availableFilters, setAvailableFilters] = useState({
    years: [2019]
})
    const [filter, setFilter] = useState({
        year: 2019,
        level: 4,
        training: 20773
    })
    const [programs, setPrograms] = useState({
        "result": []
    });
  
    useEffect(() => {
      fetch(formUrl(filter.year, filter.level, filter.training))
      .then(response => response.json())
      .then(data => {
          console.log(data);
          setPrograms(data);
      });
    }, [])
  
    return (
      <Filters availableFilters={availableFilters} filters={filters}/>
      <ProgramList list={programs.result}/>
    );
  }

  function formUrl(year, level, training) {
      return `https://rut-miit.ru/data-service/data/reception-plan?city=1&level=${level}&training=${training}&year=${year}&context_path=&id_lang=1`;
  }