import db from "@/db";
import { migrate } from "drizzle-orm/node-postgres/migrator";


const main=async()=>{
try {
    await migrate (
        db,{
            migrationsFolder:'src/db/migrations'
        })
        console.log("migration completed")
} catch (error) {
    console.log(error)

}
}
main()