import { Router } from 'express';

const router = Router(); 

router.get('/login', async (req, res)  => { //entra a vista de login

    if(req.session.isLogged){
        return res.redirect('/ecommerce/home/profile'); 
    };

    res.render('login');
});


router.get('/signup', async (req, res)  => { //entra a vista de signup

    if(req.session.isLogged){
        return res.redirect('/ecommerce/home/profile'); 
    };

    res.render('signup');
});


router.get('/profile', async (req, res)  => { //entra a vista de login

    const { username, email } = req.session;
    console.log(username);

    if(!req.session.isLogged){
        return res.redirect('/ecommerce/home/login'); 
    };

    res.render('profile', { username, email});
});

router.get('/logout', async (req, res)  => { //entra a vista de login

    req.session.destroy(); 

    res.redirect('/ecommerce/home/login');
});

router.get("/failurelogin", async (req, res) => { //respuesta de login con passport fallido

    res.send("Sorry :( credenciales incorrectas"); 
})

router.get("/failregister", async (req, res) => { //respuesta de registro con passport fallido

    res.send("Caramba algo salio mal con el resgitro, al parecer tu correo ya existe"); 
})

router.get("/current", async (req, res) => { //respuesta de login con passport correcta
   
    const objectsession  = req.session;
    console.log("este es req session"); 
    console.log(req.session.email);

    res.send(objectsession); 
})

export default router; 

