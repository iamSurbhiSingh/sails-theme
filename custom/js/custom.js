$(function(){
	// jq-srink
	// jq-menu-collapse
	$('.jq-menu-collapse').click(function(e){
		e.preventDefault();
		var self = $(this);
		var status = self.attr('data-status');
		if(status == 'expanded')
		{
			$('.jq-srink').hide();
			$('.profile-main').hide();
			$('.menu-title').hide();
			$('.sidebar-container').css("width","55px");
			$('.navbar-brand').css("width","55px");
			self.attr('data-status','collapse');
		}
		else {
			$('.jq-srink').show();
			$('.profile-main').show();
			$('.menu-title').show();
			$('.sidebar-container').css("width","220px");
			$('.navbar-brand').css("width","220px");
			self.attr('data-status','expanded');
		}
	});
	$('.collapsible').collapsible();
});