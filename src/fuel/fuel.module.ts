import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { FuelService } from "./fuel.service";
import { Fuel } from "./models/fuel.models";
import { FuelController } from "./fuel.controller";





@Module({
    imports:[SequelizeModule.forFeature([Fuel])],
    providers:[FuelService],
    controllers:[FuelController]
})
export class FuelModule {}