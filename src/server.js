import App from './app.js';

App.listen(process.env.PORT, process.env.URL, 
    () => console.log(`Server runing on http://${process.env.URL}:${process.env.PORT}`));