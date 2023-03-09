// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

if(req.method === 'POST'){
const URL = 'https://blogpage-crushcode-default-rtdb.europe-west1.firebasedatabase.app/posts'
const data = req.body;
   fetch(URL+'.json',{
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: data
   })
}
if(req.method === 'PUT'){
  const data = req.body;
  console.log(req);
  fetch('https://blogpage-crushcode-default-rtdb.europe-west1.firebasedatabase.app/posts/',
  {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
  },
  body: data
  }
  )
}
  res.status(200).json({ name: 'John Doe' })
}


