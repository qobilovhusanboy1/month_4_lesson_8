import { UpdateGasStationDto } from './dto/update-gasStation.dto';
import { GasStation } from './models/gasStation.model';
import { GasStationDto } from './dto/create-gasStation.dto';
import { GasStationService } from './gasStation.service';
import { Body, Controller, Get, Post,Param, Delete,Put } from "@nestjs/common";



@Controller('gasStation')
export class GasStationController{
    constructor(private readonly gasStationService:GasStationService){}

    @Post('create')
    async createGasStation(@Body() gasStationDto:GasStationDto):Promise<GasStation>{
        
        const is_created = await this.gasStationService.createGasStation(gasStationDto)
        return is_created;
    }

    @Get('getall')
    async getAllGasStation():Promise<GasStation[]>{
        const info = await this.gasStationService.getallGasStation()
        return info;
    }

    @Get('get/:id')
    async getOnegasstations(@Param('id') id:number):Promise<GasStation>{
        const one_info = await this.gasStationService.getOneGasStation(id)
        return one_info;
    }

    @Delete('delete/:id')
    async deleteGasStation(@Param('id') id:number):Promise<number>{
        const delete_info = await this.gasStationService.deleteGasStation(id)
        return delete_info;
    }

    @Put('update/:id')
    async updateGasStation(@Param('id') id:number, @Body() updateGasStationDto:UpdateGasStationDto):Promise<GasStation>{
        const update_info = await this.gasStationService.updateGasStation(id,updateGasStationDto)
        return update_info;
    }

}