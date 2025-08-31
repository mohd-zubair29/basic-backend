require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const database={
  "login": "mohd-zubair29",
  "id": 195322471,
  "node_id": "U_kgDOC6RiZw",
  "avatar_url": "https://avatars.githubusercontent.com/u/195322471?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mohd-zubair29",
  "html_url": "https://github.com/mohd-zubair29",
  "followers_url": "https://api.github.com/users/mohd-zubair29/followers",
  "following_url": "https://api.github.com/users/mohd-zubair29/following{/other_user}",
  "gists_url": "https://api.github.com/users/mohd-zubair29/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mohd-zubair29/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mohd-zubair29/subscriptions",
  "organizations_url": "https://api.github.com/users/mohd-zubair29/orgs",
  "repos_url": "https://api.github.com/users/mohd-zubair29/repos",
  "events_url": "https://api.github.com/users/mohd-zubair29/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mohd-zubair29/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Mohd Zubair",
  "company": null,
  "blog": "",
  "location": "india",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 1,
  "following": 18,
  "created_at": "2025-01-16T15:17:41Z",
  "updated_at": "2025-08-02T17:59:28Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram' , (req, res)=>{    // "/ Slash Is Compulsory"
    res.send("mohammed._.zubair");
})

app.get('/mydata', (req, res)=>{
  res.json(database);
})


app.get('/Mydairy', (req, res)=>{
    res.send("<h1>Hello this Is Just A Timepass line Of Code</h1>");
})
let pen=process.env.PORT;
app.listen(pen, () => {
  console.log(`app listening at port ${pen}`)
})