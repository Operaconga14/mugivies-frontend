import { SubscriptionStatus, SubscriptionType, UserRole } from "@/app/types/enums";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class User {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@Column({ unique: true })
	email!: string;

	@Column({ unique: true, nullable: true })
	username!: string;

	@Column({ type: "text", nullable: true })
	picture!: string;

	@Column()
	password!: string;

	@Column({
		type: "enum",
		enum: UserRole,
		default: UserRole.MUSICIAN,
	})
	role!: UserRole;

	@Column({ type: "json", array: true, nullable: true })
	instruments!: any;

	@Column({ type: "text", nullable: true })
	contact!: string;

	@Column({ type: "text", nullable: true })
	facebook!: string;

	@Column({ type: "text", nullable: true })
	instagram!: string;

	@Column({ type: "text", nullable: true })
	youtube!: string;

	@Column({ type: "text", nullable: true })
	audiomack!: string;

	@Column({ type: "text", nullable: true })
	tiktok!: string;

	@Column({ type: "text", nullable: true })
	boomplay!: string;

	@Column({ type: "text", nullable: true })
	applemusic!: string;

	@Column({ type: "text", nullable: true })
	spotify!: string;

	@Column({ type: "text", nullable: true })
	genre!: string;

	@Column({ type: "text", nullable: true })
	bio!: string;

	@Column({ type: "json", array: true, nullable: true })
	collaborations!: any;

	@Column({ type: "json", array: true, nullable: true })
	awards!: any;

	@Column({ type: "text", nullable: true })
	location!: string;

	@Column({
		type: "enum",
		enum: SubscriptionType,
		default: SubscriptionType.FREE,
	})
	subscriptionType!: SubscriptionType;

	@Column({
		type: "enum",
		enum: SubscriptionStatus,
		default: SubscriptionStatus.INACTIVE,
	})
	subscriptionStatus!: SubscriptionStatus;

	@Column({ type: "timestamp", nullable: true })
	subscriptionExpiresAt!: Date;

	@Column({ type: "int", default: 10 })
	creditBalance!: number;

	@Column({ type: "text", nullable: true })
	paystackCustomerCode!: string;

	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;

	@DeleteDateColumn()
	deletedAt!: Date;
}
