// MUI Imports
"use client"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'



const Award = () => {
  const [Userinfo, setUserinfo] = useState({})


  useEffect(() => {
      const data  = localStorage.getItem('Userinfo')
      setUserinfo(JSON.parse(data))
  }, [])
  
  return (
    <Card>
      <CardContent className='flex flex-col gap-2 relative items-start'>
        <div>
          <Typography variant='h5'>Welcome 
          {} {Userinfo.FirstName} 🎉</Typography>
          {/* <Typography>Best seller of the month</Typography>  */}
        </div>
        {/* <div>
          <Typography variant='h4' color='primary'>
            $42.8k
          </Typography>
          <Typography>78% of target 🚀</Typography> 
        </div> */}
        <Button href='/CustomerLevel' size='small' variant='contained'>
          View Tree
        </Button>
        {/* <img
          src='/images/pages/trophy.png'
          alt='trophy image'
          height={102}
          className='absolute inline-end-7 bottom-6'
        /> */}
      </CardContent>
    </Card>
  )
}

export default Award
