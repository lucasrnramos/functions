function run() {
    let workSchedule = [
       {
           "num": 1,
           "name": "Monday",
           "portugueseName": "Segunda",
           "workTime": [
               {
                   "start": "07:30",
                   "end": "17:30"
               }
           ]
       },
       {
           "num": 2,
           "name": "Tuesday",
           "portugueseName": "Terça",
           "workTime": [
               {
                   "start": "07:30",
                   "end": "17:30"
               }
           ]
       },
       {
           "num": 3,
           "name": "Wednesday",
           "portugueseName": "Quarta",
           "workTime": [
               {
                   "start": "07:30",
                   "end": "17:30"
               }
           ]
       },
       {
           "num": 4,
           "name": "Thursday",
           "portugueseName": "Quinta",
           "workTime": [
               {
                   "start": "07:30",
                   "end": "17:30"
               }
           ]
       },
       {
           "num": 5,
           "name": "Friday",
           "portugueseName": "Sexta",
           "workTime": [
               {
                   "start": "07:30",
                   "end": "17:30"
               }
           ]
       }
   ];
    return JSON.stringify(workSchedule); //Return value will be saved as "Return value variable" field name
    }