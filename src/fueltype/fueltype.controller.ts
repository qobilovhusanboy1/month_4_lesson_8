import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FuelType } from './models/fueltype.model';
import { FuelTypeService } from './fueltype.service';

@Controller('fueltype')
export class FeulTypeController {
    constructor(private readonly branchServices:FuelTypeService){}

    @Post('create')
    async fueltypecreate(@Body() builderDto:FuelType): Promise<FuelType>{
        return this.branchServices.fueltypescreate(builderDto)
    }
    @Get('get')
    async getAll():Promise<FuelType[]>{
        const info = await this.branchServices.getallfueltype()
        return info;
    }

    @Get('get/:id')
    async getOneFuelType(@Param("id") id:number):Promise<FuelType>{
        const getOneinfo = await this.branchServices.getOnefueltypes(id)
        return getOneinfo;
    }


    @Delete('delete/:id')
    async deleteFuelType(@Param("id") id:number):Promise<number>{
        const deleted = await this.branchServices.deleteFeultypes(id)
        return deleted;
    }

}