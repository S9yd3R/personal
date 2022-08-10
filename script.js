let btnToogle = () => {
  const btn = document.getElementById("toogle");

  if (btn.value == "YES"){
    document.getElementById("main").style.backgroundColor = 'red' ;
    btn.value = "NO"
    
  }else {
    btn.value = "YES"
    alert("yes")
  }


}
