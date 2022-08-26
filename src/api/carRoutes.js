//read routes

export const getCarModels = (searchQuery,page,rpp,sort) => {
    return fetch(`https://api.baasic.com/v1/testZad/resources/carModelSchema?page=${page}&rpp=${rpp}&sort=${sort}${searchQuery&&'&searchQuery='+searchQuery}`,{
      method:"GET",
      headers : {
        "Accept":"application/json"
      },
    }).then(res=>res.json())
}


export const getCarMakes = () =>{
    return fetch('https://api.baasic.com/v1/testZad/resources/carMakeSchema/',{
        method : "GET",
        headers : {
            "Accept":"application/json"
        }
    }).then(res => res.json())
}

const getCarMake = (id) => {
    return fetch(`https://api.baasic.com/v1/testZad/resources/carMakeSchema/${id}`,{
        method : "GET",
        headers : {
            "Accept":"application/json"
        }
    })
    .then(res => res.json())
}

//create routes

export const createCarModel = (name,abrv,carMakeId) =>{
    return fetch('https://api.baasic.com/v1/testZad/resources/carModelSchema/',{
        method : "POST",
        headers : {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            abrv,
            carMakeId
        })
    }).then(res => res.json())
} 

export const createCarMake = (name,abrv,list) => {
    return fetch('https://api.baasic.com/v1/testZad/resources/carMakeSchema/',{
        method : "POST",
        headers : {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            abrv,
            models : list
        })
    }).then(res => res.json())
}

//update routes

export const updateCarMake = (carMakeId,item) => {
    let newList = []
    getCarMake(carMakeId).then(data => {
        newList = data.models
    })
    newList.push(item)
    return fetch(`https://api.baasic.com/v1/testZad/resources/carMakeSchema/${carMakeId}/`,{
        method : "PATCH",
        headers : {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            models : newList
        })
    }).then(res => res.json())
}

export const updateCarModel = (id,newName,newAbrv,newCarMakeId) => {
    return fetch(`https://api.baasic.com/v1/testZad/resources/carModelSchema/${id}/`,{
        method : "PATCH",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify({
            name: newName,
            abrv: newAbrv,
            carMakeId: newCarMakeId
        })
    }).then(res => {
        res.json()
    })
}

//delete rutes

export const deleteCarModel = (id) => {
    return fetch(`https://api.baasic.com/v1/testZad/resources/carModelSchema/${id}`,{
        method : "DELETE"
    })
}

export const deleteCarMake = (id) => {
    return fetch(`https://api.baasic.com/v1/testZad/resources/carMakeSchema/${id}`,{
        method : "DELETE"
    })
}