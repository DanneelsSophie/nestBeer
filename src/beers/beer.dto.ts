import {IsInt, IsNotEmpty, IsNumber, IsString, Length, Max, Min, Validate} from "class-validator";
import {ImageFinishByExtensionValidator} from "./validators/extension.validator";

export class BeerDto {
    @IsNumber()
    id: number;
    @IsString()
    name: string;
    @IsString()
    @Length(10,80)
    description: string;
    @Validate(ImageFinishByExtensionValidator)
    @IsString()
    @IsNotEmpty()
    image: string;
    @IsInt()
    @Min(0)
    @Max(100)
    price: number;
    @IsInt()
    stock: number;

}
