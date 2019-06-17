import {ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface} from "class-validator";

@ValidatorConstraint({ name: "ImageFinishByExtension", async: false })
export class ImageFinishByExtensionValidator implements ValidatorConstraintInterface {

    validate(image: string, args: ValidationArguments) {
        return image?image.trim().endsWith('.svg'):false;
    }

    defaultMessage(args: ValidationArguments) {
        return "Erreur: 'image' doit etre finir .svg 😨";
    }

}