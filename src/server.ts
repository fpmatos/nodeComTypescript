import { Application } from './config/application';

Application.config().then((app) => {
    let listener = app.listen(process.env.PORT || 3000, () => {
        
        console.log("\n");
        console.log("Running server at port: ", listener.address().port);
        console.log("Ambient: ", process.env.NODE_ENV || "development");
        console.log("\n");
        console.log("server is live and listening requests ...");
        console.log("\n");
    });
})
.catch((err) => {
    console.log("\n");
     console.log("error configuring application: ");
     console.log(err);
     process.exit();
});

