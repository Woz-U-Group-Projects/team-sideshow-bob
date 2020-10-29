class Router {

  constructor(app, db) {
      this.register(app, db);
      this.login(app, db);
      this.logout(app, db);
      this.isLoggedIn(app, db);
      this.isRegistered(app, db);
  }
  
  register(app, db) {
        app.post('/register', (req, res) => {

            let firstName = req.body.firstName;
            let lastName = req.body.lastName;
            let email = req.body.email;
            let username = req.body.username;
            let password = req.body.password;

            firstName = firstName.toLowerCase();
            lastName = lastName.toLowerCase();
            username = username.toLowerCase();

            if(firstName.lenght > 20 || lastName.lenght > 20 || 
                email.lenght > 100 || username.lenght > 20 || 
                password.lenght > 20) {
                    res.json({
                        success: false,
                        msg: 'An error has occurred, please try again'
                    })
                    return;
                }
                let cols =[username];
                db.query('SELECT * FROM registerform = ? LIMIT 1', cols, (err, data, fields) => {

                    if(err) {
                        res.json({
                            success: false, 
                            msg: 'An error has occurred, please try again'
                        })
                        return;
                    }
                });
        })
  }

  login(app, db) {
        app.post('/login', (req, res) => {
            
            let username = req.body.username;
            let password = req.body.password;

            username = username.toLowerCase();

            if (username.length > 20 || password.lenght > 20) {
                res.json({
                    success: false,
                    msg: 'An error has occurred, please try again'
                })
                return;
            }

            let cols = [username];
            db.query('SELECT * FROM user WHERE username = ? LIMIT 1', cols, (err, data, fields) => {

                if(err) {
                    res.json({
                        success: false,
                        msg: 'An error has occured, please try again'
                    })
                    return;
                }
        
        });
  } 

);

};




  logout(app, db) {

    app.post('/logout', (req, res) => {
        
        if(req.session.userID) {

            req.session.destroy();
            res.json({
                success: true
            })

            return true;
        } else {

            res.json({
                success: false
            })

            return false;
        }
    });
  }

  isLoggedIn(app, db) {
    
    app.post('/isLoggedIn', (req, res) => {

        if (req.session.userID) {

            let cols = [req.session.userID];
            db.query('SELECT * FROM user WHERE id = ? LIMIT 1', (err, data, fields) => {

                if(data && data.length === 1) {

                    res.json({
                        success: true,
                        username: data[0].username
                    })

                    return true;
                }else {
                    res.json({
                        success: false
                    })
                }
            });
        }

        else {
            res.json({
                success: false
            })
        }
    });
  }

  isRegistered(app, db) {

      app.post('/isRegistered', (req, res) => {

          if (req.session.userID) {

              let cols = [req.session.userID];
              db.query('SELECT * FROM registerform WHERE id = ? LIMIT 1', (err, data, fields) => {

                  if (data && data.length === 1) {

                      res.json({
                          success: true,
                          username: data[0].username
                      })

                      return true;
                  } else {
                      res.json({
                          success: false
                      })
                  }
              });
          }

          else {
              res.json({
                  success: false
              })
          }
      });
  }


}
module.exports = Router;