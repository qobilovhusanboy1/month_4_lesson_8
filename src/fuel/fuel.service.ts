import { InjectModel } from "@nestjs/sequelize";
import { Injectable, Param } from '@nestjs/common';
import { Fuel } from "./models/fuel.models";
import { FuelDto } from "./dto/create-fuel";
import { UpdateFuelDto } from "./dto/update-fuel";



@Injectable()
export class FuelService {
    constructor(@InjectModel(Fuel) private gasStationRepo:typeof Fuel){}

    async createGasStation(fuelDto:FuelDto): Promise<Fuel>{

        const is_complete_gasStation = await this.gasStationRepo.create(fuelDto)
        return is_complete_gasStation;
    }

    async getallGasStation(): Promise<Fuel[]>{
        const is_get_gasStation = await this.gasStationRepo.findAll({include:{all:true}})
        return is_get_gasStation;
    }

    async getOneGasStation(id:number): Promise<Fuel>{
        const is_getOne_gasStation = await this.gasStationRepo.findByPk(id)
        return is_getOne_gasStation;
    }

    async deleteGasStation(id:number): Promise<number>{
        const is_delete_gasStation = await this.gasStationRepo.destroy({where:{id}})
        return is_delete_gasStation;
    }

    async updateGasStation(id:number, updateFuelDto:UpdateFuelDto): Promise<Fuel>{
        const update_info = await this.gasStationRepo.update(updateFuelDto,{where:{id},returning:true})
        return update_info[1][0].dataValues;
    }

}
