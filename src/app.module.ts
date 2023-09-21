import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from "@nestjs/common";
import { GasStationModule } from './gasStation/gasStation.module';
import { GasStation } from './gasStation/models/gasStation.model';
import { StationBranch } from './gasStationBranch/models/gasStationBranch.models';
import { BranchModule } from './gasStationBranch/gasStationBranch.module';
import { FuelModule } from './fuel/fuel.module';
import { Fuel } from './fuel/models/fuel.models';
import { FuelTypeModule } from './fueltype/fueltype.module';
import { FuelType } from './fueltype/models/fueltype.model';


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath:'.env',
            isGlobal: true
        }),
        SequelizeModule.forRoot({
            dialect:'postgres',
            host: process.env.POSTGRES_HOST , 
            port: +process.env.POSTGRES_PORT,
            username:process.env.POSTGRES_USER ,
            password:String(process.env.POSTGRES_PASSWORD),
            database:process.env.POSTGRES_DB,
            models:[GasStation,StationBranch,Fuel,FuelType],
            autoLoadModels:true,
            logging:true
        }),
        GasStationModule,BranchModule,FuelModule,FuelTypeModule
    ],
    providers: [],
    controllers: [],
    exports: [],
})

export class AppModule {}