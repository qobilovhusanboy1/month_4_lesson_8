import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { GasStation } from "./models/gasStation.model";
import { GasStationService } from "./gasStation.service";
import { GasStationController } from "./gasStation.controller";





@Module({
    imports:[SequelizeModule.forFeature([GasStation])],
    providers:[GasStationService],
    controllers:[GasStationController]
})
export class GasStationModule {}