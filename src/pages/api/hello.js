// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

if(req.method === 'POST'){

const data = req.body;
   fetch('https://blogpage-crushcode-default-rtdb.europe-west1.firebasedatabase.app/posts.json',{
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: data
   })
}

  res.status(200).json({ name: 'John Doe' })
}


