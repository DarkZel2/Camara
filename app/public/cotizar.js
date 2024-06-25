document.getElementById("event-form").addEventListener("submit", async(e) => {
  e.preventDefault();
  console.log(e.target.social.value)

  // const res = await fetch("http://localhost:4500/api/cotizar", {
  //   method:"POST",
  //   headers:{
  //     "content-Type" : "application/json"
  //   },
  //   body: JSON.stringify({

  //   })
  // });
})

/*
fecha= e.target.date.value
name= e.target.name.value
phone= e.target.phone.value
email= e.target.email.value
*/