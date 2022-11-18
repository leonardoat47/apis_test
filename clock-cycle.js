var s = 0, m = 0, h = 0

while(h <= 23){
    while(m <= 59){
        while(s <= 59){
        //Mostrar tiempo
        console.log("Hora: ", h, "Minuto: ", m, "Segundo: ", s)
        s=s+1
        }
        s=0
        m=m+1
    }
    m=0
    h=h+1
}
h=0
console.log("Hora: ", h, "Minuto: ", m, "Segundo: ", s)