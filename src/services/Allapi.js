import Category from "../pages/Category";
import { BASE_URL } from "./Baseurl";
import { commonRequest } from "./commonreq";


//add video
   export const addvideo=async(body)=>{

   return await commonRequest("POST",`${BASE_URL}/videos`,body)

   }

   //get video

     export const getVideo=async()=>{

       return await commonRequest("GET",`${BASE_URL}/videos`,"")

      }

      //delete video

      export const deleteVideo=async(id)=>{

      return await commonRequest("DELETE",`${BASE_URL}/videos/${id}`,{})

       }

       //add category

         export const addCategory=async(body)=>{
          return await commonRequest("POST",`${BASE_URL}/categories`,body)
         }
        //  get all category
       export const getallCategory=async()=>{
            return await commonRequest("GET",`${BASE_URL}/categories`,"")
        }

        // delete category
     export   const deleteCategory=async(id)=>{
            return await commonRequest("DELETE",`${BASE_URL}/categories/${id}`,{})
        }
        // get history

        export const getallhistory=async()=>{
          return await commonRequest("GET",`${BASE_URL}/watchhistory`,"")
      }

        // add history
        
        export const addhistory=async(body)=>{
          return await commonRequest("POST",`${BASE_URL}/watchhistory`,body)
         }

         //get a single video

     export const getvideo=async(id)=>{

      return await commonRequest("GET",`${BASE_URL}/videos/${id}`,"")

     }

    //  update category
    export const updateCategory =async (id,body)=>{
      return await commonRequest("PUT",`${BASE_URL}/categories/${id}`,body)
    }