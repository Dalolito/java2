var vector=[];

	var ingresar=function () {
		console.log(vector);
			var nombrein=document.getElementById("nombrein").value;
vector.push(nombrein);


}
	var borrar=function () {
	var nombrebo=document.getElementById("nombrebo").value;
	n=1;
	i=0;
	num=vector.length-1;

	while(n==1){
if (i<=num) {

	if (vector[i]==nombrebo) {
        n1=vector[i];
        n2=vector[num];
      vector[i]=n2;
      vector[num]=n1;
vector.pop();
	document.getElementById("resultado").value="El nombre fue eliminado exitosamente";
	console.log(vector);
		n=n+1;
	}
	else
	{
		i=i+1;
	}
	}

else
	if (nombrebo!=vector[i])
{
		document.getElementById("resultado").value="El nombre no fue encontrado";
		n=n+1;
}
		}
}