import axios from "axios";
import {ref} from "vue"

async function dataZoo(){

    let isError = false
    let isLoading = true


    const information = ref(null)

    try{
        let response = await axios.get("http://localhost:3000/animales")
        information.value = await response.data
    }
    catch(error){
        isError = true
    }

    isLoading = false

    return{isLoading, isError, information}

}


export default {
    dataZoo
}