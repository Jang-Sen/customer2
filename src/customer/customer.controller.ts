import { Body, Controller, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { ApiConsumes, ApiOperation } from '@nestjs/swagger';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

const GET_CUSTOMER = 'get_customer';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @ApiOperation({ summary: '고객 생성' })
  @ApiConsumes('application/x-www-form-urlencoded')
  async create(@Body() dto: CreateCustomerDto): Promise<Customer> {
    return await this.customerService.createCustomer(dto);
  }

  // 고객 정보 넘기는 핸들러
  @MessagePattern(GET_CUSTOMER)
  async getCustomerHandler(
    @Payload() data: { customerId: string },
  ): Promise<Customer> {
    const { customerId } = data;
    return await this.customerService.getCustomer(customerId);
  }

  // @Get('/:id')
  // @ApiOperation({ summary: '고객 조회' })
  // async getCustomer(@Param('id') id: string): Promise<Customer> {
  //   return await this.customerService.getCustomer(id);
  // }
}
