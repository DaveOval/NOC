import { CheckServive } from "../domain/use-cases/checks/check-service";
import { CheckServivemultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDataSource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import {  EmailService } from './email/email.service';

const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);
const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource()
);
const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDataSource()
);

const emailService = new EmailService(  );

export class Server {
    public static start() {
        console.log("Server started...");

        /* new SendEmailLogs(
            emailService,
            fileSystemlogRepository
        ).execute(
            ["dave_u@outlook.com"]
        )
         */
        /* emailService.sendEmailWithFileSystemLogs(
            ["dave_u@outlook.com"]
        ); */

        // CronService.createJob(
        //    '*/5 * * * * *',
        //    () => {
        //        const url = "https://google.com";

        //        new CheckServivemultiple(
        //            [fsLogRepository , postgresLogRepository , mongoLogRepository],
        //            () => console.log( `${ url } is ok` ),
        //            ( error ) => console.log( error ),
        //        ).execute(url);
        //    }
        // );

    }
}