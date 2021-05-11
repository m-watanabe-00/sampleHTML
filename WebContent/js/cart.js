$(function(){

	$('.slider').slick({
		arrows : true,
		accessibility : true
	});

	document.getElementById('form').onsubmit = function(event){
		event.preventDefault();
		const TAX_RATE = 1.1;
		let price1 = parseInt(document.getElementById('item1').value) * 500;
		let price2 = parseInt(document.getElementById('item2').value) * 1000;
		let price3 = parseInt(document.getElementById('item3').value) * 380;
		let total = Math.floor((price1 + price2 + price3) * TAX_RATE);
		document.getElementById('total').textContent = '合計金額は:' + total + '円(税込)';
	};

});