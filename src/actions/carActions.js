
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";


export const addFeature = (carFeature) => {
    
    return {type:ADD_FEATURE,payload:carFeature}
}

export const removeFeature = (carFeature) => {
    return {type:REMOVE_FEATURE, payload:carFeature}
}
