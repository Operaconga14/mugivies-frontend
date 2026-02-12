import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/user.entity";

let dataSource: DataSource | null = null;

export const AppDataSource = async () => {
	if (dataSource && dataSource.isInitialized) {
		return dataSource;
	}
	dataSource = new DataSource({
		type: "postgres",
		host: String(process.env.DB_HOST),
		port: Number(process.env.DB_PORT),
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		entities: [User],
		migrations: [],
		subscribers: [],
		logging: true,
		synchronize: true,
		ssl: {
			rejectUnauthorized: false,
		},
	});

	if (!dataSource.isInitialized) {
		await dataSource.initialize();
	}

	return dataSource;
};
