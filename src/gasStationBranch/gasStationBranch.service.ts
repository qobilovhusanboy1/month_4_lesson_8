import { Injectable, Delete } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StationBranch } from './models/gasStationBranch.models';
import { StationBranchDto } from './dto/create-gasStationBranch';



@Injectable()
export class BranchService {
    constructor(@InjectModel(StationBranch) private companyRepo:typeof StationBranch){}

    async Branchcreate(builderDto:StationBranchDto) :Promise<StationBranch>{
        const company = await this.companyRepo.create(builderDto);
        return company;
    }

    async getallBranch():Promise<StationBranch[]>{
        const getall = await this.companyRepo.findAll({include:{all:true}});
        return getall;
    }

    async getOneBranch(id:number):Promise<StationBranch>{
        const getOneinfo = await this.companyRepo.findByPk(id);
        
        return getOneinfo;
    }
    async deleteBranch(id:number):Promise<number>{
        const info = await this.companyRepo.destroy({where:{id:id}})
        return info;
    }
}



