import { Control, Controller, Path } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group'
import { ContactFormValues } from '@/lib/validations/contact'

interface BaseFieldProps {
	control: Control<ContactFormValues>
	name: Path<ContactFormValues>
	label: string
	placeholder?: string
}

const StyledLabel = ({ children }: { children: React.ReactNode }) => (
	<FieldLabel className='text-[10px] uppercase tracking-[0.15em] font-bold text-muted-foreground mb-1 block'>
		{children}
	</FieldLabel>
)
// Komponent dla standardowych Inputów (Imię, Email, Tel)
export const ContactInput = ({ control, name, label, ...props }: BaseFieldProps & { type?: string }) => (
	<Controller
		name={name}
		control={control}
		render={({ field, fieldState }) => (
			<Field data-invalid={fieldState.invalid} className='space-y-1 gap-1'>
				<StyledLabel>{label}</StyledLabel>
				<Input
					{...field}
					{...props}
					className='bg-background/50 border-border/60 focus-visible:ring-primary/50 h-12 rounded-xl transition-all'
					aria-invalid={fieldState.invalid}
				/>
				{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
			</Field>
		)}
	/>
)

export const ContactTextArea = ({
	control,
	name,
	label,
	maxChars,
	...props
}: BaseFieldProps & { maxChars: number }) => (
	<Controller
		name={name}
		control={control}
		render={({ field, fieldState }) => (
			<Field data-invalid={fieldState.invalid} className='space-y-1 gap-1'>
				<StyledLabel>{label}</StyledLabel>
				<InputGroup className='bg-background/50 border-border/60 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 transition-all'>
					<InputGroupTextarea
						{...field}
						{...props}
						aria-invalid={fieldState.invalid}
						className='min-h-32 resize-none border-none focus-visible:ring-0'
					/>
					<InputGroupAddon align='block-end' className='bg-transparent border-none'>
						<InputGroupText className='tabular-nums text-[10px] text-muted-foreground pr-3 pb-3'>
							{field.value?.length || 0}/{maxChars}
						</InputGroupText>
					</InputGroupAddon>
				</InputGroup>
				{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
			</Field>
		)}
	/>
)
