import { PrismaClient, SeverityLevel } from "@prisma/client";
import { LogDatasource } from "../../domain/datasources/log-datasource";
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';


const prismaCliente = new PrismaClient();

const severityEnum = {
    high: SeverityLevel.HIGH,
    medium: SeverityLevel.MEDIUM,
    low: SeverityLevel.LOW,
}

export class PostgresLogDataSource implements LogDatasource {

    async saveLog(log: LogEntity): Promise<void> {

        const level = severityEnum[log.level];
        console.log("creando")
        const newLog = await prismaCliente.logModel.create({
            data: {
                ...log,
                level: level,
            }
        });

        console.log("Postgres saved")
    }

    async getLogs( severityLevel: LogSeverityLevel ): Promise<LogEntity[]> {
        const level = severityEnum[severityLevel];

        const dbLogs = await prismaCliente.logModel.findMany({
            where: { level }
        });

        return dbLogs.map( dblog => LogEntity.fromObject(dblog)) ;
    }

}