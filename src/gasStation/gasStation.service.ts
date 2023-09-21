import { UpdateGasStationDto } from './dto/update-gasStation.dto';
import { GasStationDto } from './dto/create-gasStation.dto';
import { InjectModel } from "@nestjs/sequelize";
import { GasStation } from "./models/gasStation.model";
import { Injectable, Param } from '@nestjs/common';



@Injectable()
export class GasStationService {
    constructor(@InjectModel(GasStation) private gasStationRepo:typeof GasStation){}

    async createGasStation(gasStationDto:GasStationDto): Promise<GasStation>{

        const is_complete_gasStation = await this.gasStationRepo.create(gasStationDto)
        return is_complete_gasStation;
    }

    async getallGasStation(): Promise<GasStation[]>{
        const is_get_gasStation = await this.gasStationRepo.findAll({include:{all:true}})
        return is_get_gasStation;
    }

    async getOneGasStation(id:number): Promise<GasStation>{
        const is_getOne_gasStation = await this.gasStationRepo.findByPk(id)
        return is_getOne_gasStation;
    }

    async deleteGasStation(id:number): Promise<number>{
        const is_delete_gasStation = await this.gasStationRepo.destroy({where:{id}})
        return is_delete_gasStation;
    }

    async updateGasStation(id:number, updateGasStationDto:UpdateGasStationDto): Promise<GasStation>{
        const update_info = await this.gasStationRepo.update(updateGasStationDto,{where:{id},returning:true})
        return update_info[1][0].dataValues;
    }

}
