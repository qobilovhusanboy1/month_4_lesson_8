import { Injectable, Delete } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FuelType } from './models/fueltype.model';
import { FueltypeDto } from './dto/craete-fueltype';




@Injectable()
export class FuelTypeService {
    constructor(@InjectModel(FuelType) private companyRepo:typeof FuelType){}

    async fueltypescreate(fueltypeDto:FueltypeDto) :Promise<FuelType>{
        const company = await this.companyRepo.create(fueltypeDto);
        return company;
    }

    async getallfueltype():Promise<FuelType[]>{
        const getall = await this.companyRepo.findAll({include:{all:true}});
        return getall;
    }

    async getOnefueltypes(id:number):Promise<FuelType>{
        const getOneinfo = await this.companyRepo.findByPk(id);
        
        return getOneinfo;
    }
    async deleteFeultypes(id:number):Promise<number>{
        const info = await this.companyRepo.destroy({where:{id:id}})
        return info;
    }
}

