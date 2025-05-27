var quotes=[
{quote:"“Be the change that you wish to see in the world.”",author:"― Mahatma Gandhi"},
{quote:"“If you tell the truth, you don't have to remember anything.”" ,author:"― Mark Twain"} ,
{quote:"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”" ,author:"― J.K. Rowling, Harry Potter and the Goblet of Fire"},
{quote:"“Friendship is born at the moment when one man says to another What! You too? I thought that no one but myself . . .”" ,author:"― ― C.S. Lewis, The Four Loves"},
{quote:"“A friend is someone who knows all about you and still loves you.”" ,author:"― Elbert Hubbard"},
	
]

function generateQuote(){
	var randomNumber=Math.floor(Math.random()* quotes.length)
	document.getElementById("newQuote").innerHTML=quotes[randomNumber].quote
	document.getElementById("author").innerHTML=quotes[randomNumber].author
}
