var method = {
	// 判断pjax请求
	isPjax: function(param) {
		var bool = false;
		if(!param) return bool;
		if(!param['headers']) return bool;
		if(!param['headers']['x-pjax']) return bool;
		if(param['headers']['x-pjax'] == 'true') {
			return bool = true;
		} else {
			return bool;
		}
	},
	// 渲染
	renderPjax: function(req, res, option) {
		if(method.isPjax(req)) {
			res.render(option.pjaxTpl);
		} else {
			res.render(option.tpl);
		}
	}

}

module.exports = method;
