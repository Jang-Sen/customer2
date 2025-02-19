import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '오장원', description: '회원 이름' })
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'dh789521@gmail.com', description: '회원 이메일' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '010-9511-0662', description: '회원 연락처' })
  phone: string;
}
