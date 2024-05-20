import { useForm } from "react-hook-form"

type FormInputs = {
    email: string;
    password: string;
}

export const FormsPage = () => {

    const { register } = useForm<FormInputs>({
        defaultValues: {
            email: 'maicolino@google.com',
            password: 'test1234'
        }
    });

    return (
        <>
            <h3>Formulario</h3>
            <form>
                <div style={{ display: 'flex', flexDirection: 'column' }} >
                    <input type="text" placeholder="Email" {...register('email')} />
                    <input type="text" placeholder="Password"   {...register('password')} />
                    <button type="submit" >Ingresar</button>
                </div>
            </form>
        </>
    )
}