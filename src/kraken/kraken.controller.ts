import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { KrakenService } from './kraken.service';
import { InsertDataDto } from './dto/insert-data.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('kraken')
export class KrakenController {
  constructor(private readonly krakenService: KrakenService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createKrakenDto: InsertDataDto) {
    return this.krakenService.create(createKrakenDto);
  }

}
