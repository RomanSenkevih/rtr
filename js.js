//TASK 1:
let taskInp = document.querySelector('#task-input1');
  taskInp.onkeypress = function (e) {
    console.log(e.keyCode)
    if (!(e.keyCode >= 97 && e.keyCode <= 122)) {
      return false;
    }
  }

  //TASK 2:
  let chld = document.querySelector('#child');
  let marginRandL = 0;
  let marginUandD = 0;
  let rotate = 0;
    document.onkeydown = function (e) {
      console.log(e);
      if(e.key == 'ArrowRight') {
        if (marginRandL != 440 ) {
          marginRandL +=10;
        chld.style.marginLeft = `${marginRandL}px`
        }
      }

      else if(e.key == 'ArrowLeft') {
        if (marginRandL != 0 ) {
          marginRandL +=-10;
          chld.style.marginLeft = `${marginRandL}px`
        }
      }

      else if(e.key == 'ArrowUp') {
         if(marginUandD != 0){
        chld.style.marginTop = `${marginUandD-=10}px`
        }
      }

      else if(e.key == 'ArrowDown') {
        if(marginUandD != 240){
          chld.style.marginTop = `${marginUandD+=10}px`
        }
      }

      else if (e.key == ' ')  {
        chld.style.transform = `rotate(${rotate+=10}deg)`;  
      }
    }

  //TASK 3:
    let taskInp2 = document.querySelector('#task-input2');
    taskInp2.onkeypress = function (e) {
      this.value += String.fromCharCode(rand());
      console.log(e.key);
      return false;
    }

    const rand = _ => {
      return Math.floor(48 + Math.random() * (122-48+1));
    }

    //TASK 4:
    let taskInp3 = document.querySelector('#task-input3');
    taskInp3.onkeypress = function (e) {
      if (e.keyCode == 93) {
        this.value += String.fromCharCode(113);
        return false;
      }
      else if (e.keyCode == 39) {
        this.value += String.fromCharCode(97);
        return false;
      }
      else if (e.keyCode == 47) {
        this.value += String.fromCharCode(122);
        return false;
      }
      this.value += String.fromCharCode(e.keyCode+1);
      return false;
    }

