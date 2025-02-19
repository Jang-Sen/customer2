import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { ApiConsumes, ApiOperation } from '@nestjs/swagger';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @ApiOperation({ summary: '고객 생성' })
  @ApiConsumes('application/x-www-form-urlencoded')
  async create(@Body() dto: CreateCustomerDto): Promise<Customer> {
    return await this.customerService.createCustomer(dto);
  }

  @Get('/:id')
  @ApiOperation({ summary: '고객 조회' })
  async getCustomer(@Param('id') id: string): Promise<Customer> {
    return await this.customerService.getCustomer(id);
  }
}
