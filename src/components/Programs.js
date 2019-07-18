import React, {useState, useEffect} from "react";
import ProgramList from "./ProgramList";
import Filters from "./Filters";

export default function Programs() {
  const [availableFilters, setAvailableFilters] = useState({
    years: [2019, 2018, 2017],
    levels: []
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
          setPrograms(data);
          setAvailableFilters({...availableFilters, levels: data.kindsLevelFormation});
      });
    }, [filter])

    function onYearChange(e) {
      const year = e.target.value;
      setFilter({...filter, year});
    }
    function onLevelChange(e) {
      const level = e.target.value;
      setFilter({...filter, level});
    }
  
    return (
      <>
      <Filters availableFilters={availableFilters} filter={filter} onYearChange={onYearChange} onLevelChange={onLevelChange}/>
      <ProgramList list={programs.result}/>
      </>
    );
  }

  function formUrl(year, level, training) {
      //return "https://cors-anywhere.herokuapp.com/"+
       return `https://rut-miit.ru/data-service/data/reception-plan?city=1&level=${level}&training=${training}&year=${year}&context_path=&id_lang=1`;
  }