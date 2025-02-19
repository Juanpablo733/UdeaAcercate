import { Dispatch, SetStateAction } from "react";

interface DatePickerProps {
    type: 'date' | 'datetime-local'
    date: string;
    setDate: Dispatch<SetStateAction<string>>;
}

export function DatePicker({type, date, setDate }: DatePickerProps) {
    return (
        <input
            className='w-full text-center text-[#1F1F3B] text-lg font-medium border-b-2 border-b-[#5F5F5F] focus:outline-none focus:border-b-[#1F1F3B]'
            type={type}
            name='date'
            placeholder='Fecha'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
        />
    )
}