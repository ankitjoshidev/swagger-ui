module.exports =(app)=> {
    const controllers = require('./controller')
    app.get('/api-doc/hello',controllers.getHelloMessage);
    app.get('/api-doc/fullname',controllers.getFullName);
    app.post('/api-doc/fullname',controllers.getFullNameWithBody);
}