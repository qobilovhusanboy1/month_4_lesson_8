import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BranchService } from './gasStationBranch.service';
import { StationBranch } from './models/gasStationBranch.models';
import { BranchController } from './gasStationBranch.controllers';


@Module({
  imports:[SequelizeModule.forFeature([StationBranch]) ],
  providers: [BranchService],
  controllers: [BranchController]
})
export class BranchModule {}