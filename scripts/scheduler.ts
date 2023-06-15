import { ToadScheduler, SimpleIntervalJob, AsyncTask, Task } from "toad-scheduler";
import { config, runScript } from './interact';

const scheduler: ToadScheduler = new ToadScheduler();
let count : number = 0; 

const task: AsyncTask =  new AsyncTask('Increment', (): Promise<void>=>{
    console.log("Task executed" + count +" times");
    return runScript(count++%3);
    },
    (err:Error):void=>{
        console.log(err.message);
    }
);

const job: SimpleIntervalJob = new SimpleIntervalJob({minutes: 3, }, task);
scheduler.addSimpleIntervalJob(job);

setTimeout(() => {
    scheduler.stop();
    console.log('Job stopped.');
  }, 600000); // Stop the job after 10 minutes

