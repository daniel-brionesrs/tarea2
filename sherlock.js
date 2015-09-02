//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
cadena = _INPUT.split("\n");

for(i = 0; i < cadena[0]; i++)
{
suma = 0; 
	temp = cadena[i +1].split(" ");

	for(k = temp[0]; k <= temp[1]; k++){
		num = Math.sqrt(k);
		comparando = Math.ceil(num);

			if (num == comparando) {
			suma = suma +1;
			//console.log("suma = " + suma + "\n");
			}
	}
	console.log("Intervalo " + (i+1) + " = " + suma);
}

