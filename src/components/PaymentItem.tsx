import { CATEGORY_LABELS } from "../categories"
import { dateParts, formatMoney } from "../format"
import { usePaymentsStore } from "../store"
import { IPayment } from "../types"

interface IPaymentItemProps {
    payment: IPayment
}
export default function PaymentItem({ payment }: IPaymentItemProps) {
    const { day, month } = dateParts(payment.due)

    const meta = payment.category
        ? CATEGORY_LABELS[payment.category]
        : CATEGORY_LABELS["other"]    
    // const meta = CATEGORY_LABELS[category]

    const togglePaid = usePaymentsStore((e) => e.togglePaid)
    const removePayment = usePaymentsStore((e) => e.removePayment)

    return (
        <li className={payment.paid ? "item paid" : "item"}>
            <div className="main">
                <time className="date" dateTime={payment.due}>
                    <b>{day}</b>
                    {month}
                </time>
                <div className="info">
                    <span className="name">{payment.title}</span>
                    <span className={`tag apps`}>{meta.label}</span>
                </div>
                <span className="price">{formatMoney(payment.amount)}</span>
            </div>
            <div className="bar">
                <label className="check">
                    <input
                        type="checkbox"
                        checked={payment.paid}
                        onChange={() => togglePaid(payment.id)}
                    />
                    Оплачено
                </label>
                <button
                    className="del"
                    type="button"
                    onClick={() => removePayment(payment.id)}
                >
                    Удалить
                </button>
            </div>
        </li>
    )
}
