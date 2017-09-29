import { FoodItem } from './../domain/types';
import { AppContext } from './../infrastructure/app-context';
import { RepositoryBase } from "../infrastructure/repositories/base";

export class foodItemRepository extends RepositoryBase<FoodItem>{
    constructor(context: AppContext){
        super(context);

        this.dbSet = this.dbModels.FoodItem;
    }

    async GetAllBy(configSearch: {
        nearby?: Number[],
        city?: string,
        uf?: string,
        food?: string,
        foodItemId?: string
    }){
        
        if(!configSearch || !configSearch.nearby)
            throw Error("parâmetro necessário");

        let establishmentsDbSet = this.dbModels.Establishment;

        return new Promise((resolve, reject) => {

            let aggregatePipeline: any[] = [];

            aggregatePipeline.push({
                $geoNear: {
                        near: { type: "Point", coordinates: configSearch.nearby },
                        distanceField: "dist.calculated",
                        spherical: true
                }
            });

            aggregatePipeline.push({
                    $lookup: {
                        from: "fooditems",
                        localField: "_id",
                        foreignField: "est",
                        as: "fooditems"         
                    }
            });         

            aggregatePipeline.push({
                    $lookup: {
                        from: "establishments",
                        localField: "_id",
                        foreignField: "_id",
                        as: "est"         
                    }
                });         

            aggregatePipeline.push({
                    $unwind: "$est"
                });    

            if(configSearch.city)
                aggregatePipeline.push({
                        $match: {"est.ct": configSearch.city}
                    });                                                                                      

            if(configSearch.uf)
                aggregatePipeline.push({
                        $match: {"est.uf": configSearch.uf   }
                    });    


            aggregatePipeline.push({
                    $unwind: "$fooditems"
                });        

            aggregatePipeline.push({
                    $project:  {
                            _id: "$fooditems._id",
                            est: 1,
                            nm: "$fooditems.nm",
                            fd: "$fooditems.fd",
                            distance: { $divide: ["$dist.calculated", 1000]}
                        }  
                });  

            aggregatePipeline.push({
                    $lookup: {
                        from: "foods",
                        localField: "fd",
                        foreignField: "_id",
                        as: "fd"         
                    }   
                });   

            aggregatePipeline.push({
                    $unwind: "$fd" 
                });   

            establishmentsDbSet.aggregate(aggregatePipeline)                    
                .exec((error, objs: any) => {
                    if(error)
                        reject(error);
                    else
                        resolve(objs)                
                }); 
        });  
    }
}