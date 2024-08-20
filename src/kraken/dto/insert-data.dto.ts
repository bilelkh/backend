import { IsNotEmpty } from 'class-validator';

export class InsertDataDto {
    @IsNotEmpty()
    data: any[];
}
