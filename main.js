//ボックス開閉
$('#menu-icon').click(function(){
	$('#open').slideToggle();
});

//スライド
var images = ['https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9bdc6c13cd809ec3aa49a7419fb7cc20&auto=format&fit=crop&w=972&q=80',
 'https://images.unsplash.com/photo-1509957879660-dd8846a0b43d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3208975318f22ebbf1d907dad49d93e3&auto=format&fit=crop&w=1052&q=80',
  'https://images.unsplash.com/photo-1511278475330-1a31a6fc4dcc?ixlib=rb-0.3.5&s=6a1aa2e9f7010906c74623db6bc5b194&auto=format&fit=crop&w=1052&q=80'
];

var current = 0;
var changeImage = function(num) {
	if(current + num >= 0 && current + num < images.length) {
		current += num;
		document.getElementById('main_image').src = images[current];
	}
};


document.getElementById('prev').onclick = function() {
	changeImage(-1);
};
document.getElementById('next').onclick = function() {
	changeImage(1);
};
