
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
content.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)

let dogDes = document.createElement ('h3')
dogDes.textContent = 'Description:'
dogDetails.append (dogDes)

let dogDes2 = document.createElement ('p')
dogDes2.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'
dogDetails.append (dogDes2)

let dogDes3 = document.createElement ('h3')
dogDes3.textContent = 'Feeding Times:'
dogDetails.append (dogDes3)

let dogDes4 = document.createElement ('ul')

let time1 = document.createElement ('li')
let time2 = document.createElement ('li')
let time3 = document.createElement ('li')

time1.textContent ='9:00 am'
time2.textContent = '12:00 pm'
time3.textContent = '5:00 pm'

dogDes4.append (time1, time2, time3)

dogDetails.append (dogDes4)