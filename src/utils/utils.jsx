function getIdRandom(){
    return Date.now();
}

function ifObjectNotEmpty(object1){
    if (Object.keys(object1).length > 0) {
        return true;
    }else{
        return false;
    }
}
export {getIdRandom,ifObjectNotEmpty}