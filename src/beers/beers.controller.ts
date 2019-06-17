import {Body, Controller, Delete, Get, Module, Param, Post, Put, HttpStatus, HttpException} from '@nestjs/common';
import {ApiModelProperty, ApiResponse} from "@nestjs/swagger";
import {Beer} from "./entities/beer.interface";
import {BeersService} from "./beers.service";
import {BeerDto} from "./beer.dto";



@Controller()
export class BeersController {
    constructor(private readonly beersService: BeersService) {}

    @Get('beers')
    getAllBeers () : Beer[]{
        return this.beersService.findAll();
    }

    @Get('beer/:id')
    getABeerById (@Param('id') id : number) : Beer{
        const beer = this.beersService.findById(id);
        if (beer === undefined) {
            throw new HttpException(
                `Cannot find a beer 🍺 with id ${id}`,
                HttpStatus.NOT_FOUND,
            );
        }
        return beer;
    }

    @Put('beer')
    addABeer(@Body() beer : BeerDto): void{
      this.beersService.addABeer(beer);
    }

    @Post('beer')
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    UpdateABeerById(@Body() beer : BeerDto): void{
        this.beersService.updateABeerById(beer);
    }

    @Delete('beer/:id')
    DeleteById(@Param('id') id : number): void{
        this.beersService.deleteById(id);
    }


}
