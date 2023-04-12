const axios = require('axios');
let BASE_URL = 'https://petstore.swagger.io/v2';

const apiWrapper={
    createPet: async function(categoryId, categoryName, nameOfThePet, photoUrls, tags, status) {
        // const petData = {
        //     id:0,
        //     category: {
        //         id: categoryId,
        //         name: categoryName
        //     },
        //     name: nameOfThePet,
        //     photoUrls: photoUrls,
        //     tags: tags,
        //     status: status
        // };

        const x={
            "id": 0,
            "category": {
                "id": 0,
                "name": "slow2 animels"
            },
            "name": "chiko123",
            "photoUrls": [
                "string "
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "jast a string"
                }
            ],
            "status": "available"
        }
     return await axios.post(`${BASE_URL}/pet`, x,{headers:{"Content-Type":"application/json","accept": "application/json"}});
    },

    getPet:async function(petId){
        const response = await axios.get(`${BASE_URL}/pet/${petId}`);
        return response
    }

}

module.exports = apiWrapper;

