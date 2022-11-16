// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Notify.init({
//     position: 'center-center',
//     success: {
//         background: 'red',
      
//     }
// })
// Notify.success('Sol lucet omnibus', () => alert('Norify'));

// console.log(throttle)



// fetch('.....').then((data) => ...).catch(() => ...).finally(() => ...)


// setTimeout(() => {
//     console.log(1)
// })

// Promise.resolve(2).then(data => console.log(data))


// console.log(3)
// const message = 'Hello';



// const callback = (param) => {
//     console.log(param)
// }


// setInterval(() => callback(message), 1000)

function delay(time, value, shouldReject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(shouldReject){
                reject(value)
            }else{
                resolve(value);
            }
        }, time)
    })
}

// const getWeather = delay(2000, "Tomorrow will be cold"); 

// const getPlaces = delay(500, 'Museum')

// const getStreets = delay(800, 'Khreshatyk', true);


// let answersCount = 0;
// getWeather.then(data => {
//     console.log("Recieved weather", data);
//     answersCount += 1
// })

// getPlaces.then(data => {
//     console.log("Recieved place", data);
//     answersCount += 1
// })

// getStreets.then(data => {
//     console.log("Recieved street", data)
//     answersCount += 1
// })


// const intervalID = setInterval(() => {
//     if(answersCount === 3){
//         console.log('Do our work')
//         clearInterval(intervalID)
//     }else{
//         console.log('Waitning for answers ...')
//     }
// }, 1000)


const customPromiseAll = (promisesArray) => {
    return new Promise((resolve, reject) => {

        const promisesCount = promisesArray.length;
    
        const promisesResults = new Array(promisesCount);
        let resolvedPromises = 0;

        for (let i = 0; i < promisesCount; i++) {
            
            const promise = promisesArray[i];
            // try{
            //     const data = await promise;
            //     promisesResults[i] = data;
            //         resolvedPromises += 1;
            //         if(resolvedPromises === promisesCount){
            //             resolve(promisesResults)
            //         }
            // }catch(error){
            //     reject(error);
            //     break;
            // }

            promise.then((data) => {
                promisesResults[i] = data;
                resolvedPromises += 1;
                if(resolvedPromises === promisesCount){
                    resolve(promisesResults)
                }
            }).catch((error) => {
                reject(error);
                // break; // Error !
            })
        }
    })
}

// customPromiseAll([getPlaces,getWeather , getStreets]).then(data => {
//     console.log('From  cutsom promise all -> ', data)
//     console.log('Do our work')
// }).catch((error) => {
//     console.log("Error from custom Promise all -> ", error)
// })


// setTimeout(() => resolve("foo"), 100)
// setTimeout(resolve, 100, 'foo');
// Promise.all([getWeather, getPlaces, getStreets]).then(data => {
//     console.log('From promise all -> ', data)
//     console.log('Do our work')
// }).catch((error) => {
//     console.log("Error from Promise all -> ", error)
// })


// const customPromiseRace = (promisesArray) => {
//     return new Promise((resolve, reject) => {
//         for (const promise of promisesArray) {
//             promise.then((data) => {
//                 resolve(data);
//             }).catch((error) => {
//                 reject(error)
//             })
//         }
//     })
// }

// customPromiseRace([getPlaces, getStreets, getWeather]).then(data => {
//     console.log("From custom Promies race -> ", data)
// }).catch(error => {
//     console.log('Error from custom promise race-> ', error)
// })

// Promise.race([getPlaces, getStreets, getWeather]).then(data => {
//     console.log("From Promies race -> ", data)
// }).catch(error => {
//     console.log('Error -> ', error)
// })

// const getWeather = delay(2000, "Tomorrow will be cold", true); 

// const getPlaces = delay(500, 'Museum', true)

// const getStreets = delay(800, 'Khreshatyk', true);


const customPromiseAny = (promisesArray) => {
    return new Promise((resolve, reject) => {
        let rejectedPromises = 0;
        for (const promise of promisesArray) {
            promise.then(data => {
                resolve(data)
            }).catch(() => {
                rejectedPromises += 1;
                if(rejectedPromises === promisesArray.length){
                    reject(new AggregateError([], 'All promises were rejected from our custom promise any'))
                }
            });
        }
    })
}

customPromiseAny([getPlaces, getStreets, getWeather]).then(data => {
    console.log('From custom Promise any -> ',data)
}).catch(error => {
    console.log('Error from custom Promise any -> ', error)
})


Promise.any([getPlaces, getStreets, getWeather]).then(data => {
    console.log('From Promise any -> ',data)
}).catch(error => {
    console.log('Error from Promise any -> ', error)
})





