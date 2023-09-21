import {NestFactory}  from  "@nestjs/core"
import {AppModule} from "./app.module"

async function bootstrap() {
    try {
        const app = await NestFactory.create(AppModule)
        const port = process.env.PORT || 5000
        await app.listen(port,()=>{
            console.log("Server listening on port "+ port);
        })
    } catch (error) {
        console.log(error);
    }
}

bootstrap()