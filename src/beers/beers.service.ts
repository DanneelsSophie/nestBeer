import {Injectable, Param} from '@nestjs/common';
import { Beer } from './entities/Beer.interface';
import {ApiResponse} from "@nestjs/swagger";

@Injectable()
export class BeersService {
    private beers: Beer[] = require('../../static/data/beers.json');

    findAll(): Beer[]{
        return this.beers;
    }

    findById(id : number) {
        return this.beers.find(function(beer) {
            return beer.id  == id;
        });
    }

    addABeer(beer: Beer){
        if (this.beers.filter(e => e.id === beer.id).length > 0) {
            console.log("Impossible d'ajouter");
        }
        else{
            console.log("Ajouter");
            this.beers.push(beer);
        }
    }


    updateABeerById(beer: Beer) : void
    {
        this.beers.forEach((beerItem, index) => {
            if (beerItem.id == beer.id)
                this.beers[index] = beer;

        })
    }


    deleteById(id : number){
            this.beers = this.beers.filter(e => e.id !== id)
        }



}