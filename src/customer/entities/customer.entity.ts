import { Base } from '../../common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Customer extends Base {
  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public phone: string;
}
