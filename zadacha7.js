//Ученик прочитал X страниц, что составляет 23% числа всех страниц в книге. Сколько страниц в книге?

const pagesReaded = 23
const percentReaded = 23

const pagesCount = (pagesReaded, percentReaded) =>
	(pagesReaded * 100) / percentReaded

console.log(pagesCount(pagesReaded, percentReaded))
