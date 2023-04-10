const arrToStr = (arr) => {
    if(arr.length >1)
        return arr.toString().replaceAll(',', ', ');
    return arr[0];
}

const sortCards = (sortValue, countries) => {
    if(sortValue === null) {console.log('hello'); return countries};
    let [type, isAsc] = sortValue.split('-');
    isAsc = isAsc === 'ASC';
    if(type === 'Population') {
      return countries.sort((a,b) => isAsc ? a.population - b.population : b.population - a.population);
    }
    if(type === 'Name') {
      return countries.sort((a,b) => {
        if(isAsc) {
          if (a.name.common < b.name.common) return -1;
          if (a.name.common > b.name.common) return 1;
          return 0
        }
        else{
          if (a.name.common < b.name.common) return 1;
          if (a.name.common > b.name.common) return -1;
          return 0;
        }
      })
    }
};

const filterByRegion = (regionFilter, countries) => {
    if(regionFilter!== null)
      return countries.filter(country => country.region.toLowerCase().includes(regionFilter.toLocaleLowerCase()))
    return countries;
};

const searchByName = (searchValue, countries) => {
    if(searchValue !== null && searchValue !== '')
      return countries.filter(country => {
        return country.name.common.toLowerCase().includes(searchValue.toLocaleLowerCase())
      });
    return countries;
  }

export {arrToStr, sortCards, filterByRegion, searchByName}