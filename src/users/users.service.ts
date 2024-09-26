import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';

@Injectable()
export class UsersService {
	private readonly users: User[] = [
		{
			username: 'john',
			password: 'changeme',
		},
		{
			username: 'maria',
			password: 'guess',
		},
	];

	async findOne(username: string): Promise<User | undefined> {
		return this.users.find((user) => user.username === username);
	}
}
