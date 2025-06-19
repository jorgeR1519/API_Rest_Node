import { connect } from "mongoose"

const db_conecction =async () => {

    try {
        
        await connect (process.env.URl_DATABASE || '' )
    } catch (error) {
        console.error(error)
        throw new Error('Error al conectar a la base de datos')
        
    }

 }

export default db_conecction;