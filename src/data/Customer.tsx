interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    dateOfBirth: string;
    loyalty: {
        bonusCardNumber: string;
        active: boolean;
        discountRate: number;
    };
    createdAt: Date;
    updatedAt: Date;
}