export function filter (arr){
    const Lang = {
        active:{},
        unActive: []
    }
    arr.map(item=>item.active?Lang.active = {...item}:Lang.unActive.push(item))
     
    return  Lang
}