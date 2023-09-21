import { Column, DataType, Table ,Model,HasMany} from "sequelize-typescript";
import { StationBranch } from "src/gasStationBranch/models/gasStationBranch.models";




interface GasStationAttributes {
    GasStationName: string; 
}


@Table({tableName:'gasgtation'})
export class GasStation extends Model<GasStation,GasStationAttributes>{

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
    GasStationName: string;


    @HasMany(()=>StationBranch)
    gasStationBranch:StationBranch;



}
