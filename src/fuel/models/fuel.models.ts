import { Column, DataType, Table ,Model,HasMany} from "sequelize-typescript";
import { FuelType } from "src/fueltype/models/fueltype.model";





interface FuelAttribute {
    GasStationName: string; 
}


@Table({tableName:'fuel'})
export class Fuel extends Model<Fuel,FuelAttribute>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey:true
    })
    id:number;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    name: string;


    @HasMany(()=>FuelType)
    gasStationBranch:FuelType;

}