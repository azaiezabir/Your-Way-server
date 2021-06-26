import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.interface';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UpdatePwDto } from './dto/updatepw.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly user: Model<User>,
    private readonly jwtService: JwtService,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.user.create(createUserDto);
  }

  findAll() {
    return this.user.find({});
  }

  async signup(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
    const emaill = createUserDto.email;
    const findlogin = await this.user.findOne({ email: emaill }).exec();

    if (findlogin) {
      return 'This email exists';
    }

    // createUserDto.password = hash;
    const createdUser = this.user.create({
      username: createUserDto.username,
      email: createUserDto.email,
      password: hash,
      phone: createUserDto.phone,
      date_of_birth: createUserDto.date_of_birth,
      gender: createUserDto.gender,
    });
    return createdUser;
  }

  async login(updateUserDto: UpdateUserDto) {
    const user = await this.user.findOne({ email: updateUserDto.email }).exec();
    if (!user) return `email don't exist`;

    const { password } = user;
    const isMatch = await bcrypt.compare(updateUserDto.password, password);
    if (isMatch) {
      // const payload = { email: user.email };

      // const token = this.jwtService.sign(payload);
      // console.log(token);
      // console.log(user);

      return user;
    } else {
      return 'incorrect password';
    }
  }

  async updatePassword(id: string, updatepwDto: UpdatePwDto) {
    const user = await this.user.findOne({ _id: id }).exec();
    const { password } = user;
    console.log(password);
    const isMatch = await bcrypt.compare(updatepwDto.password, password);
    console.log('^^^', updatepwDto.password);
    if (isMatch) {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(updatepwDto.newpassword, saltOrRounds);
      return user.updateOne({ password: hash });
    } else {
      return 'incorrect password';
    }
    // return this.user.findOne({ _id: id }).updateOne(updateUserDto);
  }

  findUser(email: string) {
    return this.user.findOne({ email });
  }
  // findOne(email: string) {
  //   return this.user.findOne({ email });
  // }

  update(id: string, updateUserDto: any) {
    return this.user.findOne({ _id: id }).updateOne(updateUserDto);
  }

  remove(id: string) {
    return this.user.deleteOne({ _id: id });
  }
}
