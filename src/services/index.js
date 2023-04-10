import {axios} from './axios'
import { arrToStr } from '../utils';

const getAllCountries = async() => {
    const result = await axios.get('all?fields=name,population,capital,region,flags');
    return result.data;
} 

const getCountryNameByCode = async(codes) => {
    codes = codes.toString();
    codes  = await axios.get(`alpha?codes=${codes}&fields=name`);
    codes = codes.data.map(item => item.name.common);
    return codes;
}

const getCountryData = async(countryName) => {
    let res = await axios.get(`name/${countryName}?fields=languages,capital,currencies,nativeName,population,region,subregion,tld,name,borders,flags`);
    res = res.data[0];
    const result = {
        flag: res.flags,
        detail: [
            [
                ["Native Name", Object.values(res.name.nativeName)[0].common],
                ["Population", res.population.toLocaleString().replaceAll(',', ', ')],
                ["Region", res.region],
                ["Sub Region", res.subregion],
                ["Capital", arrToStr(res.capital)],
            ],
            [
                ["Top Level Domain", arrToStr(res.tld)],
                ["Currencies", Object.values(res.currencies)[0].name],
                ["Languages", arrToStr(Object.values(res.languages))],
            ]
        ],
        borders: res.borders.length > 0 ? await getCountryNameByCode(res.borders) : []
    }

    return result;
}

export {getAllCountries, getCountryData};