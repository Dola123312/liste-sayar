function listesayar(gerekenliste) {
    for (var i =0;i != liste.length;i++){
        if(typeof liste[i] == "object"){
            for (var ı =0;ı != liste[i].length;ı++){
                console.log(liste[i][ı]);
            }
            i++;
        }
        console.log(liste[i]);
    }
}
