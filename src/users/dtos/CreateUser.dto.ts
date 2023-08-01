import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    mail: string;
}