import { Column, DataType, Table ,Model,HasMany,ForeignKey,BelongsTo} from "sequelize-typescript";
import { Fuel } from "src/fuel/models/fuel.models";
import { StationBranch } from "src/gasStationBranch/models/gasStationBranch.models";





interface FuelTypeAttribute{
    gasStationID: number;
    branch_name: string;
    address: string;
    location: string;
    phone: string;
}


@Table({tableName:'fueltype'})
export class FuelType extends Model<FuelType,FuelTypeAttribute>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey:true
    })
    id:number;



    @Column({
        type: DataType.DECIMAL,
        allowNull: true
    })
    price: number;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    is_bor: boolean;

    @ForeignKey(()=>StationBranch)
    @Column({type:DataType.INTEGER, onDelete:'RESTRICT',onUpdate:'CASCADE'})
    branchID:number

    @BelongsTo(()=>StationBranch)
    stationBranch:StationBranch


    @ForeignKey(()=>Fuel)
    @Column({type:DataType.INTEGER, onDelete:'RESTRICT',onUpdate:'CASCADE'})
    fuelID:number

    @BelongsTo(()=>Fuel)
    fuel:Fuel

}