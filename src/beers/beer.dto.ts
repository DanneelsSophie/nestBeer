import {IsInt, IsNotEmpty, IsNumber, IsString, Length, Max, Min, Validate} from "class-validator";
import {ImageFinishByExtensionValidator} from "./validators/extension.validator";
import {ApiModelProperty} from "@nestjs/swagger";

export class BeerDto {
    @ApiModelProperty({ example: 1 })
    @IsNumber()
    id: number;
    @ApiModelProperty({ example: "Paix de Dieu" })
    @IsString()
    name: string;
    @ApiModelProperty({ example: "Cette bière est brassée en pleine Lune, une bière belge de caractère" })
    @IsString()
    @Length(10,80)
    description: string;
    @ApiModelProperty({ example: "image.svg" })
    @Validate(ImageFinishByExtensionValidator)
    @IsString()
    @IsNotEmpty()
    image: string;
    @ApiModelProperty({ example: 2.50 })
    @IsInt()
    @Min(0)
    @Max(100)
    price: number;
    @ApiModelProperty({ example: 10 })
    @IsInt()
    stock: number;

}
