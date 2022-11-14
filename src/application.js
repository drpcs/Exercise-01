export const printIntegers = (startInput, endInput) => {

    const start = parseInt(startInput);
    const end = parseInt(endInput);

    let response = [];

    if(isNaN(start) && !Number.isInteger(start)){
        throw 'Invalid start parameter';
    }

    if(isNaN(end) &&!Number.isInteger(end)){
        throw 'Invalid end parameter';
    }

    if(start > end){
        throw `The Start parameter can't be higher than the end parameter`;
    }        

    for(let i = start;i <= end;i++){
        let print = i;

        if(i != 0){
            
            if((i%3) == 0){
                print = 'Visual';
            }

            if((i%5) == 0){
                if(print == 'Visual'){
                    print += ' Nuts';
                } else {
                    print = 'Nuts'
                }
            } 
        }
        response.push(print);
    }
    return response;    
}