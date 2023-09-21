import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StationBranch } from './models/gasStationBranch.models';
import { BranchService } from './gasStationBranch.service';

@Controller('branch')
export class BranchController {
    constructor(private readonly branchServices:BranchService){}

    @Post('create')
    async builderss(@Body() builderDto:StationBranch): Promise<StationBranch>{
        return this.branchServices.Branchcreate(builderDto)
    }
    @Get('get')
    async getAll():Promise<StationBranch[]>{
        const info = await this.branchServices.getallBranch()
        return info;
    }

    @Get('get/:id')
    async getOneBranch(@Param("id") id:number):Promise<StationBranch>{
        const getOneinfo = await this.branchServices.getOneBranch(id)
        return getOneinfo;
    }


    @Delete('delete/:id')
    async deleteBranch(@Param("id") id:number):Promise<number>{
        const deleted = await this.branchServices.deleteBranch(id)
        return deleted;
    }

}
