import {Body, Controller, Delete, Get, Module, Param, Post, Put} from '@nestjs/common';
import {ApiModelProperty, ApiResponse} from "@nestjs/swagger";
import {Beer} from "./beer.interface";
import {BeersService} from "./beers.service";



@Controller()
export class BeersController {
    constructor(private readonly beersService: BeersService) {}

    @Get('beers')
    getAllBeers () : Beer[]{
        return this.beersService.findAll();
    }

    @Get('beer/:id')
    getABeerById (@Param('id') id : number) : Beer{
        return this.beersService.findById(id);
    }

    @Put('beer')
    addABeer(@Body() beer : Beer): void{
      this.beersService.addABeer(beer);
    }

    @Post('beer')
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    UpdateABeerById(@Body() beer : Beer): void{
        this.beersService.updateABeerById(beer);
    }

    @Delete('beer/:id')
    DeleteById(@Param('id') id : number): void{
        this.beersService.deleteById(id);
    }


}
