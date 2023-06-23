import React,{ useState }  from 'react'
import ClientZone from './ClientZone/ClientZone'
import ClientzoneRegister from './ClientZoneRegister/Clientzone-Register'
import { createContext } from 'react';


export const ClientActivePageCntxt=createContext()

 function CLientZoneRouter() {
    
  const [clientActivePage,setClientActivePage]=useState('profile')
  function updatePage(activePage){
    setClientActivePage(activePage)
  }
  return (
    <>
    <ClientActivePageCntxt.Provider value={{clientActivePage,updatePage}}>
    
        {/* <ClientzoneRegister/> */}
        <ClientZone/>

     </ClientActivePageCntxt.Provider>
    </>
  )
}
export default CLientZoneRouter;



