document.write('<h1>Switch Case in Java Script</h1>')

document.write('<br>')

let day_name = "5" //it will be between 1 to 7

switch (day_name) {
  case '1':
    document.write('The the is Monday')
    break

  case '2':
    document.write('The the is Tuesday')
    break

  case '3':
    document.write('The the is Wednesday')
    break

  case '4':
    document.write('The the is Thursday')
    break

  case '5':
    document.write('The the is Friday')
    break

  case '6':
    document.write('The the is Saturday')
    break

  case '7':
    document.write('The the is Sunday')
    break

  default:
    document.write('invalid day number')
}

document.write("<br>")
document.write("<br>")

let season_name = parseInt(prompt("Enter Month Number to Know the season"));

switch(season_name){
    case 11:
        document.write("The Month is November <br> <br>  And Season is Winter")
        break;

    case 12:
        document.write("The Month is December <br> <br> And Season is Winter");
        break;

    case 1:
        document.write("The Month is January <br> <br> And Season is Winter");
        break;

    case 2:
        document.write("The Month is Feburary <br> <br> And Season is Winter");
        break;

    case 3:
        document.write("The Month is March <br> <br> And Season is Spring");
        break;

    case 4:
        document.write("The Month is April <br> <br> And Season is Summer");
        break;

    case 5:
        document.write("The Month is May <br> <br> And Season is Summer");
        break;

    case 6:
        document.write("The Month is June <br> <br> And Season is Summer");
        break;

    case 7:
        document.write("The Month is July <br> <br> And Season is Summer");
        break;

    case 8:
        document.write("The Month is August <br> <br> And Season is Summer");
        break;

    case 9:
        document.write("The Month is September <br> <br> And Season is Summer");
        break;

    case 10:
        document.write("The Month is October <br> <br> And Season is Autumn");
        break;

    default:
        document.write("Invalid Month Number");
}

document.write("<br>")
document.write("<br>")



