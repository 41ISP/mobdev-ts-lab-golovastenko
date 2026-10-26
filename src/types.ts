export type TCategory = "video" | "apps" | "mobile" | "learning" | "other"

export interface IPayment {
    id: string,
    title: string,
    amount: number,
    due: string,
    category: TCategory,
    paid: boolean,
}

export interface INewPayment extends Omit<IPayment, "id" | "paid"> {}