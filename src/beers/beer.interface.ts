import {ApiModelProperty} from "@nestjs/swagger";
import {
    IsString, IsInt, Min, Max, IsNumber, Length, ValidatorConstraint,
    ValidationArguments, ValidatorConstraintInterface, Validate, IsNotEmpty
} from 'class-validator';


@ValidatorConstraint({ name: "ImageFinishByExtension", async: false })
export class ImageFinishByExtensionValidator implements ValidatorConstraintInterface {

    // put the function trim
    validate(image: string, args: ValidationArguments) {
        return image?image.trim().endsWith('.svg'):false;
    }

    defaultMessage(args: ValidationArguments) {
        return "Erreur: 'image' doit etre finir .svg 😨";
    }

}

export class Beer {
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
    @IsNumber()
    @Min(0)
    @Max(100)
    price: number;
    @IsInt()
    stock: Number;
}




