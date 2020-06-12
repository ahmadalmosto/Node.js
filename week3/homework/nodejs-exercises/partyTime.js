const fetch = require('node-fetch');
const url ='https://reservation100-sandbox.mxapps.io/api/reservations'

const member={
  name:'A.Al-Mosto',
  number : 2
}

async function makeReservation(member){
  try{
    const response = await fetch(url,{
      method : 'post',
      body: JSON.stringify(member),
      Headers: {'Content-Type':'application/json'}
    });
    console.log(response)
  }catch(err){
    console.log(err)
  }
}

makeReservation(member);