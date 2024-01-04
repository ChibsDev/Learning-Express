const express = require('express')
//router works like a mini application
const router = express.Router()

router.use(logger)

router.get('/' , (req,res) => {
    console.log(req.query.name)
    res.send('User List')
})

router.get('/new' , (req,res) => {
    res.render('users/new')
})

router.post("/", (req, res) => {
    const isValid = false
    if (isValid) {
      users.push({ firstName: req.body.firstName })
      //create completely new url using users array.length -1 to attain the index of the new user 
      res.redirect(`/users/${users.length - 1}`)
    } else {
      console.log("Error")
      //populate input back to the user for bettr user interface 
      res.render("users/new", { firstName: req.body.firstName })
    }
  })

router
.route('/:id')
.get((req,res) => {
    res.send(`Get user with the ID:${req.params.id} `)
})
.put((req,res) => {
    res.send(`update user with the ID:${req.params.id} `)
})
.delete((req,res) => {
    res.send(`Delete user with the ID:${req.params.id} `)
})
const users = [{name:'Kyle'}, {name:'Jake'}]
// this function is going to run anytime it finds a param that matches the name passed in.
router.param('id' , (req,res,next,id)=>{
    console.log(id);
    next();
})

// colone ':' means its a dynamic parameter (can name it anything, make sure you use the same name inside the request) make sure this is below all the static routes because express works top to bottom

function logger(req,res,next){
    console.log(req.originalUrl);
    next()
}


module.exports = router