function mostrar()
{
	let tipoProducto;
	let precioProducto;
	let cantidadProducto;
	let marcaProducto;
	let fabricanteProducto;
	let contador;
	let alcoholMasBarato;
	let cantidadAlcoholMasBarato;
	let fabricanteAlcoholMasBarato;
	let precioAlcoholMasBarato;
	let acumuladorAlcohol;
	let acumuladorJabon;
	let acumuladorBarbijo;
	let	cantidadDePedidosAlcohol;
	let	cantidadDePedidosJabon;
	let	cantidadDePedidosBarbijo;
	let cantidadDePedidos;
	let promedioTipoMasUnidades;
	let cantidadTipoMasUnidades;
	
	cantidadDePedidosAlcohol = 0;
	cantidadDePedidosJabon = 0;
	cantidadDePedidosBarbijo = 0;
	cantidadTipoMasUnidades = 0;
	acumuladorAlcohol = 0;
	acumuladorJabon = 0;
	acumuladorBarbijo = 0;
	cantidadAlcoholMasBarato = 0;
	contador = 0;
	alcoholMasBarato = 1;

	while (contador < 5)
	{
		tipoProducto = prompt("Ingrese el tipo del producto.");

		while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
		{		
			tipoProducto = prompt("Reingrese el tipo del producto.");
		}

		precioProducto = prompt("Ingrese el precio del producto.");
		precioProducto = parseInt(precioProducto);

		while (precioProducto<100 || precioProducto>300 || isNaN(precioProducto))
		{
			precioProducto = prompt("Reingrese el precio del producto.");
			precioProducto = parseInt(precioProducto);
		}

		cantidadProducto = prompt("Ingrese la cantidad del producto.");
		cantidadProducto = parseInt(cantidadProducto);

		while (cantidadProducto<1 || cantidadProducto>1000 || isNaN(cantidadProducto))
		{
			cantidadProducto = prompt("Reingrese la cantidad del producto.");
			cantidadProducto = parseInt(cantidadProducto);
		}

		marcaProducto = prompt("Ingrese la marca del producto (se permiten números)");

		while (!isNaN(marcaProducto))
		{
			marcaProducto = prompt("Reingrese la marca del producto.");
		}

		fabricanteProducto = prompt("Ingrese el fabricante del producto.");

		while (!isNaN(fabricanteProducto))
		{
			fabricanteProducto = prompt("Reingrese el fabricante del producto.");
		}

		switch (tipoProducto) 
		{
			case "alcohol":
				if (alcoholMasBarato == 1 || precioProducto<precioAlcoholMasBarato) 
				{
					fabricanteAlcoholMasBarato = fabricanteProducto;
					cantidadAlcoholMasBarato = cantidadProducto;
					precioAlcoholMasBarato = precioProducto;
					alcoholMasBarato = 0;
				}	
				cantidadDePedidosAlcohol++;
				acumuladorAlcohol += cantidadProducto;
				break;
			case "barbijo":
				cantidadDePedidosBarbijo++;
				acumuladorBarbijo += cantidadProducto;
				break;
			case "jabon":
				cantidadDePedidosJabon++;
				acumuladorJabon += cantidadProducto;
				break;
		}

		if (acumuladorJabon>cantidadTipoMasUnidades)
        {
			cantidadTipoMasUnidades = acumuladorJabon;
			cantidadDePedidos = cantidadDePedidosJabon;
        }
        else
        {
            if (acumuladorAlcohol>cantidadTipoMasUnidades) 
            {
				cantidadTipoMasUnidades = acumuladorAlcohol;
				cantidadDePedidos = cantidadDePedidosAlcohol;
            }
            else
            {
                if (acumuladorBarbijo>cantidadTipoMasUnidades) 
                {
					cantidadTipoMasUnidades = acumuladorBarbijo;
					cantidadDePedidos = cantidadDePedidosBarbijo;
                }
            }
		} 
		
		contador++;
	}


	promedioTipoMasUnidades = cantidadTipoMasUnidades / cantidadDePedidos;
	
	document.write("<h2>La cantidad del alcohol mas bárato es "+cantidadAlcoholMasBarato+" y su fabricante es "+fabricanteAlcoholMasBarato+"</h2><br>");
	document.write("<h2>Del tipo con mas unidades el promedio por compra es: "+promedioTipoMasUnidades+"</h2><br>");
	document.write("<h2>Hay "+acumuladorJabon+" unidades de jabon en total</h2><br>");
		
}
