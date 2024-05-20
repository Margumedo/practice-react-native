

export const FormsPage = () => {

    return (
        <>
            <h3>Formulario</h3>
            <form>
                <div style={{ display: 'flex', flexDirection: 'column' }} >
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <button type="submit" >Ingresar</button>
                </div>
            </form>
        </>
    )
}