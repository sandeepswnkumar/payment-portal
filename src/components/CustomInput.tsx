import { Input } from "@/components/ui/input"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Control, FieldValues, Path } from 'react-hook-form'

interface CustomInputType<T extends FieldValues> {
    label: string;
    type: string;
    form: Control<T>;
    name: Path<T>;
    placeholder: string;
}

const CustomInput = <T extends FieldValues>({ form, label, name, type = "text", placeholder }: CustomInputType<T>) => {
    return (
        <FormField
            control={form}
            name={name}
            render={({ field }) => (
                <FormItem className='w-full mt-2'>
                    <FormLabel className="text-gray-700">{label}</FormLabel>
                    <FormControl className='mt-1'>
                        <Input
                            type={type}
                            placeholder={placeholder}
                            className='rounded-3xl focus-visible:ring-orange-500 focus-visible:border-0'
                            {...field}
                        />
                    </FormControl>
                    <FormMessage className='mt-1' />
                </FormItem>
            )}
        />
    )
}

export default CustomInput