export function isMinor(num){
    if(num < 18){
        return true;
    }else{
        return false;
    }
     
}
export function isAdult(num){
       if(num <= 59 && num >= 18){
        return true;
    }else{
        return false;
    }
}
export function isSenior(num){
       if(num == 60){
        return true;
    }else{
        return false;
    }
}