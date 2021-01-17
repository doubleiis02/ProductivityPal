# ProductivityPal

## Inspiration
It is easy to lose motivation as a result of being stuck in our homes for the majority of the day. We decided to develop Productivity Pal to combat this issue and streamline our lives!
## What it does
Productivity Pal is an ecosystem consisting of an alarm clock, LED to do list, IR laptop distance sensing, and user triangulation. It aims to help you better manage your day to day activities by allowing you to schedule tasks through the app and obtain alerts when the time comes. It also strives to eliminate bad habits by warning the user that they are too close to the laptop in order to reduce eye strain. The heatmap provides incentives for the user to move around and be active in order to fill up all edges of the map.

## How we built it
On the hardware side of things, we utilized 3 ultrasonic sensors, assorted LEDs, an arduino, piezo buzzer, NPN transistor, IR emitter/receiver, photoresistor,  and battery/voltage regulator. We utilized Arduino IDE for all of our hardware programming. On the software side, we used react-native for building the user interface/app as well as Firebase for the database for the storage of user data.

## Challenges we ran into
Our esp 32 was not functional, which resulted in us being unable to link our hardware and software, since it was the only module we had that had wifi capabilities. Furthermore, when we planned out the triangulation/user tracking, we didn't realize that ultrasonic sensors struggle to detect cloth because the sound waves get absorbed. This made it very difficult to perform the tracking. When creating the app, a lot of the dependencies and SDKs that were available on the web for react-native that we wanted to use were only accessible via bare-workflows without using Expo. With our app developer only having experience with javascript through React.js, working directly with the native libraries wasn't an option and we had to learn how to reharness the web version of some SDKs and do app development manually. For instance, the sole react-native heat map creation dependency that was compatible with expo was vastly outdated, and all the functionality of the heat map that we wanted was not available. The dependency we did use essentially displayed a react dependency onto react

## Accomplishments that we're proud of
Although we were unable to merge hardware and software, we are proud of the work we made on both ends in only 36 hours. Furthermore, even though our user triangulation was crippled by the sensor capabilities, we still obtained some good data that created a cool heatmap! Having very little experience with React-Native and Firebase prior to the hackathon, I'm glad that as the App's full stack developer that it was able to get finished in time!
## What we learned
Collectively, we not only learned about hardware components such as NPN transistors, but also software programming with react-native as a frontend framework and backend as a service through firebase. As a team, Jason did the creation of hardware and Arduino sketches while Matthew created the phone application with React-Native and integrated it with Google Firebase. With neither of us having experience with ever building a fully-fledged react-native phone app before and, it was a challenge that we were determined to overcome and got complete in time!

## What's next for Matthew N and Jason W
We hope to carry on with our hardware and software integration by fully fleshing out the usage of our Google Firebase Database from within the microcontroller and the front-end application, and maybe even expanding the functionality of our LED To do list by including an oled panel! 
