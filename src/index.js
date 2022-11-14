import { printIntegers} from './application';

const start = process.argv[2];
const end = process.argv[3];

const response = printIntegers(start,end);

for(const item of response){
    console.log(item);
}