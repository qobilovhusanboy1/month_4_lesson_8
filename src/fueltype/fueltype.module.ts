import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FuelType } from './models/fueltype.model';
import { FeulTypeController } from './fueltype.controller';
import { FuelTypeService } from './fueltype.service';


@Module({
  imports:[SequelizeModule.forFeature([FuelType]) ],
  providers: [FuelTypeService],
  controllers: [FeulTypeController]
})
export class FuelTypeModule {}