export class UpdateOrderItamDto {
    readonly id: number;
    readonly order_id: number;
    readonly product_id: number;
    readonly product_count: number;
    readonly product_price: number;
}