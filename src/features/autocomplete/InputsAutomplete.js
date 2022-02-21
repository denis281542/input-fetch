import '../../App.css';
import { Input } from './Input';
import { fetchNames, selectAllNames, selectStatusNames } from "../names/namesSlice"; 
import {fetchCities, selectAllCities, selectStatusCities} from '../cities/citiesSlice';

export const InputsAutomplete = () => {
    return (
        <div className="card">
            <Input 
                htmlFor='city'
                label='Город'
                id='city'
                type='text'
                placeholder='Введите город'
                selectAll={selectAllCities}
                selectStatus={selectStatusCities}
                fetch={fetchCities}        
            /> 

            <Input 
                htmlFor='name'
                label='Имя'
                id='name'
                type='text'
                placeholder='Введите имя'
                selectAll={selectAllNames}
                selectStatus={selectStatusNames}
                fetch={fetchNames}        
            /> 
        </div>
    );
}