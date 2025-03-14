function transporMatriz(A){
for(let i = 0; i< A.lenght; i++){
    let linhaMatriz="";
    for(let j = 0; j < A[i].lenght; j++){
        linhaMatriz += A[i][j] + "\t";
    } 
    console.log(linhaMatriz);
    }
    
     for(let j = 0; j< A[0].lenght; j++){
        let linhaMatriz ="";
        for(let i = 0; i < A[j].lenght; i++){
            linhaMatriz += A[j][i] + "\t";
        }
        console.log(linhaMatriz)
    }

}

let A = [
    [1,2],
    [3,4],
    [5,6]
]

transporMatriz(A);
