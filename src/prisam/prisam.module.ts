import {Global, Module} from '@nestjs/common';
import { PrisamService } from './prisam.service';

@Global()
@Module({
  providers: [PrisamService],
  exports: [PrisamService]
})
export class PrisamModule {}
