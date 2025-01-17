export const generateLoyalty = (): Loyalty => {
    return {
        bonusCardNumber: Math.floor(100000 + Math.random() * 900000).toString(),
        active: true,
        discountRate: 0.5,
    };
};