import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly repository: Repository<Customer>,
  ) {}

  // 등록
  async createCustomer(dto: CreateCustomerDto): Promise<Customer> {
    const customer = this.repository.create(dto);

    return await this.repository.save(customer);
  }

  // 조회
  async getCustomer(id: string): Promise<Customer> {
    const customer = await this.repository.findOneBy({ id });

    if (!customer) {
      throw new NotFoundException('존재하지 않습니다.');
    }

    return customer;
  }
}
