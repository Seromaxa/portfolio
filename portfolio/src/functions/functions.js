export function filter (arr){
    const Lang = {
        active:{},
        unActive: []
    }
    arr.map(item=>item.active?Lang.active = {...item}:Lang.unActive.push(item))
     
    return  Lang
}

export function age (yearMonthDay){
    let birthDay = new Date(yearMonthDay).getFullYear()
    return new Date().getFullYear() - birthDay
}

export function addClass (willBoolen,arr,nameOfClass) {
    if(!!willBoolen){
     arr.push(nameOfClass) 
    }else{
     return arr
    } 
    return arr.join(' ')
     }