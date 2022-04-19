import {readFileSync} from 'fs';
export function data_makanan(parameter){
    const data = readFileSync ('./data/makanan.json', 'utf-8');

    let hasil = '';
    if (parameter == 'buah') {
        hasil = JSON.parse(data).buah;
    }
    else if (parameter == 'sayuran') {
        hasil = JSON.parse(data).sayuran;
    }
    return hasil;
}