PiInTheClouds 
AndrewApp.py and AndrewAp.sh are for sending a notification from the Raspberry Pi to the Cloud

                    console.log('Got a message, start sending text ...');
                    console.log(eventData.body);
                    var obj = eventData.body;
                    var sendMsg = 'You got a message from ' + obj.deviceId + ' , at ' + obj.Timestamp + '. The button has been clicked, the status of your LED is: '+ obj.led;
                    console.log(sendMsg);
                    var exec = require('child_process').exec;
                    var result = '';
                    var child = exec('python sendMail.py "'+ sendMsg +'"');
                    child.stdout.on('data',function(data){
                      result += data;
                    });

                    child.on('close',function(){
                      console.log('text sent');
                      console.log(result);
                    });