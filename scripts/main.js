console.log('Welcome to Validation Station!')
console.log('NEW TRAIN CAR FORM:', document.querySelector('#new-train-car-form'))

const form = document.querySelector('#new-train-car-form')
form.addEventListener('submit',(event)=>{
  event.preventDefault()


  let trainKind = document.querySelector('#train-kind').value
  if(trainKind == 'passenger' || trainKind == 'observation'){

    const seatNumber = document.querySelector('#train-seats').value
    if(seatNumber){
    //value.customValidity("Please Select Number of Seats")
    }
    else{
      console.log('error')
    }
  }
})


form.addEventListener('change',(event)=>{
  event.preventDefault()
  let trainKind = document.querySelector('#train-kind').value
  if(trainKind == 'passenger' || trainKind == 'observation'){
  document.querySelector('.seatHidden').classList.remove('d-none')
  }
  else{
    document.querySelector('.seatHidden').classList.add('d-none')
  }
})
