import React, { useEffect } from 'react'
import { useState } from 'react'
import { getallhistory } from '../services/Allapi'


 function Watchhistory() {

const [history,sethistory]=useState([])

const getwatchhistory=async()=>{
    // api call
    let response = await getallhistory()
    // console.log(response);

    sethistory(response.data)


}

console.log(history);
useEffect(() => {
  getwatchhistory()

  
}, [])

  return (
    <>
    <h1>Watchhistory</h1>

    <table className='table shadow m-3 border rounded'>
        <thead>
            <tr>
                <th> id</th>
                <th>cardName </th>
                <th>url</th>
                <th>date</th>
            </tr>

        </thead>
        <tbody>

            {history?.map((item,index)=>(

<tr>
<th>{index+1}</th>
<th>{item?.cardName}</th>
<th>{item?.url}</th>
<th>{item?.date}</th>
</tr>

            ))
            }
           
        </tbody>
    </table>
    </>
  )
}
export default Watchhistory