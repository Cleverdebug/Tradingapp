"use client"
import React, { useEffect, useState } from 'react'

import './customerlevel.css'

function CustomerLevel() {
  const [treecollection, settreecollection] = useState([])
  const [Userinfo, setUserinfo] = useState({})
  const [FirstLeftRow, setFirstLeftRow] = useState([])
  const [FirstRightRow, setFirstRightRow] = useState([])
  const [LeftSecondRow, setLeftSecondRow] = useState([])
  const [LeftSecondRow1, setLeftSecondRow1] = useState([])

  const [RightSecondRow, setRightSecondRow] = useState([])
  const [RightSecondRow1, setRightSecondRow1] = useState([])

  const [Node4Collection, setNode4Collection] = useState([])
  const [Node5Collection, setNode5Collection] = useState([])
  const [Node6Collection, setNode6Collection] = useState([])
  const [Node7Collection, setNode7Collection] = useState([])

  useEffect(() => {
    Getlevel()
      const data  = localStorage.getItem('Userinfo')
      setUserinfo(JSON.parse(data))
      console.log(JSON.parse(data).RegistrationId)
  }, [])
const Getlevel = async() => {
  console.log(Userinfo,"Userinf")
  const response = await fetch("/api/GetTreeinfo", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({Parentid:JSON.parse(localStorage.getItem('Userinfo')).RegistrationId}),
}).then((res) => res.json()).then((data) => {
  let firstrow = data.rows[0]
  let firstrowCollction  = firstrow.filter((d) => d.Parentid === JSON.parse(localStorage.getItem('Userinfo')).RegistrationId)
  let LeftFirstRow = firstrow.filter((d) => d.Parentid === JSON.parse(localStorage.getItem('Userinfo')).RegistrationId).slice(0,1)
  let RightFirstRow = firstrow.filter((d) => d.Parentid === JSON.parse(localStorage.getItem('Userinfo')).RegistrationId).slice(1,2)
  setFirstLeftRow(LeftFirstRow)
  setFirstRightRow(RightFirstRow)
  let LeftSecondRows = firstrow.filter((d) => d.Parentid === LeftFirstRow.at(0).Registrationid)
  console.log(LeftSecondRow,"LeftSecondRow")
  if(LeftSecondRows !=0) {
    setLeftSecondRow(LeftSecondRows.slice(0,1))
 setLeftSecondRow1(LeftSecondRows.slice(1,2))
 
  }
 
  let RightSecondRows = firstrow.filter((d) => d.Parentid === RightFirstRow.at(0).Registrationid)
  
  if(RightSecondRows !=0) {
    setRightSecondRow(RightSecondRows.slice(0,1))
 setRightSecondRow1(RightSecondRows.slice(1,2))
 
  }
  settreecollection(data.rows[0])
})

}





  return (
    <div style={{width:"100%"}} >

<div class="container">
{treecollection.length === 1 ? (
  <>
  {treecollection.slice(0,1).map((data, index) => (
    <h1 class="level-1 rectangle" key ={index}>{data.FirstName} {data.RegistrationNumber} </h1>
     ))}
  </>
):
  <>

    <h1 class="level-1 rectangle">{JSON.parse(localStorage.getItem('Userinfo')).FirstName}   - {JSON.parse(localStorage.getItem('Userinfo')).RegistrationNumber} </h1>
 
     </>
}
    <ol class="level-2-wrapper">
      <li>
      {FirstLeftRow.length === 1 ? (
  <>
  {FirstLeftRow.map((data,index) => (
    <h1 class="level-2 rectangle" key ={index}>{data.FirstName} - {data.Registrationid} </h1>
     ))}
  </>
):
  <>

    <h1 class="level-2 rectangle">NODE-2 </h1>
 
     </>
}
        <ol class="level-3-wrapper">
          <li>
            {LeftSecondRow.length !=0 ? (
            <>
              {LeftSecondRow.map((data,index) => (
 <h3 class="level-3 rectangle" key ={index}>{data.FirstName} - {data.Registrationid}</h3>
))}
 </>
            ):(
              <h3 class="level-3 rectangle">Node 4</h3>
            )
          }
           
            <ol class="level-4-wrapper">
              <li>
                <h4 class="level-4 rectangle">Person A</h4>
              </li>
              <li>
                <h4 class="level-4 rectangle">Person B</h4>
              </li>
             
            </ol>
          </li>
          <li>
          {LeftSecondRow1.length !=0 ? (
            <>
              {LeftSecondRow1.map((data,index) => (
 <h3 class="level-3 rectangle" key ={index}>{data.FirstName} - {data.Registrationid}</h3>
))}
 </>
            ):(
              <h3 class="level-3 rectangle">Node 5</h3>
            )
          }
            <ol class="level-4-wrapper">
              <li>
                <h4 class="level-4 rectangle">Person A</h4>
              </li>
              <li>
                <h4 class="level-4 rectangle">Person B</h4>
              </li>
           
            </ol>
          </li>
        </ol>
      </li>
      <li>
        {/* <h2 class="level-2 rectangle">Node 3 </h2> */}
       {FirstRightRow.length === 1 ? (
  <>
  {FirstRightRow.map((data,index) => (
    <h1 class="level-2 rectangle" key ={index}>{data.FirstName} - {data.Registrationid} </h1>
     ))}
  </>
):
  <>

    <h1 class="level-2 rectangle"> NODE-3 </h1>
 
     </>
}
        <ol class="level-3-wrapper">
          <li>
    {RightSecondRow.length !=0 ? (
            <>
              {RightSecondRow.map((data,index) => (
 <h3 class="level-3 rectangle" key ={index}>{data.FirstName} - {data.Registrationid}</h3>
))}
 </>
            ):(
              <h3 class="level-3 rectangle">Node 6</h3>
            )
          }
            <ol class="level-4-wrapper">
              <li>
                <h4 class="level-4 rectangle">Person A</h4>
              </li>
              <li>
                <h4 class="level-4 rectangle">Person B</h4>
              </li>
            
            </ol>
          </li>
          <li>
          
    {RightSecondRow1.length !=0 ? (
            <>
              {RightSecondRow1.map((data,index) => (
 <h3 class="level-3 rectangle" key ={index}>{data.FirstName} - {data.Registrationid}</h3>
))}
 </>
            ):(
              <h3 class="level-3 rectangle">Node 7</h3>
            )
          }
            <ol class="level-4-wrapper">
              <li>
                <h4 class="level-4 rectangle">Person A</h4>
              </li>
              <li>
                <h4 class="level-4 rectangle">Person B</h4>
              </li>
              
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </div>
    </div>
  )
}

export default CustomerLevel
