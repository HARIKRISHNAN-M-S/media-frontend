

import axios from "axios";

// creaate a common function 
      export         const commonRequest=async(   method,url,body   )=>{
        // request configuration
        let reqConfig={
            method,
                 // get,post,put,delet
    
            url,
              // http:localhost;4000
            data:body,

            Headers:{
                "content type":"application/json"
            }
           
        }
        // create axios instance
       // api call

        return  await axios( reqConfig).then((response)=>{
            return response
        }).catch((err)=>{
            return err
        })

}