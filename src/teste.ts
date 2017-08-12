import * as mongoose from 'mongoose';
let schema = mongoose.Schema;

console.log(1);

mongoose.connect("mongodb://localhost:27017/test2");

mongoose.connection.on("error", () => {
    console.log("MongoDB connection error. Please make sure MongoDB is running.");
    process.exit();
}); 

var clienteSchema = new schema({
    nome: {
        first: String,
        last: String
    },
    criadoEm: {type: Date, default: Date.now},
    Ativo: {type: Boolean, default: true}
});

var model = mongoose.model('Clientes', clienteSchema);

model.count({}, (err, count) => {
console.log("total: ", count);
});

// var cliente1 = new model({ nome: {first: "Fernando", last: "Matos"}});

// cliente1.save();