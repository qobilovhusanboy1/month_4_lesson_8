import { Column, DataType, Table ,Model,HasMany,ForeignKey,BelongsTo} from "sequelize-typescript";
import { FuelType } from "src/fueltype/models/fueltype.model";
import { GasStation } from "src/gasStation/models/gasStation.model";




interface GasStationAttributes {
    gasStationID: number;
    branch_name: string;
    address: string;
    location: string;
    phone: string;
}


@Table({tableName:'stationbranch'})
export class StationBranch extends Model<StationBranch,GasStationAttributes>{

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
    branch_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    address: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    location: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    phone: string;

    @ForeignKey(()=>GasStation)
    @Column({type:DataType.INTEGER, onDelete:'RESTRICT',onUpdate:'CASCADE'})
    gasStationID:number

    @BelongsTo(()=>GasStation)
    gasStation:GasStation

    @HasMany(()=>FuelType)
    gasStationBranch:FuelType;


}