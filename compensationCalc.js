function getUnder60Net()
{
	monthlyGross = document.getElementById("per_month_offer_in_SGD").value;
	livingExpenses = document.getElementById("cost_of_living_in_SGD").value;
	tax = 0;
	document.getElementById("under60Net").value=Number(monthlyGross) - Number(livingExpenses) - Number(tax);
	//document.getElementById("under60NetINR").value=Number(under60Net) * Number(fxRate);
}

function getUnder60NetINR()
{
	fxRate = document.getElementById("fx_rate").value;
	under60Net = document.getElementById("under60Net").value;
	document.getElementById("under60NetINR").value=Number(under60Net) * Number(fxRate);
}

function getUnder60NetPA()
{
	monthlyNet = document.getElementById("under60Net").value;
	document.getElementById("under60NetPA").value=Number(monthlyNet) * 12;
}

function getUnder60NetPAINR()
{
	monthlyNet = document.getElementById("under60NetINR").value;
	document.getElementById("under60NetPAINR").value=Number(monthlyNet) * 12;
}

function getMidTax()
{
	monthlyTax = document.getElementById("per_month_offer_in_SGD").value;
	document.getElementById("midTax").value=Number(monthlyTax) * 15 / 100;
}

function getMidTaxINR()
{
	fxRate = document.getElementById("fx_rate").value;
	monthlyTax = document.getElementById("midTax").value;
	document.getElementById("midTaxINR").value=Number(monthlyTax) * Number(fxRate);
}

function getMidNet()
{
	monthlyGross = document.getElementById("per_month_offer_in_SGD").value;
	livingExpenses = document.getElementById("cost_of_living_in_SGD").value;
	tax = monthlyGross * 15 / 100;
	document.getElementById("midNet").value=Number(monthlyGross) - Number(livingExpenses) - Number(tax);
	document.getElementById("midNetINR").value=Number(midNet) * Number(fxRate);
}

function getMidNetINR()
{
	fxRate = document.getElementById("fx_rate").value;
	midNet = document.getElementById("midNet").value;
	document.getElementById("midNetINR").value=Number(midNet) * Number(fxRate);
}

function getMidNetPA()
{
	monthlyNet = document.getElementById("midNet").value;
	document.getElementById("midNetPA").value=Number(monthlyNet) * 12;
}

function getMidNetPAINR()
{
	monthlyNet = document.getElementById("midNetINR").value;
	document.getElementById("midNetPAINR").value=Number(monthlyNet) * 12;
}

function getUpTax()
{
	monthlyTax = document.getElementById("per_month_offer_in_SGD").value;
	document.getElementById("upTax").value=Number(monthlyTax) * 7 / 100;
}

function getUpTaxINR()
{
	fxRate = document.getElementById("fx_rate").value;
	monthlyTax = document.getElementById("upTax").value;
	document.getElementById("upTaxINR").value=Number(monthlyTax) * Number(fxRate);
}

function getUpNet()
{
	monthlyGross = document.getElementById("per_month_offer_in_SGD").value;
	livingExpenses = document.getElementById("cost_of_living_in_SGD").value;
	tax = monthlyGross * 7 / 100;
	document.getElementById("upNet").value=Number(monthlyGross) - Number(livingExpenses) - Number(tax);
	document.getElementById("upNetINR").value=Number(upNet) * Number(fxRate);
}

function getUpNetINR()
{
	fxRate = document.getElementById("fx_rate").value;
	upNet = document.getElementById("upNet").value;
	document.getElementById("upNetINR").value=Number(upNet) * Number(fxRate);
}

function getUpNetPA()
{
	monthlyNet = document.getElementById("upNet").value;
	document.getElementById("upNetPA").value=Number(monthlyNet) * 12;
}

function getUpNetPAINR()
{
	monthlyNet = document.getElementById("upNetINR").value;
	document.getElementById("upNetPAINR").value=Number(monthlyNet) * 12;
}

function getCustomTax()
{
	monthlyTax = document.getElementById("per_month_offer_in_SGD").value;
	customTaxRate = document.getElementById("custom_tax_rate").value;
	document.getElementById("customTax").value=Number(monthlyTax) * customTaxRate / 100;
}

function getCustomTaxINR()
{
	fxRate = document.getElementById("fx_rate").value;
	monthlyTax = document.getElementById("customTax").value;
	document.getElementById("customTaxINR").value=Number(monthlyTax) * Number(fxRate);
}

function getCustomNet()
{
	monthlyGross = document.getElementById("per_month_offer_in_SGD").value;
	livingExpenses = document.getElementById("cost_of_living_in_SGD").value;
	customTaxRate = document.getElementById("custom_tax_rate").value;
	tax = monthlyGross * customTaxRate / 100;
	document.getElementById("customNet").value=Number(monthlyGross) - Number(livingExpenses) - Number(tax);
	document.getElementById("customNetINR").value=Number(customNet) * Number(fxRate);
}

function getCustomNetINR()
{
	fxRate = document.getElementById("fx_rate").value;
	customNet = document.getElementById("customNet").value;
	document.getElementById("customNetINR").value=Number(customNet) * Number(fxRate);
}

function getCustomNetPA()
{
	monthlyNet = document.getElementById("customNet").value;
	document.getElementById("customNetPA").value=Number(monthlyNet) * 12;
}

function getCustomNetPAINR()
{
	monthlyNet = document.getElementById("customNetINR").value;
	document.getElementById("customNetPAINR").value=Number(monthlyNet) * 12;
}

function getRate(from, to) 
{
	var script = document.createElement('script');
	script.setAttribute('src', "http://query.yahooapis.com/v1/public/yql?q=select%20rate%2Cname%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes%3Fs%3D"+from+to+"%253DX%26f%3Dl1n'%20and%20columns%3D'rate%2Cname'&format=json&callback=parseExchangeRate");
	document.body.appendChild(script);
}

function parseExchangeRate(data) 
{
	var name = data.query.results.row.name;
	var rate = parseFloat(data.query.results.row.rate, 10);
	alert("Exchange rate " + name + " is " + rate);
	document.getElementById("fx_rate").value=Number(rate);
}

function submitform()
{
	//document.forms["myform"].submit();
	homeCurr=document.getElementById("home_currency").value;
	foreignCurr=document.getElementById("foreign_currency").value;
	getRate(homeCurr, foreignCurr);
}