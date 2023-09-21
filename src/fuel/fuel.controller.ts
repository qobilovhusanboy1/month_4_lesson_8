import { Body, Controller, Get, Post,Param, Delete,Put } from "@nestjs/common";
import { Fuel } from "./models/fuel.models";
import { FuelDto } from "./dto/create-fuel";
import { FuelService } from "./fuel.service";
import { UpdateFuelDto } from "./dto/update-fuel";



@Controller('fuel')
export class FuelController{
    constructor(private readonly fuelService:FuelService){}

    @Post('create')
    async createGasStation(@Body() fuelDto:FuelDto):Promise<Fuel>{
        
        const is_created = await this.fuelService.createGasStation(fuelDto)
        return is_created;
    }

    @Get('getall')
    async getAllGasStation():Promise<Fuel[]>{
        const info = await this.fuelService.getallGasStation()
        return info;
    }

    @Get('get/:id')
    async getOnegasstations(@Param('id') id:number):Promise<Fuel>{
        const one_info = await this.fuelService.getOneGasStation(id)
        return one_info;
    }

    @Delete('delete/:id')
    async deleteGasStation(@Param('id') id:number):Promise<number>{
        const delete_info = await this.fuelService.deleteGasStation(id)
        return delete_info;
    }

    @Put('update/:id')
    async updateGasStation(@Param('id') id:number, @Body() updateFuelDto:UpdateFuelDto):Promise<Fuel>{
        const update_info = await this.fuelService.updateGasStation(id,updateFuelDto)
        return update_info;
    }

}