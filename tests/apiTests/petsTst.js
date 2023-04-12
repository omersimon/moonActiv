const assert = require('assert');
const apiWrapper = require('../tools/apiTools/apiCalls');







describe('Petstore API', function () {
    let petId = ''
    let response
    describe('post pet', function () {
        it('should return 200 when new pet created ', async function () {
            response = await apiWrapper.createPet(0,"slow2 animels","chiko",["string "],[{id:0,name:"jast a string"}],"available");
            console.log("koko jambo", response.data.id)
            petId = response.data.id;
            assert.strictEqual(response.status, 200),"the status code is not equal";
        })
        it('should return a pet when given a valid ID', async function () {
            console.log("prtId:   ",petId);
            const response =await apiWrapper.getPet(petId);
            assert.strictEqual(response.status, 200);
            assert.strictEqual(response.data.id, petId);
        });
//9223372036854773000
//9223372036854773000
    })

    // describe('GET /pet/{petId}', function () {
    //     it('should return a pet when given a valid ID', async function () {
    //         console.log("prtId:   ",petId);
    //         const response =await apiWrapper.getPet(petId);
    //         assert.strictEqual(response.status, 200);
    //         assert.strictEqual(response.data.id, petId);
    //     });
        //
        // it('should return a 404 error when given an invalid ID', async function () {
        //     try {
        //         await axios.get(`${BASE_URL}/pet/0`);
        //         assert.fail('Expected request to fail');
        //     } catch (error) {
        //         assert.strictEqual(error.response.status, 404);
        //     }
        // });



});
