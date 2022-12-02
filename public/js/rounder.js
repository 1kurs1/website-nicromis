export default function beautify(num){
    if(num >= 1000000) return new Intl.NumberFormat().format(Math.round((num/1000000) * 10)/10) + "m";
    else if(num >= 1000) return new Intl.NumberFormat().format((num/1000)*10/10) + "k";
}