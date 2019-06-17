import {Get, Controller, Render, Param, Res, UseGuards} from '@nestjs/common';
import {ApiModelProperty, ApiResponse} from '@nestjs/swagger';
import {AuthGuard} from "@nestjs/passport";


class Address {
    @ApiModelProperty()
    city: string
}
class User {
    @ApiModelProperty()
    name: string
    @ApiModelProperty({type: Address})
    address: Address[]
}




@Controller()
export class AppController {
    @Get()
    @Render('index')
    root() {
        return { message: 'Hello world ! 🦄' };
    }

    @Get('static/img/:imageName')
    image(@Param('imageName') imageName, @Res() res) {
        return res.sendFile(`img/${imageName}`, { root: 'static' });
    }

   /** @Get('users')
    @UseGuards(AuthGuard())
    findAll() {
        return [];
    }**/
}
