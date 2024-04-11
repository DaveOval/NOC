import { CheckServive } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";

const fileSystemlogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);


export class Server {
    public static start() {
        console.log("Server started...");

        CronService.createJob(
            "*/5 * * * * *",
            () => {
                const url = "https://google.com"
                new CheckServive(
                    fileSystemlogRepository,
                    () => console.log( `${ url } is ok` ),
                    ( error ) => console.log( error ),
                ).execute(url);
            }
        );

    }
}