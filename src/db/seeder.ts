import { userError } from './../infrastructure/user-error';
import { Logger } from './../infrastructure/logger';
import { Models } from './models';
import { Model, Document } from 'mongoose';
import { AppContext } from './../infrastructure/app-context';

let _isSeeded: boolean = false;


export let isSeeded = (): boolean => {
    return _isSeeded;
};

export let init = async (context: AppContext) => {

    if(_isSeeded) return;  

    try
    {   
        Logger.info("Iniciando seed.");

        let model = new Models(context);  

        await seedfoodTags(model.FoodTag);
        await seedfoods(model.Food);
        await seedEstablishments(model.Establishment);
        await seedFoodItems(model.FoodItem);

        _isSeeded = true;

        Logger.info("Seed concluído.");
    }
    catch(error){
        Logger.error("Erro ao efetuar a carga Seeder");
        throw error;
    }
}

let seedfoodTags = async (model: Model<Document>) => {   



    var count = await model.collection.count({});

    if(count === 0)
        return model.insertMany(
            [
            {
                "_id" : 1,
                "nm" : "tipo"
            },
            {
                "_id" : 2,
                "nm" : "bebidas",
                "tg" : 1
            },
            {
                "_id" : 3,
                "nm" : "para comer",
                "tg" : 1
            },
            {
                "_id" : 4,
                "nm" : "Alcoolicas",
                "tg" : 2
            },
            {
                "_id" : 5,
                "nm" : "Não Alcoolicas",
                "tg" : 2
            },
            {
                "_id" : 6,
                "nm" : "Refrigerantes",
                "tg" : 5
            },
            {
                "_id" : 7,
                "nm" : "Sucos",
                "tg" : 5
            },
            {
                "_id" : 8,
                "nm" : "Águas",
                "tg" : 5
            },
            {
                "_id" : 9,
                "nm" : "Cafés",
                "tg" : 5
            },
            {
                "_id" : 10,
                "nm" : "Vitaminas",
                "tg" : 5
            },
            {
                "_id" : 11,
                "nm" : "Cervejas",
                "tg" : 4
            },
            {
                "_id" : 12,
                "nm" : "Doces",
                "tg" : 3
            },
            {
                "_id" : 13,
                "nm" : "Carnes",
                "tg" : 3
            },
            {
                "_id" : 14,
                "nm" : "Aves",
                "tg" : 13
            },
            {
                "_id" : 15,
                "nm" : "Peixes",
                "tg" : 13
            },
            {
                "_id" : 16,
                "nm" : "Carnes",
                "tg" : 13
            },
            {
                "_id" : 17,
                "nm" : "Sorvetes",
                "tg" : 12
            },
            {
                "_id" : 18,
                "nm" : "Doces",
                "tg" : 12
            },
            {
                "_id" : 19,
                "nm" : "Massas",
                "tg" :13
            },
            {
                "_id" : 20,
                "nm" : "Pizzas",
                "tg" :19
            }                  
            ]
        );
}

let seedfoods = async (model: Model<Document>) => {
    var count = await model.collection.count({});

    if(count === 0)    
        return model.insertMany([
           {
                _id: "2",
                nm: "Pizza",
                tgs: [20]
           },

        ]);
}

let seedFoodItems = async (model: Model<Document>) => {
    var count = await model.collection.count({});

    if(count > 0) return;

    return model.insertMany([
        {
            nm: "Pizza de Atum",
            fd: "2",
            est: "1"
        },
        {
            nm: "Pizza de Atum",
            fd: "2",
            est: "2"
        },
        {
            nm: "Pizza de Atum",
            fd: "2",
            est: "3"
        },
        {
            nm: "Pizza de Atum",
            fd: "2",
            est: "4"
        },
        {
            nm: "Pizza de Atum",
            fd: "2",
            est: "5"
        },
        {
            nm: "Pizza de Atum",
            fd: "2",
            est: "6"
        },
        {
            nm: "Pizza de Atum",
            fd: "2",
            est: "7"
        },
        {
            nm: "Pizza de Atum",
            fd: "2",
            est: "8"
        },
        {
            nm: "Pizza de Atum",
            fd: "2",
            est: "9"
        },
        {
            nm: "Pizza de Atum",
            fd: "2",
            est: "10"
        },
        {
            nm: "Pizza de Atum",
            fd: "2",
            est: "11"
        },
        {
            nm: "Pizza de Atum",
            fd: "2",
            est: "12"
        },
        {
            nm: "Pizza de Atum",
            fd: "2",
            est: "1"
        },                                                                                                
    ]);
}

let seedEstablishments = async (model: Model<Document>) => {
    var count = await model.collection.count({});

    if(count === 0)
    {
        return model.insertMany(
            [
            {
                _id: "1",
                nm: "Matsuya",
                ct: "São Paulo",
                adr: "Rua A",
                uf: "SP",
                lc: [-23.631206, -46.696809]
            },
            {
                _id: "2",
                nm: "Estilo Gaucho",
                ct: "São Paulo",
                adr: "Rua B",
                uf: "SP",
                lc: [-23.632009, -46.693157]
            },
            {
                _id: "3",
                nm: "Vicolo Nostro",
                ct: "São Paulo",
                adr: "Rua Jataituba, Brooklin",
                uf: "SP",
                lc: [-23.623935, -46.688684]
            },
            {
                _id: "4",
                nm: "Fogo de Chão",
                ct: "São Paulo",
                adr: "Itaim",
                uf: "SP",
                lc: [-23.598187, -46.687873]
            },
            {
                _id: "5",
                nm: "Sin Senor",
                ct: "São Paulo",
                adr: "Itaim",
                uf: "SP",
                lc: [-23.584562, -46.673041]
            },
            {
                _id: "6",
                nm: "Restaurante Brigadeiro",
                ct: "São Paulo",
                adr: "Brigadeiro Luiz Antonio, Jardim paulista",
                uf: "SP",
                lc: [-23.573350, -46.656080]
            },
            {
                _id: "7",
                nm: "Casa do Espeto",
                ct: "São Paulo",
                adr: "Perdizes",
                uf: "SP",
                lc: [-23.531911, -46.685301]
            },
            {
                _id: "8",
                nm: "Boteco Santa Efigenia",
                ct: "São Paulo",
                adr: "Santa Efigenia",
                uf: "SP",
                lc: [-23.531140, -46.647795]
            },
            {
                _id: "9",
                nm: "Restaurante Coreano",
                ct: "São Paulo",
                adr: "Aclimação",
                uf: "SP",
                lc: [-23.571849, -46.630487]
            },
            {
                _id: "10",
                nm: "Costela Dourada",
                ct: "São Paulo",
                adr: "Cambuci",
                uf: "SP",
                lc: [-23.571051, -46.622377]
            },
            {
                _id: "11",
                nm: "Marzana Restaurante",
                ct: "São Paulo",
                adr: "Bairro Ipiranga",
                uf: "SP",
                lc: [-23.582777, -46.611750]
            },
            {
                _id: "12",
                nm: "Padaria Dondoc",
                ct: "São Paulo",
                adr: "Diadema",
                uf: "SP",
                lc: [-23.688899, -46.634015]
            },
            {
                _id: "13",
                nm: "Habbibs",
                ct: "São Paulo",
                adr: "Santo Amaro",
                uf: "SP",
                lc: [-23.651245, -46.708202]
            },  
            ]                                                                                                                                              
        );
    }
}